import { Box } from "@mui/material";

import { PropsWithChildren } from "react";
import { LAYOUT } from "../../../theme/constants";
import { mediaBreakPoint } from "../../../theme";

interface Props extends PropsWithChildren {
  reverse?: boolean;
  gridTemplateColumns?: string;
}

export const GridContainer = (props: Props) => {
  const { children, reverse, gridTemplateColumns } = props;

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: gridTemplateColumns || "1fr 1fr",
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
