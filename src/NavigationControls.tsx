import { useEffect } from "react";
import { images } from "./data";

interface NavigationControlsProps {
  setCurrentIndex: (index: number) => void;
  currentIndex: number;
}

const navigationControlsClass =
  "absolute top-1/2 -translate-y-1/2 text-black text-9xl hover:scale-110 transition cursor-pointer bg-transparent disabled:cursor-not-allowed disabled:text-gray-500 disabled:hover:scale-100";

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

  useEffect(() => {
    const interval = setTimeout(() => {
      setCurrentIndex(
        currentIndex === images.length - 1 ? 0 : currentIndex + 1,
      );
    }, 3000);
    return () => clearTimeout(interval);
  }, [currentIndex, setCurrentIndex]);

  return (
    <>
      <button
        className={`${navigationControlsClass} left-3`}
        onClick={prevImage}
        disabled={currentIndex === 0}
        aria-label="Previous Image"
      >
        ‹
      </button>
      <button
        className={`${navigationControlsClass} right-3`}
        onClick={nextImage}
        disabled={currentIndex === images.length - 1}
        aria-label="Next Image"
      >
        ›
      </button>
    </>
  );
}
