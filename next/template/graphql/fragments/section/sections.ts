import { gql } from "@apollo/client";
import { BACKGROUND_IMAGE_SECTION_FRAGMENT } from "./backgroundImageSection";
import {
  DOUBLE_COLUMNS_TEXT_SECTION_FRAGMENT,
  DOUBLE_COLUMNS_TEXT_SECTION_FRAGMENT_NAME,
} from "./doubleColumnsTextSection";
import { ICONS_SECTION_FRAGMENT } from "./iconsSection";
import {
  IMAGE_SECTION_FRAGMENT,
  IMAGE_SECTION_FRAGMENT_NAME,
} from "./imageSection";
import {
  SIDE_IMAGE_SECTION_FRAGMENT,
  SIDE_IMAGE_SECTION_FRAGMENT_NAME,
} from "./sideImageSection";
import { TEXT_SECTION_FRAGMENT } from "./textSection";
import { SECTION_TYPE_NAMES } from "../../../types/sections";
import {
  LIST_SECTION_FRAGMENT,
  LIST_SECTION_FRAGMENT_NAME,
} from "./listSection";
import {
  PERSONALITY_CULT_HERO_SECTION_FRAGMENT_NAME,
  PERSONALITY_CULT_HERO_SECTION_FRAGMENT,
} from "./personalityCultHeroSection";

export const SECTIONS_FRAGMENT = gql`
  ${IMAGE_SECTION_FRAGMENT}
  ${DOUBLE_COLUMNS_TEXT_SECTION_FRAGMENT}
  ${ICONS_SECTION_FRAGMENT}
  ${SIDE_IMAGE_SECTION_FRAGMENT}
  ${BACKGROUND_IMAGE_SECTION_FRAGMENT}
  ${TEXT_SECTION_FRAGMENT}
  ${LIST_SECTION_FRAGMENT}
  ${PERSONALITY_CULT_HERO_SECTION_FRAGMENT}
  fragment SectionsFragment on Sections {
    sections {
      ... on ${SECTION_TYPE_NAMES.IMAGE_SECTION} {
        ...${IMAGE_SECTION_FRAGMENT_NAME}
      }
      ... on ${SECTION_TYPE_NAMES.DOUBLE_COLUMNS_TEXT_SECTION} {
        ...${DOUBLE_COLUMNS_TEXT_SECTION_FRAGMENT_NAME}
      }
      ... on IconsSection {
        ...IconsSectionFragment
      }
      ... on ${SECTION_TYPE_NAMES.SIDE_IMAGE_SECTION} {
        ...${SIDE_IMAGE_SECTION_FRAGMENT_NAME}
      }
      ... on BackgroundImageSection {
        ...BackgroundImageSectionFragment
      }
      ... on TextSection {
        ...TextSectionFragment
      }
      ... on ${SECTION_TYPE_NAMES.LIST_SECTION} {
        ...${LIST_SECTION_FRAGMENT_NAME}
      }
      ... on ${SECTION_TYPE_NAMES.PERSONALITY_CULT_HERO_SECTION} {
        ...${PERSONALITY_CULT_HERO_SECTION_FRAGMENT_NAME}
      }
    }
  }
`;
