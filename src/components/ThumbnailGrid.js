import { useState, useEffect, useRef } from "react";

export function ThumbnailGrid({ streams, onSelect }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const gridRef = useRef(null);

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight" && selectedIndex < streams.length - 1) {
      setSelectedIndex((prev) => prev + 1);
    } else if (event.key === "ArrowLeft" && selectedIndex > 0) {
      setSelectedIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, streams]);

  return (
    <div ref={gridRef} className="w-full overflow-x-auto flex gap-4 mt-4 p-2 bg-gray-900">
      {streams.map((stream, index) => (
        <div
          key={index}
          className={`cursor-pointer p-2 rounded-lg transition-all duration-200 ${
            index === selectedIndex ? "border-4 border-blue-500 scale-110" : "border-2 border-gray-700"
          }`}
          onClick={() => onSelect(stream.url)}
        >
          <img src={stream.thumbnail} alt={`Episode ${index + 1}`} className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-md" />
        </div>
      ))}
    </div>
  );
}