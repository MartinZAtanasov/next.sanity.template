import { Image } from "@template/types/image";
import { Section, SectionTitle } from "../Section";
import { SanityBlockContent } from "@template/components/shared/SanityBlockContent/SanityBlockContent";
import {
  GalleryModal,
  useGalleryModal,
} from "@template/components/shared/GalleryModal";
import { GridContainer } from "@template/components/shared/GridContainer";
import { Box } from "@mui/material";
import { ClickableImage } from "@template/components/shared/ClickableImage";

export interface ImageSectionProps {
  title: string;
  subtitle: string;
  image: Image;
  bodyRaw: any;
  isImageRight: boolean;
  altBase: string;
  __typename: string;
}

export const ImageSection: React.FC<ImageSectionProps> = (props) => {
  const { title, subtitle, image, bodyRaw, isImageRight, altBase } = props;

  const { onImageClick, ...galleryModalProps } = useGalleryModal([image]);

  return (
    <>
      <Section>
        <GridContainer reverse={!isImageRight}>
          <Box>
            <SectionTitle {...{ title, subtitle }} />
            <SanityBlockContent {...{ bodyRaw, altBase }} />
          </Box>

          <ClickableImage
            {...{
              onImageClick,
              image,
              alt: `${altBase} - ${title}`,
              maxWidth: 550,
            }}
          />
        </GridContainer>
      </Section>

      <GalleryModal images={[image]} {...galleryModalProps} />
    </>
  );
};
