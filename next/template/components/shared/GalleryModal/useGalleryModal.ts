import { useState } from "react";
import { Image } from "../../../types/image";

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
