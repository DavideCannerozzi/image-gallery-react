import { images } from "./data";

interface NavigationControlsProps {
  setCurrentIndex: (index: number) => void;
  currentIndex: number;
}

export default function NavigationControls({
  setCurrentIndex,
  currentIndex,
}: NavigationControlsProps) {
  const nextImage = () => {
    if (currentIndex < images.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const prevImage = () => {
    if (currentIndex !== 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
      <button
        className="absolute top-1/2 left-3 -translate-y-1/2 text-black text-9xl hover:scale-110 transition cursor-pointer bg-transparent disabled:cursor-not-allowed disabled:text-gray-500 disabled:hover:scale-100"
        onClick={prevImage}
        disabled={currentIndex === 0}
        aria-label="Previous Image"
      >
        ‹
      </button>
      <button
        className="absolute top-1/2 right-3 -translate-y-1/2 text-black text-9xl hover:scale-110 transition cursor-pointer bg-transparent disabled:cursor-not-allowed disabled:text-gray-500 disabled:hover:scale-100"
        onClick={nextImage}
        disabled={currentIndex === images.length - 1}
        aria-label="Next Image"
      >
        ›
      </button>
    </>
  );
}
