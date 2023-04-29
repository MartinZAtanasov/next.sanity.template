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
      secondary: PALETTE.TEXT_PRIMARY,
    },
    background: {
      default: PALETTE.BACKGROUND,
    },
  },
  typography: {
    h2: {
      fontFamily: "var(--primary-font-family)",
      color: PALETTE.TEXT_HEADING,
      fontSize: "35px",
      marginBottom: LAYOUT.SPACING_L,
      fontWeight: 600,
    },
    h3: {
      fontFamily: "var(--primary-font-family)",
      color: PALETTE.TEXT_HEADING,
      fontSize: "28px",
      fontWeight: "bold",
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
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: PALETTE.MAIN_BACKGROUND,
        },
      },
    },
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
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontFamily: "var(--primary-font-family)",
          fontSize: "20px",
          [mediaBreakPoint]: {
            fontSize: "18px",
          },
        },
      },
    },
  },
});
