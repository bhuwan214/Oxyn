import { useRef, useState } from 'react';

const CursorFollower = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const bounds = containerRef.current?.getBoundingClientRect();
    if (bounds) {
      setCoords({
        x: e.clientX - bounds.left,
        y: e.clientY - bounds.top,
      });
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="relative w-full h-full  rounded-lg overflow-hidden"
    >
    

      {visible && (
        <div
          className=" circle absolute w-20 h-20 border-white border-2 text-m flex items-center justify-center rounded-full pointer-events-none transition-all duration-75"
          style={{
            transform: `translate(${coords.x - 12}px, ${coords.y - 12}px)`,
          }}
        >
        <span className='text-white opacity-100 w-[50%] uppercase leading-3.5 font-medium'> Shop now</span>
  </div>
        
      )}
    </div>
  );
};

export default CursorFollower;
