import { default as NextImage } from "next/image";
import { PropsWithChildren } from "react";
import { Box, IconButton, Modal } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import CloseIcon from "@mui/icons-material/Close";
import { Image } from "../../../types/image";
import { LAYOUT } from "../../../theme/constants";
import { formatDimensions } from "../../../helpers/image";

interface GalleryModalProps {
  images: Image[];
  onClose: () => any;
  selectedImageIndex: number;
  onChangeImage: (index: number) => void;
}

const ImageWrapper = ({ children }: PropsWithChildren) => (
  <Box
    sx={{
      overflow: "hidden",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      padding: LAYOUT.SPACING_XS,
      "& > *": {
        maxWidth: "100%",
        maxHeight: "100%",
        height: "auto",
        pointerEvents: "none",
        objectFit: "contain",
      },
    }}
  >
    {children}
  </Box>
);

export const GalleryModal: React.FC<GalleryModalProps> = (props) => {
  const { images, onClose, selectedImageIndex, onChangeImage } = props;

  const open = selectedImageIndex > -1;

  const selectedImage = images[selectedImageIndex];

  const blurDataURL = selectedImage?.blurDataURL;

  if (!open) return null;

  return (
    <Modal {...{ open, onClose }}>
      <Box height="100%">
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
            zIndex: 10,
            cursor: "pointer",
            background: "#494949",
            color: "white",
            "&:hover": {
              background: "black",
              opacity: 0.6,
            },
          }}
        >
          <CloseIcon />
        </IconButton>

        <Box flex={1} sx={{ overflow: "hidden", height: "100%" }}>
          {images.length === 1 ? (
            <ImageWrapper>
              <NextImage
                {...formatDimensions(selectedImage)}
                alt="modal-image"
                placeholder={blurDataURL ? "blur" : "empty"}
                blurDataURL={blurDataURL}
              />
            </ImageWrapper>
          ) : (
            <Carousel
              autoPlay={false}
              onChange={(index = 0) => onChangeImage(index)}
              index={selectedImageIndex}
              navButtonsAlwaysVisible
              fullHeightHover={false}
              sx={{
                height: "100%",
                color: "red",
                display: "flex",
                flexDirection: "column",
                "& > *:first-of-type": {
                  maxHeight: "100%",
                  overflow: "hidden",
                  flex: 1,
                },
              }}
            >
              {images.map((image) => (
                <ImageWrapper key={image.src}>
                  <NextImage
                    {...formatDimensions(image)}
                    alt="modal-image"
                    placeholder={image.blurDataURL ? "blur" : "empty"}
                    blurDataURL={image.blurDataURL}
                  />
                </ImageWrapper>
              ))}
            </Carousel>
          )}
        </Box>
      </Box>
    </Modal>
  );
};
