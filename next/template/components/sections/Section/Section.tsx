import { PropsWithChildren } from "react";
import { Box, SxProps, Theme } from "@mui/material";
import { LAYOUT } from "../../../theme/constants";
import { mediaBreakPoint } from "../../../theme";

const { SPACING_XL, SPACING_S, MAX_WIDTH, SPACING_XL_MOBILE } = LAYOUT;

interface Props extends PropsWithChildren {
  sx?: SxProps<Theme>;
}

export const Section = ({ children, sx }: Props) => (
  <Box
    sx={{
      padding: `${SPACING_XL} ${SPACING_S}`,
      [mediaBreakPoint]: {
        padding: `${SPACING_XL_MOBILE} ${SPACING_S}`,
      },
      ...sx,
    }}
  >
    <Box maxWidth={MAX_WIDTH} mx="auto">
      {children}
    </Box>
  </Box>
);
