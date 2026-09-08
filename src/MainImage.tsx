import { images } from "./data";

interface MainImageProps {
  currentIndex: number;
}

export default function MainImage({ currentIndex }: MainImageProps) {
  const mainImage = images[currentIndex];

  return (
    <div className="flex justify-center mt-12 ">
      <img
        width={800}
        height={500}
        className="w-full max-w-4xl object-contain"
        src={mainImage.url}
        alt={mainImage.title}
      />
    </div>
  );
}
