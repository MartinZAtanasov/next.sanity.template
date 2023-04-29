import { Box, Link, Typography } from "@mui/material";
import { LabelValueImage } from "../../types/LabelValueImage";
import { PageLink } from "../../types/PageLink";
import { Image } from "../../types/image";
import NextLink from "next/link";
import NextImage from "next/image";
import { Section } from "../sections/Section";
import { mediaBreakPoint } from "../../theme";
import { LAYOUT } from "../../theme/constants";
import { formatDimensions } from "../../helpers/image";
import { useRouter } from "next/router";
import { Fragment } from "react";

export interface NavigationProps {
  image: Image;
  links: PageLink[];
  contacts: LabelValueImage[];
}

export const Navigation = (props: NavigationProps) => {
  const { image, contacts, links } = props;

  const { route } = useRouter();

  return (
    <Section
      sx={{
        position: "relative",
        padding: LAYOUT.SPACING_S,
        background: (theme) => theme.palette.background.default,
        [mediaBreakPoint]: {
          padding: LAYOUT.SPACING_S,
        },
        ["&:before"]: {
          content: '""',
          position: "absolute",
          width: "100%",
          height: "1px",
          background: "black",
          bottom: LAYOUT.SPACING_S,
          left: 0,
          opacity: 0.07,
        },
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        flexWrap="wrap"
        justifyContent="space-between"
        gap="10px"
      >
        <Box display="flex" alignItems="center" flex={1}>
          <NextLink href="/">
            <NextImage {...formatDimensions(image, 50)} alt="logo" priority />
          </NextLink>

          <Box display="flex" gap="10px" ml="20px">
            {links.map(({ label, slug }) => (
              <Link
                href={slug.current}
                component={NextLink}
                key={slug.current}
                color="text.primary"
                fontWeight="bold"
                sx={{
                  textDecoration: route === slug.current ? "underline" : "none",
                }}
              >
                {label.toUpperCase()}
              </Link>
            ))}
          </Box>
        </Box>

        <Box display="flex" gap="6px" alignItems="center">
          {contacts.map(({ image, label, value }) => (
            <Fragment key={value}>
              {label[0] === "+" ? (
                <Link
                  href={value}
                  target="blank"
                  component={NextLink}
                  color="text.primary"
                  fontWeight="bold"
                >
                  {label.toUpperCase()}
                </Link>
              ) : (
                <NextLink href={value} key={label} target="_blank">
                  {label[0] === "+" ? (
                    <Typography component="span">{label}</Typography>
                  ) : (
                    <NextImage
                      {...formatDimensions(image, 30)}
                      alt="contact"
                      priority
                    />
                  )}
                </NextLink>
              )}
            </Fragment>
          ))}
        </Box>
      </Box>
    </Section>
  );
};
