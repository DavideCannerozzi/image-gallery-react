import { useState } from "react";
import MainImage from "./MainImage";
import ThumbnailList from "./ThumbnailList";
import NavigationControls from "./NavigationControls";

export default function ImageViewer() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  return (
    <div>
      <MainImage currentIndex={currentIndex} />
      <NavigationControls
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      <ThumbnailList setCurrentIndex={setCurrentIndex} />
    </div>
  );
}
