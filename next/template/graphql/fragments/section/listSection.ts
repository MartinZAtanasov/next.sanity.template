import { gql } from "@apollo/client";
import { SECTION_TYPE_NAMES } from "../../../types/sections";

export const LIST_SECTION_FRAGMENT_NAME = "ListSectionFragment";

export const LIST_SECTION_FRAGMENT = gql`
  fragment ${LIST_SECTION_FRAGMENT_NAME} on ${SECTION_TYPE_NAMES.LIST_SECTION} {
    title
    subtitle
    bodyRaw
    list
  }
`;
