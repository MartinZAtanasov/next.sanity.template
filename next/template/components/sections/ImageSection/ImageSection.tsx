import { Section, SectionTitle } from "../Section";
import { SanityBlockContent } from "../..//shared/SanityBlockContent/SanityBlockContent";
import { GalleryModal, useGalleryModal } from "../..//shared/GalleryModal";
import { GridContainer } from "../..//shared/GridContainer";
import { Box } from "@mui/material";
import { ClickableImage } from "../..//shared/ClickableImage";
import { Image } from "../../../types/image";
import { LAYOUT } from "../../../theme/constants";

export interface ImageSectionProps {
  title: string;
  subtitle?: string;
  image: Image;
  bodyRaw: any;
  isImageRight: boolean;
  altBase: string;
  __typename: string;
}

// * Half of layout max width
const imageMaxWidth = +(+LAYOUT.MAX_WIDTH.replace("px", "") / 2).toFixed(2);

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
              maxWidth: imageMaxWidth,
            }}
          />
        </GridContainer>
      </Section>

      <GalleryModal images={[image]} {...galleryModalProps} />
    </>
  );
};
