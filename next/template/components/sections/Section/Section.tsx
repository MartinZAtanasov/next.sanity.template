import { PropsWithChildren } from "react";
import { Box } from "@mui/material";
import { LAYOUT } from "../../../theme/constants";
import { mediaBreakPoint } from "../../../theme";

const { SPACING_XL, SPACING_S, MAX_WIDTH, SPACING_XL_MOBILE } = LAYOUT;

export const Section = ({ children }: PropsWithChildren) => (
  <Box
    sx={{
      padding: `${SPACING_XL} ${SPACING_S}`,
      [mediaBreakPoint]: {
        padding: `${SPACING_XL_MOBILE} ${SPACING_S}`,
      },
    }}
  >
    <Box maxWidth={MAX_WIDTH} mx="auto">
      {children}
    </Box>
  </Box>
);
