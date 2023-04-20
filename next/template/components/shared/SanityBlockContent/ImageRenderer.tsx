import { default as NextImage } from 'next/image';
// import styles from './ImageRenderer.module.css';
import { Image } from '../../../types/image';
import { formatBodyRawImage } from '../../../helpers/blockContent';
import { formatDimensions } from '../../../helpers/image';

export interface ImageRendererProps {
  value: {
    asset: {
      _ref: string;
    };
  };
  onImageClick?: (image: Image) => void;
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

  const blurDataURL = image?.blurDataURL;

  return (
    <div>
      <div className="pulsePointer" style={{ display: 'inline-block' }}>
        <NextImage
          {...formatDimensions(image)}
          onClick={() => onImageClick && onImageClick(image)}
          alt={alt}
          placeholder={blurDataURL ? 'blur' : 'empty'}
          blurDataURL={blurDataURL}
        />
      </div>
    </div>
  );
};
