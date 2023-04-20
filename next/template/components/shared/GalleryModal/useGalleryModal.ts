import { Image } from "@template/types/image";
import { useEffect, useState } from "react";

export const useGalleryModal = (images: Image[]) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(-1);

  const onImageClick = (image: Image) =>
    setSelectedImageIndex(images.findIndex(({ src }) => src === image.src));

  const onClose = () => setSelectedImageIndex(-1);
  const onNextImage = () => setSelectedImageIndex((current) => ++current);
  const onPrevImage = () => setSelectedImageIndex((current) => --current);

  useEffect(() => {
    document.body.style.overflow = selectedImageIndex > -1 ? "hidden" : "auto";
  }, [selectedImageIndex]);

  return {
    onImageClick,
    selectedImageIndex,
    onClose,
    onNextImage,
    onPrevImage,
  };
};
