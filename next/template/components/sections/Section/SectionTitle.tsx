import { Box, Typography } from "@mui/material";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  gutterBottom?: boolean;
  center?: boolean;
}

export const SectionTitle = (props: SectionTitleProps) => {
  const { title, gutterBottom, subtitle, center } = props;

  return (
    <Typography
      variant="h2"
      position="relative"
      display="flex"
      flexDirection="column"
      gutterBottom={gutterBottom}
      textAlign={center ? "center" : undefined}
    >
      {title}

      {subtitle && (
        <Typography
          component="span"
          sx={{
            fontSize: "20px",
            marginTop: "10px",
            color: "primary.main",
            fontFamily: "var(--secondary-font-family)",
          }}
        >
          {subtitle}
        </Typography>
      )}

      <Box
        sx={{
          position: "absolute",
          left: center ? "50%" : 0,
          transform: `translateX(${center ? -50 : 0}%)`,
          bottom: "-10px",
          width: "170px",
          height: "4px",
          background: (theme) => theme.palette.primary.main,
        }}
      />
    </Typography>
  );
};
