import { Image } from "@template/types/image";
import { formatBodyRawImage } from "@template/helpers/blockContent";
import { ClickableImage } from "../ClickableImage";

export interface ImageRendererProps {
  value: {
    asset: {
      _ref: string;
    };
  };
  onImageClick: (image: Image) => void;
  alt: string;
}

export const ImageRenderer: React.FC<ImageRendererProps> = (props) => {
  const {
    onImageClick,
    alt,
    value: {
      asset: { _ref },
    },
  } = props;

  const image = formatBodyRawImage(_ref);

  return (
    <ClickableImage
      {...{
        onImageClick,
        image,
        alt,
        maxWidth: 550,
      }}
    />
  );
};
