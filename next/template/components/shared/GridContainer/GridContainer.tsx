import { Box } from "@mui/material";
import { mediaBreakPoint } from "@template/theme";
import { LAYOUT } from "@template/theme/constants";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  reverse?: boolean;
}

export const GridContainer = ({ children, reverse }: Props) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        columnGap: LAYOUT.COL_GAP,
        rowGap: LAYOUT.ROW_GAP,
        alignItems: "center",
        "& > *:first-of-type": {
          order: reverse ? 2 : 0,
        },
        [mediaBreakPoint]: {
          gridTemplateColumns: "1fr",
          "& > *:first-of-type": {
            order: 0,
          },
        },
      }}
    >
      {children}
    </Box>
  );
};
