// import { Section } from "../Section";
// import { SectionTitle } from "../SectionTitle";
// import { GalleryModal } from "components/shared/GalleryModal";
import { default as NextImage } from "next/image";
// import { Image } from "types/image";
import { Image } from "@template/types/image";
import styles from "./ImageSection.module.css";
import { Section, SectionTitle } from "../Section";
import { ccn } from "@template/helpers/css";
import { SanityBlockContent } from "@template/components/shared/SanityBlockContent/SanityBlockContent";
import { formatDimensions } from "@template/helpers/image";
// import { useGalleryModal } from "components/hooks/useGalleryModal";

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
  const { title, subtitle, image, bodyRaw, isImageRight, altBase } = props;

  // const { onImageClick, ...galleryModalProps } = useGalleryModal([image]);

  return (
    <>
      <Section>
        <div
          className={`container ${ccn(!isImageRight, styles.containerReverse)}`}
        >
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
