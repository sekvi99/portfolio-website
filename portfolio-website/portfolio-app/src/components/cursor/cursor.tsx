import React, { useEffect, useState } from "react";
import "./cursor.scss";

const Cursor: React.FC = (): JSX.Element => {
  const [cursorPosition, setCursorPosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleCursorChange = () => {
      const cursor = document.querySelector(".cursor") as HTMLElement;
      if (!cursor) return;

      setTimeout(() => {
        cursor.style.cssText =
          "left: " + cursorPosition.x + "px; top: " + cursorPosition.y + "px;";
      }, 100);
    };

    handleCursorChange();
  }, [cursorPosition]);

  return <div className="cursor"></div>;
};

export default Cursor;
