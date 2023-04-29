import { Section, SectionTitle } from "../Section";
import { SanityBlockContent } from "../..//shared/SanityBlockContent/SanityBlockContent";
import { GalleryModal, useGalleryModal } from "../..//shared/GalleryModal";
import { GridContainer } from "../..//shared/GridContainer";
import { Box, Typography } from "@mui/material";
import { ClickableImage } from "../..//shared/ClickableImage";
import { Image } from "../../../types/image";
import { LAYOUT, PALETTE } from "../../../theme/constants";
import { mediaBreakPoint } from "../../../theme";

export interface PersonalityCultHeroSectionProps {
  title: string;
  caption: string;
  image: Image;
  summaryRaw: any;
  altBase: string;
  __typename: string;
}

// * Half of layout max width
const imageMaxWidth = +(+LAYOUT.MAX_WIDTH.replace("px", "") / 2).toFixed();

export const PersonalityCultHeroSection = (
  props: PersonalityCultHeroSectionProps
) => {
  const { title, caption, image, summaryRaw, altBase } = props;

  const { onImageClick, ...galleryModalProps } = useGalleryModal([image]);

  return (
    <>
      <Section
        sx={{
          padding: `${0} ${LAYOUT.SPACING_S}`,
          background: (theme) => theme.palette.background.default,
          [mediaBreakPoint]: {
            padding: `0 ${LAYOUT.SPACING_S}`,
            paddingTop: LAYOUT.SPACING_XL_MOBILE,
          },
        }}
      >
        <GridContainer
          sx={{
            [mediaBreakPoint]: {
              gridTemplateColumns: "1fr",
              rowGap: 0,
            },
          }}
        >
          <Box>
            <Typography variant="h1" display="flex" flexDirection="column">
              <Typography
                component="span"
                fontSize="20px"
                sx={{ color: PALETTE.TEXT_HEADING }}
              >
                {caption}
              </Typography>
              {title}
            </Typography>

            <SanityBlockContent {...{ bodyRaw: summaryRaw, altBase }} />
          </Box>

          <Box position="relative" overflow="hidden">
            <Box
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                border: (theme) => `1px solid ${theme.palette.primary.main}`,
                borderRadius: "50%",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -25%)",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  width: "90%",
                  height: "90%",
                  background: (theme) => theme.palette.primary.main,
                  borderRadius: "50%",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </Box>

            <ClickableImage
              {...{
                onImageClick,
                image,
                alt: `${altBase} - ${title}`,
                maxWidth: imageMaxWidth,
                priority: true,
              }}
            />
          </Box>
        </GridContainer>
      </Section>

      <GalleryModal images={[image]} {...galleryModalProps} />
    </>
  );
};
