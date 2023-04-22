import { formatBodyRawImage } from "../../../helpers/blockContent";
import { Image } from "../../../types/image";
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
