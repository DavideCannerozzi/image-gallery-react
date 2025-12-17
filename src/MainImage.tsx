import { images } from "./data";

interface MainImageProps {
  currentIndex: number;
}

export default function MainImage({ currentIndex }: MainImageProps) {
  const mainImage = images[currentIndex];
  return (
    <div>
      <img src={mainImage.url} alt={mainImage.title} />
    </div>
  );
}
