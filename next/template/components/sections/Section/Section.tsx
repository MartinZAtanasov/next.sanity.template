import { PropsWithChildren } from "react";
import { Box } from "@mui/material";
import { LAYOUT } from "../../../theme/constants";
import { mediaBreakPoint } from "../../../theme";

const { SPACING_XL, SPACING_S, MAX_WIDTH, SPACING_XL_MOBILE } = LAYOUT;

interface Props extends PropsWithChildren {
  isHero?: boolean;
}

export const Section = ({ children, isHero }: Props) => (
  <Box
    sx={{
      padding: `${isHero ? 0 : SPACING_XL} ${SPACING_S} ${
        isHero ? 0 : SPACING_XL
      } ${SPACING_S}`,
      background: (theme) =>
        isHero ? theme.palette.background.default : "inherit",
      [mediaBreakPoint]: {
        padding: `${isHero ? 0 : SPACING_XL_MOBILE} ${SPACING_S} ${
          isHero ? 0 : SPACING_XL_MOBILE
        } ${SPACING_S}`,
      },
    }}
  >
    <Box maxWidth={MAX_WIDTH} mx="auto">
      {children}
    </Box>
  </Box>
);
