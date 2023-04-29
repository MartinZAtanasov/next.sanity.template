import { gql } from "@apollo/client";

import { SECTION_TYPE_NAMES } from "../../../types/sections";

export const SHORT_HERO_SECTION_FRAGMENT_NAME = "ShortHeroSectionFragment";

export const SHORT_HERO_SECTION_FRAGMENT = gql`
  fragment ${SHORT_HERO_SECTION_FRAGMENT_NAME} on ${SECTION_TYPE_NAMES.SHORT_HERO_SECTION} {
    title
    summaryRaw
  }
`;
