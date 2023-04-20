// import { useGalleryModal } from 'components/hooks/useGalleryModal';
// import { Image } from 'types/image';
// import { GalleryModal } from '../GalleryModal';
import { ImageRenderer, ImageRendererProps } from "./ImageRenderer";
// import styles from './SanityBlockContent.module.css';
import { PortableText } from "@portabletext/react";
// import { Link } from '../Link';
import { formatBodyRawImage } from "../../../helpers/blockContent";
import Link from "next/link";
import { Image } from "../../../types/image";

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

  // const { onImageClick, ...galleryModalProps } = useGalleryModal([
  //   ...extraImages,
  //   ...images,
  // ]);

  const myPortableTextComponents = {
    types: {
      image: (props: ImageRendererProps) => (
        // <ImageRenderer {...{ ...props, onImageClick, alt: altBase }} />
        <ImageRenderer {...{ ...props, alt: altBase }} />
      ),
    },
    marks: {
      link: ({ children, value: { href } }: any) => (
        <Link href={href}>{children}</Link>
      ),
    },
  };

  return (
    <>
      <div>
        <PortableText
          value={bodyRaw}
          components={myPortableTextComponents as any}
        />
      </div>

      {/* <GalleryModal
        images={[...extraImages, ...images]}
        {...galleryModalProps}
      /> */}
    </>
  );
};
