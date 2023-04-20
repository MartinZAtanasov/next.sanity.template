import { Section } from '../Section/Section';
import { SectionTitle } from '../SectionTitle/SectionTitle';
// import { GalleryModal } from 'components/shared/GalleryModal';
import { default as NextImage } from 'next/image';
import { Image } from '../../../types/image';
// import styles from './ImageSection.module.css';
// import { useGalleryModal } from 'components/hooks/useGalleryModal';
import { formatDimensions } from '../../../helpers/image';
import { SanityBlockContent } from '../../shared/SanityBlockContent/SanityBlockContent';
// import { ccn } from 'helpers/cssModules';
// import { SanityBlockContent } from 'components/shared/SanityBlockContent';

export interface ImageSectionProps {
  title: string;
  subtitle: string;
  image: Image;
  bodyRaw: any;
  isImageRight: boolean;
  buttonText?: string;
  buttonNavigatesTo?: string;
  altBase: string;
  __typename: string;
}

export const ImageSection: React.FC<ImageSectionProps> = (props) => {
  const {
    title,
    subtitle,
    image,
    bodyRaw,
    isImageRight,
    buttonText,
    buttonNavigatesTo,
    altBase,
  } = props;

  //   const { onImageClick, ...galleryModalProps } = useGalleryModal([image]);

  return (
    <>
      <Section>
        <div>
          <div>
            <SectionTitle title={title} subtitle={subtitle} />

            <SanityBlockContent {...{ bodyRaw, altBase }} />
          </div>

          <div
            // onClick={() => onImageClick(image)}
            className="pulsePointer centeredContent"
          >
            <NextImage
              {...formatDimensions(image, 550)}
              alt={`${altBase} - ${title}`}
              placeholder="blur"
              blurDataURL={image.blurDataURL}
            />
          </div>
        </div>
      </Section>

      {/* <GalleryModal images={[image]} {...galleryModalProps} /> */}
    </>
  );
};
