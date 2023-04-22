import { Box, keyframes } from "@mui/material";
import { formatDimensions } from "@template/helpers/image";
import { Image } from "@template/types/image";
import { default as NextImage, ImageProps } from "next/image";

interface Props extends Omit<ImageProps, "src" | "width" | "height"> {
  image: Image;
  onImageClick: (image: Image) => void;
  maxWidth?: number;
}

const pulse = keyframes`
  0% {
    opacity: 0.8;
    width: 0;
    height: 0;
  }
  100% {
    width: 100px;
    height: 100px;
    opacity: 0;
  }
`;

export const ClickableImage = (props: Props) => {
  const { image, onImageClick, maxWidth, ...rest } = props;

  return (
    <Box
      onClick={() => onImageClick(image)}
      sx={{
        cursor: "pointer",
        transition: ".2s ease",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        "& > *": {
          maxWidth: "100%",
          maxHeight: "100%",
          height: "auto",
          objectFit: "contain",
        },
        "&:before": {
          content: "''",
          position: "absolute",
          left: "50%",
          top: "50%",
          width: "100px",
          height: "100px",
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          backgroundColor: (theme) => theme.palette.primary.main,
          opacity: 0,
          transformOrigin: "center",
          zIndex: 10,
        },
        "&:hover": {
          opacity: 0.8,
          "&:before": {
            animation: `${pulse} 1s ease forwards`,
          },
        },
      }}
    >
      <NextImage
        {...formatDimensions(image, maxWidth)}
        placeholder={image.blurDataURL ? "blur" : "empty"}
        blurDataURL={image.blurDataURL}
        {...rest}
      />
    </Box>
  );
};
