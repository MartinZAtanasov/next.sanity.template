import { Box, Button, Typography } from "@mui/material";
import { Post } from "../../../types/post";
import { Section } from "../Section";
import { default as NextImage } from "next/image";
import { formatDimensions } from "../../../helpers/image";
import { LAYOUT } from "../../../theme/constants";
import { SanityBlockContent } from "../../shared/SanityBlockContent";
import Link from "next/link";
import { mediaBreakPoint } from "../../../theme";

export interface PostCategoriesSectionProps {
  __typename: string;
  posts: Post[];
  altBase: string;
}

// * Half of layout max width
const imageMaxWidth = +(+LAYOUT.MAX_WIDTH.replace("px", "") / 3).toFixed();

export const PostCategoriesSection = (props: PostCategoriesSectionProps) => {
  const { posts, altBase } = props;

  return (
    <Section>
      {[...posts, ...posts, ...posts, ...posts].map((post, i, arr) => (
        <Box
          key={post.slug.current}
          sx={{
            borderBottom: (theme) =>
              i === arr.length - 1
                ? "none"
                : `1px solid ${theme.palette.divider}`,
            display: "grid",
            gridTemplateColumns: "1fr 3fr",
            gap: LAYOUT.COL_GAP,
            py: LAYOUT.SPACING_L,
            [mediaBreakPoint]: {
              gridTemplateColumns: "1fr 2fr",
            },
            ["@media (max-width:600px)"]: {
              gridTemplateColumns: "1fr",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              flex: 1,
              ["& > *"]: {
                maxWidth: "100%",
                objectFit: "contain",
                borderRadius: "4px",
                height: "auto",
                boxShadow: (theme) => theme.shadows[4],
              },
            }}
          >
            <NextImage
              {...formatDimensions(post.image, imageMaxWidth)}
              placeholder={post.image.blurDataURL ? "blur" : "empty"}
              blurDataURL={post.image.blurDataURL}
              alt={`${altBase} - ${post.title}`}
            />
          </Box>

          <Box
            flex={3}
            display="flex"
            flexDirection="column"
            alignItems="baseline"
            justifyContent="space-between"
          >
            <Box>
              <Typography variant="h3">{post.title}</Typography>
              <Typography variant="overline">
                {Intl.DateTimeFormat("bg").format(new Date(post._createdAt))}
              </Typography>
            </Box>

            <SanityBlockContent {...{ bodyRaw: post.excerptRaw, altBase }} />

            <Button
              LinkComponent={Link}
              variant="contained"
              href={post.slug.current}
              sx={{ justifySelf: "flex-end" }}
            >
              Read the whole article
            </Button>
          </Box>
        </Box>
      ))}
    </Section>
  );
};
