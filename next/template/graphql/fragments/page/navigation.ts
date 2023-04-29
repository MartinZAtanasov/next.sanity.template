import { gql } from "@apollo/client";
import { IMAGE_FRAGMENT, IMAGE_FRAGMENT_NAME } from "../util/image";

export const NAVIGATION_FRAGMENT_NAME = "NavigationFragment";

export const NAVIGATION_FRAGMENT = gql`
  ${IMAGE_FRAGMENT}

  fragment ${NAVIGATION_FRAGMENT_NAME} on Navigation {
    image {
        ...${IMAGE_FRAGMENT_NAME}
    }

    contacts {
        label
        value
        image {
            ...${IMAGE_FRAGMENT_NAME}
        }
    }
    
    links {
        label
        page {
            slug {
                current
            }
        }
    }
  }
`;
