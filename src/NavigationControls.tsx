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
    <div>
      <button
        className="absolute top-1/2 left-2 bg-black bg-opacity-50 text-white rounded-full shadow-lg p-3 hover:scale-110 hover:shadow-blue-400 transition-transform duration-300 cursor-pointer"
        onClick={prevImage}
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 right-2 bg-black bg-opacity-50 text-white rounded-full shadow-lg p-3 hover:scale-110 hover:shadow-blue-400 transition-transform duration-300 cursor-pointer"
        onClick={nextImage}
      >
        Next
      </button>
    </div>
  );
}
