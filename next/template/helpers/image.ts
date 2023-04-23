import { LAYOUT } from "../theme/constants";
import { Image, SanityImage } from "../types/image";

const DEFAULT_MAX_WIDTH = +LAYOUT.MAX_WIDTH.replace("px", "");

export const formatDimensions = (image: Image, maxWidth?: number) => {
  const limitWidth = maxWidth || DEFAULT_MAX_WIDTH;
  const { width, height, aspectRatio, src } = image;
  if (width <= limitWidth || !aspectRatio) return { width, height, src };

  return {
    width: limitWidth,
    height: Math.floor(limitWidth / aspectRatio),
    src,
  };
};

export const formatSanityImage = (sanityImage: SanityImage): Image => {
  const {
    asset: {
      url,
      metadata: { dimensions, lqip },
    },
  } = sanityImage;

  return { src: url, ...dimensions, blurDataURL: lqip };
};
