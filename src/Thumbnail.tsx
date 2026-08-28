interface ThumbnailProps {
  url: string;
  title: string;
  onClick: () => void;
  isSelected: boolean;
}

export default function Thumbnail({
  url,
  title,
  onClick,
  isSelected,
}: ThumbnailProps) {
  return (
    <button
      aria-current={isSelected ? "true" : undefined}
      onClick={onClick}
      className={`cursor-pointer ${
        isSelected ? "ring-1 ring-blue-500" : "ring-0"
      }`}
    >
      <img className="w-36 h-28 object-cover" src={url} alt={title} />
      <p>{title}</p>
    </button>
  );
}
