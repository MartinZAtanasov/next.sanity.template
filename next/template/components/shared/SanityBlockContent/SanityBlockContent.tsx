import { formatBodyRawImage, mapHref } from "@template/helpers/blockContent";
import { ImageRenderer, ImageRendererProps } from "./ImageRenderer";
import styles from "./SanityBlockContent.module.css";
import { PortableText } from "@portabletext/react";
import { Image } from "@template/types/image";
import { GalleryModal, useGalleryModal } from "../GalleryModal";
import Link from "next/link";

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
          <Link href={mappedHref} target={isInternal ? undefined : "_blank"}>
            {children}
          </Link>
        );
      },
    },
  };

  return (
    <>
      <div className={styles.container}>
        <PortableText
          value={bodyRaw}
          components={myPortableTextComponents as any}
        />
      </div>

      <GalleryModal
        images={[...extraImages, ...images]}
        {...galleryModalProps}
      />
    </>
  );
};
