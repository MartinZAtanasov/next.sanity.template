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
import {
  PostCategoriesSection,
  PostCategoriesSectionProps,
} from "../sections/PostCategoriesSection";
import {
  PersonalityCultHeroSection,
  PersonalityCultHeroSectionProps,
} from "../sections/PersonalityCultHeroSection";
import { Navigation, NavigationProps } from "./Navigation";
import {
  ShortHeroSection,
  ShortHeroSectionProps,
} from "../sections/ShortHeroSection";

const {
  IMAGE_SECTION,
  DOUBLE_COLUMNS_TEXT_SECTION,
  SIDE_IMAGE_SECTION,
  LIST_SECTION,
  POST_CATEGORIES_SECTION,
  PERSONALITY_CULT_HERO_SECTION,
  SHORT_HERO_SECTION,
} = SECTION_TYPE_NAMES;

export interface PageProps {
  seo: SEOType;
  slug: Slug;
  navigation: NavigationProps;
  sections: { __typename: string }[];
}

export const Page: React.FC<PageProps> = (props) => {
  const { sections = [], seo, slug, navigation } = props;

  const url = `${process.env.NEXT_PUBLIC_BASE_URL}${slug.current}`;
  const { altBase } = seo;

  return (
    <>
      <SEO {...{ ...seo, url }} />

      <Navigation {...navigation} />

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

          case POST_CATEGORIES_SECTION:
            return (
              <PostCategoriesSection
                {...{
                  ...(section as PostCategoriesSectionProps),
                  altBase,
                  key,
                }}
              />
            );

          case PERSONALITY_CULT_HERO_SECTION:
            return (
              <PersonalityCultHeroSection
                {...{
                  ...(section as PersonalityCultHeroSectionProps),
                  altBase,
                  key,
                }}
              />
            );

          case SHORT_HERO_SECTION:
            return (
              <ShortHeroSection
                {...{
                  ...(section as ShortHeroSectionProps),
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
