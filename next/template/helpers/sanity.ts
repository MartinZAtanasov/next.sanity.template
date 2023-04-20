import { ImageSectionProps } from '../components/sections/ImageSection';
import { LabelImage } from '../types/labelImage';
import { SECTION_TYPE_NAMES } from '../types/sections';
import { formatSanityImage } from './image';

const {
  BACKGROUND_IMAGE_SECTION,
  DOUBLE_COLUMNS_TEXT_SECTION,
  ICONS_SECTION,
  IMAGE_SECTION,
  SIDE_IMAGE_SECTION,
  TEXT_SECTION,
} = SECTION_TYPE_NAMES;

const formatImageSectionData = (imageSection: any): ImageSectionProps => {
  const imageSectionCopy = { ...imageSection };
  imageSectionCopy.image = formatSanityImage(imageSectionCopy.image);
  return imageSectionCopy;
};

// export const formatDoubleColumnsTextSectionData = (
//   doubleColumnsTextSection: any
// ): DoubleColumnsTextSectionProps => ({
//   ...doubleColumnsTextSection,
//   images: doubleColumnsTextSection.images.map(formatSanityImage),
// });

// const formatIconsSectionData = (iconsSection: any): IconsSectionProps => {
//   const iconsSectionCopy = { ...iconsSection };
//   iconsSectionCopy.icons = iconsSectionCopy.iconsTitles.map(
//     ({ label, image }: LabelImage) => ({
//       title: label,
//       image: formatSanityImage(image),
//     })
//   );
//   delete iconsSectionCopy.iconsTitles;

//   return iconsSectionCopy;
// };

// const formatSideImageSectionData = (
//   sideImageSection: any
// ): SideImageSectionProps => {
//   const sideImageSectionCopy = { ...sideImageSection };
//   sideImageSectionCopy.sideImage = formatSanityImage(
//     sideImageSectionCopy.sideImage
//   );
//   sideImageSectionCopy.otherImages =
//     sideImageSectionCopy.otherImages.map(formatSanityImage);

//   return sideImageSectionCopy;
// };

// const formatBackgroundImageSectionData = (
//   backgroundImageSection: any
// ): BackgroundImageSectionProps => {
//   const backgroundImageSectionCopy = { ...backgroundImageSection };
//   backgroundImageSectionCopy.image = formatSanityImage(
//     backgroundImageSectionCopy.image
//   );
//   backgroundImageSectionCopy.icon =
//     backgroundImageSectionCopy.icon &&
//     formatSanityImage(backgroundImageSectionCopy.icon);

//   return backgroundImageSectionCopy;
// };

export const formatSectionsData = (sections: any[]) =>
  sections?.map((section: any) => {
    switch (section.__typename) {
      case IMAGE_SECTION:
        return formatImageSectionData(section);

      //   case DOUBLE_COLUMNS_TEXT_SECTION:
      //     return formatDoubleColumnsTextSectionData(section);

      //   case ICONS_SECTION:
      //     return formatIconsSectionData(section);

      //   case SIDE_IMAGE_SECTION:
      //     return formatSideImageSectionData(section);

      //   case BACKGROUND_IMAGE_SECTION:
      //     return formatBackgroundImageSectionData(section);

      case TEXT_SECTION:
        return section;

      default:
        return {};
    }
  });
