import React, { useRef, useState, useEffect } from 'react';

const Notes = ({ id, title, text, x, y, color = '#fbb6ce', onChange, onDrag }) => {
  const noteRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isEditing, setIsEditing] = useState(false);

  // Mouse events
  const handleMouseDown = (e) => {
    const rect = noteRef.current.getBoundingClientRect();
    setOffset({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (isDragging && noteRef.current?.parentElement) {
      const parentRect = noteRef.current.parentElement.getBoundingClientRect();
      const noteWidth = noteRef.current.offsetWidth;
      const noteHeight = noteRef.current.offsetHeight;

      let newX = e.clientX - offset.x - parentRect.left;
      let newY = e.clientY - offset.y - parentRect.top;

      newX = Math.max(0, Math.min(newX, parentRect.width - noteWidth));
      newY = Math.max(0, Math.min(newY, parentRect.height - noteHeight));

      onDrag(id, newX, newY);
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  // Touch events
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    const rect = noteRef.current.getBoundingClientRect();
    setOffset({ x: touch.clientX - rect.left, y: touch.clientY - rect.top });
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (isDragging && noteRef.current?.parentElement) {
      const touch = e.touches[0];
      const parentRect = noteRef.current.parentElement.getBoundingClientRect();
      const noteWidth = noteRef.current.offsetWidth;
      const noteHeight = noteRef.current.offsetHeight;

      let newX = touch.clientX - offset.x - parentRect.left;
      let newY = touch.clientY - offset.y - parentRect.top;

      newX = Math.max(0, Math.min(newX, parentRect.width - noteWidth));
      newY = Math.max(0, Math.min(newY, parentRect.height - noteHeight));

      onDrag(id, newX, newY);
    }
  };

  const handleTouchEnd = () => setIsDragging(false);

  // Attach/remove global listeners when dragging
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleTouchEnd);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, offset]);

  return (
    <div
      ref={noteRef}
      className="absolute cursor-grab select-none touch-none"
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      style={{ top: y, left: x, zIndex: 10, width: '160px', height: '160px' }}
    >
      <div
        className="relative w-35 h-40 lg:w-full lg:h-full border rounded-lg shadow-md"
        style={{ backgroundColor: color, borderColor: color }}
      >
        {/* Tape corners */}
        <div
          className="absolute top-0 left-0 w-4 h-4 rotate-45 border -translate-x-1 -translate-y-1"
          style={{ backgroundColor: color }}
        ></div>
        <div
          className="absolute bottom-0 right-0 w-4 h-4 z-20 border rotate-45 translate-x-1 translate-y-1"
          style={{ backgroundColor: color }}
        ></div>

        {/* Decorations */}
        <div className="absolute left-1 top-3 flex flex-col gap-2 z-10">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="text-sm">
              🐻‍❄️
            </span>
          ))}
        </div>

        {/* Editable Text */}
        <div
          className="absolute inset-x-6 top-4 bottom-6 p-1 z-20 overflow-hidden"
          onDoubleClick={() => setIsEditing(true)}
        >
          {isEditing ? (
            <textarea
              value={text}
              autoFocus
              onBlur={() => setIsEditing(false)}
              onChange={(e) => onChange(id, e.target.value)}
              className="w-full h-full resize-none bg-transparent text-black text-sm outline-none"
            />
          ) : (
            <p className="text-xl text-center text-white text-shadow-fuchsia-400 text-shadow-2xs font-semibold whitespace-pre-line">{text}</p>
          )}
        </div>

        {/* Title */}
        <div className="absolute bottom-0 text-[16px] text-shadow-white text-shadow-2xs pl-3 w-full rounded-b-md overflow-hidden font-semibold bg-rose-300">
          {title}
        </div>
      </div>
    </div>
  );
};

export default Notes;
