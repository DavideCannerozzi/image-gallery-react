import { images } from "./data";
import Thumbnail from "./Thumbnail";

interface ThumbnailListProps {
  setCurrentIndex: (index: number) => void;
}

export default function ThumbnailList({ setCurrentIndex }: ThumbnailListProps) {
  return (
    <div className="flex justify-center flex-wrap gap-4 mt-16">
      {images.map((image, index) => (
        <Thumbnail
          key={image.id}
          url={image.url}
          title={image.title}
          onClick={() => setCurrentIndex(index)}
        />
      ))}
    </div>
  );
}
