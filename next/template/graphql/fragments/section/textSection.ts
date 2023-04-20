import { gql } from '@apollo/client';

export const TEXT_SECTION_FRAGMENT = gql`
  fragment TextSectionFragment on TextSection {
    title
    subtitle
    bodyRaw
  }
`;
