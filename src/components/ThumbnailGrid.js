export default function ThumbnailGrid({ streams, onSelect }) {
  return (
    <div className="grid grid-cols-5 gap-2 mt-4">
      {streams.map((stream, index) => (
        <div key={index} className="cursor-pointer p-2 bg-gray-800 rounded-lg hover:bg-gray-700" onClick={() => onSelect(stream.url)}>
          <img src={stream.thumbnail} alt={`Stream ${index + 1}`} className="w-16 h-16 rounded-md" />
        </div>
      ))}
    </div>
  );
}
