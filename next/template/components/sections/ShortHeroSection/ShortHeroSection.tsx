import { Typography } from "@mui/material";
import { Section } from "../Section";
import { SanityBlockContent } from "../../shared/SanityBlockContent";

export interface ShortHeroSectionProps {
  title: string;
  summaryRaw: any;
  __typename: string;
}

export const ShortHeroSection = (props: ShortHeroSectionProps) => {
  const { title, summaryRaw } = props;

  return (
    <Section
      sx={{
        background: (theme) => theme.palette.background.default,
        textAlign: "center",
      }}
    >
      <Typography variant="h1">{title}</Typography>
      <SanityBlockContent {...{ bodyRaw: summaryRaw, altBase: "" }} />
    </Section>
  );
};
