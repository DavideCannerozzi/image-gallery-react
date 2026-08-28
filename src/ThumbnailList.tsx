import { images } from "./data";
import Thumbnail from "./Thumbnail";

interface ThumbnailListProps {
  setCurrentIndex: (index: number) => void;
  currentIndex: number;
}

export default function ThumbnailList({
  setCurrentIndex,
  currentIndex,
}: ThumbnailListProps) {
  return (
    <div className="flex justify-center flex-wrap gap-4 mt-16">
      {images.map((image, index) => (
        <Thumbnail
          key={image.id}
          url={image.url}
          title={image.title}
          isSelected={currentIndex === index}
          onClick={() => setCurrentIndex(index)}
        />
      ))}
    </div>
  );
}
