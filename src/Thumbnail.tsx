interface ThumbnailProps {
  url: string;
  title: string;
  onClick: () => void;
}

export default function Thumbnail({ url, title, onClick }: ThumbnailProps) {
  return (
    <div onClick={onClick}>
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
}
