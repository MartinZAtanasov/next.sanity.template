import { Box } from "@mui/material";
import { Image } from "../../../types/image";
import { ClickableImage } from "../../shared/ClickableImage";
import { GalleryModal, useGalleryModal } from "../../shared/GalleryModal";
import { GridContainer } from "../../shared/GridContainer";
import { SanityBlockContent } from "../../shared/SanityBlockContent";
import { Section, SectionTitle } from "../Section";
import { LAYOUT } from "../../../theme/constants";

export interface SideImageSectionProps {
  title: string;
  subtitle: string;
  sideImage: Image;
  bodyRaw: any;
  otherImages: Image[];
  altBase: string;
  __typename: string;
}

// * Half of layout max width
const sideImageMaxWidth = +(+LAYOUT.MAX_WIDTH.replace("px", "") / 2).toFixed();
// * 4th of layout max width
const otherImageMaxWidth = +(
  sideImageMaxWidth / 2 -
  +LAYOUT.SPACING_XS.replace("px", "") * 2
).toFixed();

export const SideImageSection = (props: SideImageSectionProps) => {
  const { title, subtitle, sideImage, bodyRaw, otherImages, altBase } = props;

  const { onImageClick, ...galleryModalProps } = useGalleryModal([
    sideImage,
    ...otherImages,
  ]);

  return (
    <>
      <Section>
        <GridContainer>
          <Box>
            <SectionTitle {...{ title, subtitle }} />

            <Box display="flex" flexWrap="wrap" gap={LAYOUT.SPACING_XS}>
              {otherImages.map((image, i) => (
                <ClickableImage
                  key={image.src}
                  {...{
                    image,
                    onImageClick,
                    alt: `${altBase} - ${title}-${i + 1}`,
                    maxWidth: otherImageMaxWidth,
                  }}
                />
              ))}
            </Box>

            <SanityBlockContent {...{ bodyRaw, altBase }} />
          </Box>
          <ClickableImage
            {...{
              image: sideImage,
              onImageClick,
              alt: `${altBase} - ${title}`,
              maxWidth: sideImageMaxWidth,
            }}
          />
        </GridContainer>
      </Section>

      <GalleryModal
        images={[sideImage, ...otherImages]}
        {...galleryModalProps}
      />
    </>
  );
};
