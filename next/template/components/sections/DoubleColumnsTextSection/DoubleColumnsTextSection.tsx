import { Section, SectionTitle } from "../Section";
import { Image } from "../../../types/image";
import { GalleryModal, useGalleryModal } from "../../shared/GalleryModal";
import { SanityBlockContent } from "../../shared/SanityBlockContent";
import { GridContainer } from "../../shared/GridContainer";
import { Box } from "@mui/material";
import { ClickableImage } from "../../shared/ClickableImage";
import { LAYOUT } from "../../../theme/constants";
import { mediaBreakPoint } from "../../../theme";

export interface DoubleColumnsTextSectionProps {
  title: string;
  subtitle: string;
  images: Image[];
  body1Raw: any;
  body2Raw: any;
  altBase: string;
  __typename: string;
}

export const DoubleColumnsTextSection = (
  props: DoubleColumnsTextSectionProps
) => {
  const { title, subtitle, body1Raw, body2Raw, images, altBase } = props;

  const { onImageClick, ...galleryModalProps } = useGalleryModal(images);

  const imageMaxWidth = +(
    +LAYOUT.MAX_WIDTH.replace("px", "") / images.length
  ).toFixed();

  return (
    <>
      <Section>
        <SectionTitle {...{ title, subtitle }} />
        <GridContainer>
          <Box>
            <SanityBlockContent {...{ bodyRaw: body1Raw, altBase }} />
          </Box>
          <Box>
            <SanityBlockContent {...{ bodyRaw: body2Raw, altBase }} />
          </Box>
        </GridContainer>

        <Box
          sx={{
            marginTop: LAYOUT.SPACING_L,
            display: "flex",
            gap: LAYOUT.SPACING_S,
            justifyContent: "center",
            [mediaBreakPoint]: {
              marginTop: LAYOUT.SPACING_L_MOBILE,
              flexWrap: "wrap",
            },
          }}
        >
          {images.map((image, i) => (
            <ClickableImage
              key={image.src}
              {...{
                image,
                onImageClick,
                alt: `${altBase} - ${title} - ${i + 1}`,
                maxWidth: imageMaxWidth,
              }}
            />
          ))}
        </Box>
      </Section>

      <GalleryModal images={images} {...galleryModalProps} />
    </>
  );
};
