import { gql } from '@apollo/client';
import { BACKGROUND_IMAGE_SECTION_FRAGMENT } from './backgroundImageSection';
import { DOUBLE_COLUMNS_TEXT_SECTION_FRAGMENT } from './doubleColumnsTextSection';
import { ICONS_SECTION_FRAGMENT } from './iconsSection';
import { IMAGE_SECTION_FRAGMENT } from './imageSection';
import { SIDE_IMAGE_SECTION_FRAGMENT } from './sideImageSection';
import { TEXT_SECTION_FRAGMENT } from './textSection';

export const SECTIONS_FRAGMENT = gql`
  ${IMAGE_SECTION_FRAGMENT}
  ${DOUBLE_COLUMNS_TEXT_SECTION_FRAGMENT}
  ${ICONS_SECTION_FRAGMENT}
  ${SIDE_IMAGE_SECTION_FRAGMENT}
  ${BACKGROUND_IMAGE_SECTION_FRAGMENT}
  ${TEXT_SECTION_FRAGMENT}
  fragment SectionsFragment on Sections {
    sections {
      ... on ImageSection {
        ...ImageSectionFragment
      }
      ... on DoubleColumnsTextSection {
        ...DoubleColumnsTextSectionFragment
      }
      ... on IconsSection {
        ...IconsSectionFragment
      }
      ... on SideImageSection {
        ...SideImageSectionFragment
      }
      ... on BackgroundImageSection {
        ...BackgroundImageSectionFragment
      }
      ... on TextSection {
        ...TextSectionFragment
      }
    }
  }
`;
