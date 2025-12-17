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
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={prevImage}
      >
        Prev
      </button>
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={nextImage}
      >
        Next
      </button>
    </div>
  );
}
