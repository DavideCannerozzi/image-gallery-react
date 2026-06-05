interface ThumbnailProps {
  url: string;
  title: string;
  onClick: () => void;
}

export default function Thumbnail({ url, title, onClick }: ThumbnailProps) {
  return (
    <button onClick={onClick} className="cursor-pointer">
      <img className="w-36 h-28 object-cover" src={url} alt={title} />
      <p>{title}</p>
    </button>
  );
}
