import { formatBodyRawImage, mapHref } from "@template/helpers/blockContent";
import { ImageRenderer, ImageRendererProps } from "./ImageRenderer";
import styles from "./SanityBlockContent.module.css";
import { PortableText } from "@portabletext/react";
import { Image } from "@template/types/image";
import { GalleryModal, useGalleryModal } from "../GalleryModal";
import Link from "next/link";
import { Link as LinkMUI } from "@mui/material";

interface SanityBlockContentProps {
  bodyRaw: any;
  altBase: string;
  extraImages?: Image[];
}

export const SanityBlockContent: React.FC<SanityBlockContentProps> = (
  props
) => {
  const { bodyRaw, altBase, extraImages = [] } = props;

  const images = bodyRaw
    .filter((v: any) => v._type === "image")
    .map((v: any) => formatBodyRawImage(v.asset._ref));

  const { onImageClick, ...galleryModalProps } = useGalleryModal([
    ...extraImages,
    ...images,
  ]);

  const myPortableTextComponents = {
    types: {
      image: (props: ImageRendererProps) => (
        <ImageRenderer {...{ ...props, onImageClick, alt: altBase }} />
      ),
    },
    marks: {
      link: ({ children, value: { href } }: any) => {
        const mappedHref = mapHref(href);
        const isInternal = mappedHref[0] === "/";

        return (
          <LinkMUI
            component={Link}
            href={mappedHref}
            target={isInternal ? undefined : "_blank"}
          >
            {children}
          </LinkMUI>
        );
      },
    },
  };

  return (
    <>
      <PortableText
        value={bodyRaw}
        components={myPortableTextComponents as any}
      />

      <GalleryModal
        images={[...extraImages, ...images]}
        {...galleryModalProps}
      />
    </>
  );
};
