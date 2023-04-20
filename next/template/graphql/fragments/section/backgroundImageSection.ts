import { gql } from '@apollo/client';
import { IMAGE_FRAGMENT } from '../util/image';

export const BACKGROUND_IMAGE_SECTION_FRAGMENT = gql`
  ${IMAGE_FRAGMENT}
  fragment BackgroundImageSectionFragment on BackgroundImageSection {
    title
    subtitle
    image {
      ...ImageFragment
    }
    icon {
      ...ImageFragment
    }
    bodyRaw
  }
`;
