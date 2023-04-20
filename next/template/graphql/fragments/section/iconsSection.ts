import { gql } from "@apollo/client";
import { IMAGE_FRAGMENT } from "../util/image";

export const ICONS_SECTION_FRAGMENT = gql`
  ${IMAGE_FRAGMENT}
  fragment IconsSectionFragment on IconsSection {
    title
    subtitle
    bodyRaw
    iconsTitles {
      label
      image {
        ...ImageFragment
      }
    }
  }
`;
