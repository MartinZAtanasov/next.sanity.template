import { default as NextImage } from "next/image";
import styles from "./GalleryModal.module.css";
import { useRef } from "react";
import { Image } from "@template/types/image";
import { formatDimensions } from "@template/helpers/image";
import { Modal } from "../Modal";

interface GalleryModalProps {
  images: Image[];
  onClose: () => any;
  onNextImage: () => any;
  onPrevImage: () => any;
  selectedImageIndex: number;
}

export const GalleryModal: React.FC<GalleryModalProps> = (props) => {
  const { images, onClose, selectedImageIndex, onNextImage, onPrevImage } =
    props;

  const isOpen = selectedImageIndex > -1;

  const selectedImage = images[selectedImageIndex];

  const isLastImage = selectedImageIndex === images.length - 1;
  const isFirstImage = selectedImageIndex === 0;

  const blurDataURL = selectedImage?.blurDataURL;

  // On Slide
  const slideStartX = useRef(0);
  const slideEndX = useRef(0);

  const onSlideStart = (screenX: number) => {
    slideStartX.current = screenX;
  };

  const onSlideEnd = (screenX: number) => {
    slideEndX.current = screenX;
    if (slideEndX.current < slideStartX.current && !isLastImage) {
      onNextImage();
    }
    if (slideEndX.current > slideStartX.current && !isFirstImage) {
      onPrevImage();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {isOpen && (
        <div className={styles.container}>
          <div>
            {!isFirstImage && (
              <div className={`${styles.arrow}`} onClick={() => onPrevImage()}>
                &#x276E;
              </div>
            )}
          </div>
          <div
            onTouchStart={(e) => onSlideStart(e.changedTouches[0].screenX)}
            onTouchEnd={(e) => onSlideEnd(e.changedTouches[0].screenX)}
            className={styles.imageContainer}
          >
            <NextImage
              {...formatDimensions(selectedImage, 1000)}
              alt="modal-image"
              placeholder={blurDataURL ? "blur" : "empty"}
              blurDataURL={blurDataURL}
            />
          </div>
          <div>
            {!isLastImage && (
              <div className={`${styles.arrow}`} onClick={() => onNextImage()}>
                &#x276F;
              </div>
            )}
          </div>
        </div>
      )}
    </Modal>
  );
};
