import { SEO as SEOType } from "../../types/seo";
import { SECTION_TYPE_NAMES } from "../../types/sections";
import { ImageSection, ImageSectionProps } from "../sections/ImageSection";
import { SEO } from "./SEO";
import { Slug } from "../../types/slug";
import {
  SideImageSection,
  SideImageSectionProps,
} from "../sections/SideImageSection";
import {
  DoubleColumnsTextSection,
  DoubleColumnsTextSectionProps,
} from "../sections/DoubleColumnsTextSection";
import { ListSection, ListSectionProps } from "../sections/ListSection";

const {
  IMAGE_SECTION,
  DOUBLE_COLUMNS_TEXT_SECTION,
  ICONS_SECTION,
  SIDE_IMAGE_SECTION,
  BACKGROUND_IMAGE_SECTION,
  TEXT_SECTION,
  LIST_SECTION,
} = SECTION_TYPE_NAMES;

export interface PageProps {
  seo: SEOType;
  slug: Slug;
  sections: { __typename: string }[];
}

// TODO: Dynamic image on page link share
export const Page: React.FC<PageProps> = (props) => {
  const { sections = [], seo, slug } = props;

  const url = `${process.env.NEXT_PUBLIC_BASE_URL}${slug.current}`;
  const { altBase } = seo;

  return (
    <>
      <SEO {...{ ...seo, url }} />

      {sections.map((section, key: number) => {
        switch (section.__typename) {
          case IMAGE_SECTION:
            return (
              <ImageSection
                {...{ ...(section as ImageSectionProps), key, altBase }}
              />
            );

          case SIDE_IMAGE_SECTION:
            return (
              <SideImageSection
                {...{ ...(section as SideImageSectionProps), key, altBase }}
              />
            );

          case DOUBLE_COLUMNS_TEXT_SECTION:
            return (
              <DoubleColumnsTextSection
                {...{
                  ...(section as DoubleColumnsTextSectionProps),
                  key,
                  altBase,
                }}
              />
            );

          case LIST_SECTION:
            return (
              <ListSection
                {...{
                  ...(section as ListSectionProps),
                  key,
                }}
              />
            );

          default:
            return null;
        }
      })}
    </>
  );
};
