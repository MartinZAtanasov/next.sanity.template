import { Image } from "@template/types/image";
import { useState } from "react";

export const useGalleryModal = (images: Image[]) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(-1);

  const onImageClick = (image: Image) =>
    setSelectedImageIndex(images.findIndex(({ src }) => src === image.src));

  const onClose = () => setSelectedImageIndex(-1);
  const onChangeImage = (index: number) => setSelectedImageIndex(index);

  return {
    onImageClick,
    selectedImageIndex,
    onClose,
    onChangeImage,
  };
};
