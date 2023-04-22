import { createTheme } from "@mui/material";
import { PALETTE, LAYOUT } from "./constants";

export const mediaBreakPoint = "@media (max-width:850px)";

export const enrichedTheme = createTheme({
  palette: {
    primary: {
      main: PALETTE.PRIMARY,
    },
    secondary: {
      main: PALETTE.SECONDARY,
    },
    text: {
      primary: PALETTE.TEXT_PRIMARY,
    },
  },

  typography: {
    h2: {
      fontFamily: "var(--primary-font-family)",
      color: PALETTE.TEXT_PRIMARY,
      fontSize: "40px",
      marginBottom: LAYOUT.SPACING_L,
      fontWeight: 700,
      [mediaBreakPoint]: {
        fontSize: "35px",
        marginBottom: LAYOUT.SPACING_L_MOBILE,
      },
    },
    body1: {
      fontFamily: "var(--secondary-font-family)",
      fontSize: "18px",
      lineHeight: "26px",
      color: PALETTE.TEXT_PRIMARY,
      [mediaBreakPoint]: {
        fontSize: "16px",
      },
    },
  },

  components: {
    MuiTypography: {
      styleOverrides: {
        gutterBottom: {
          marginBottom: LAYOUT.SPACING_XL,
          [mediaBreakPoint]: {
            marginBottom: LAYOUT.SPACING_XL_MOBILE,
          },
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: "#000000eb", // black 0.92 opacity
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: "var(--primary-font-family)",
        },
      },
      defaultProps: {
        underline: "hover",
      },
    },
  },
});
