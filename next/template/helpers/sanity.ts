import { NavigationProps } from "../components/page/Navigation";
import { DoubleColumnsTextSectionProps } from "../components/sections/DoubleColumnsTextSection";
import { ImageSectionProps } from "../components/sections/ImageSection";
import { PersonalityCultHeroSectionProps } from "../components/sections/PersonalityCultHeroSection";
import { PostCategoriesSectionProps } from "../components/sections/PostCategoriesSection";
import { SideImageSectionProps } from "../components/sections/SideImageSection";
import { SECTION_TYPE_NAMES } from "../types/sections";
import { formatSanityImage } from "./image";

const {
  DOUBLE_COLUMNS_TEXT_SECTION,
  IMAGE_SECTION,
  SIDE_IMAGE_SECTION,
  TEXT_SECTION,
  LIST_SECTION,
  POST_CATEGORIES_SECTION,
  PERSONALITY_CULT_HERO_SECTION,
} = SECTION_TYPE_NAMES;

const formatImageSectionData = (imageSection: any): ImageSectionProps => ({
  ...imageSection,
  image: formatSanityImage(imageSection.image),
});

const formatPostCategoriesSection = (
  postCategoriesSection: any
): PostCategoriesSectionProps => ({
  ...postCategoriesSection,
  posts: postCategoriesSection.posts.map((v: any) => ({
    ...v,
    image: formatSanityImage(v.image),
  })),
});

const formatDoubleColumnsTextSectionData = (
  doubleColumnsTextSection: any
): DoubleColumnsTextSectionProps => ({
  ...doubleColumnsTextSection,
  images: doubleColumnsTextSection.images.map(formatSanityImage),
});

const formatSideImageSectionData = (
  sideImageSection: any
): SideImageSectionProps => ({
  ...sideImageSection,
  sideImage: formatSanityImage(sideImageSection.sideImage),
  otherImages: sideImageSection.otherImages.map(formatSanityImage),
});

const formatPersonalityCultHeroSection = (
  personalityCultHeroSection: any
): PersonalityCultHeroSectionProps => ({
  ...personalityCultHeroSection,
  image: formatSanityImage(personalityCultHeroSection.image),
});

export const formatSectionsData = (sections: any[]) =>
  sections?.map((section: any) => {
    switch (section.__typename) {
      case IMAGE_SECTION:
        return formatImageSectionData(section);

      case DOUBLE_COLUMNS_TEXT_SECTION:
        return formatDoubleColumnsTextSectionData(section);

      case SIDE_IMAGE_SECTION:
        return formatSideImageSectionData(section);

      case POST_CATEGORIES_SECTION:
        return formatPostCategoriesSection(section);

      case PERSONALITY_CULT_HERO_SECTION:
        return formatPersonalityCultHeroSection(section);

      case TEXT_SECTION:
        return section;

      case LIST_SECTION:
        return section;

      default:
        return {};
    }
  });

export const buildPostCategoriesSection = (posts: any[]) => ({
  __typename: POST_CATEGORIES_SECTION,
  posts,
});

export const formatNavigationData = (navigation: any): NavigationProps => ({
  ...navigation,
  image: formatSanityImage(navigation.image),
  contacts: navigation.contacts.map((v: any) => ({
    ...v,
    image: formatSanityImage(v.image),
  })),
  links: navigation.links.map((v: any) => ({
    ...v,
    slug: v.page.slug,
  })),
});
