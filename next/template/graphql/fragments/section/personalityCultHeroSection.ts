import { gql } from "@apollo/client";
import { IMAGE_FRAGMENT } from "../util/image";

import { SECTION_TYPE_NAMES } from "../../../types/sections";

export const PERSONALITY_CULT_HERO_SECTION_FRAGMENT_NAME =
  "PersonalityCultHeroSectionFragment";

export const PERSONALITY_CULT_HERO_SECTION_FRAGMENT = gql`
  ${IMAGE_FRAGMENT}
  fragment ${PERSONALITY_CULT_HERO_SECTION_FRAGMENT_NAME} on ${SECTION_TYPE_NAMES.PERSONALITY_CULT_HERO_SECTION} {
    title
    caption
    image {
      ...ImageFragment
    }
    summaryRaw
  }
`;
