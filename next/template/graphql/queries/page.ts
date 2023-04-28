import { gql } from "@apollo/client";
import { PAGE_FRAGMENT } from "../fragments/page/page";
import { IMAGE_FRAGMENT } from "../fragments/util/image";

export const PAGE_QUERY = gql`
  ${PAGE_FRAGMENT}
  query Page($pageSlug: String!) {
    allPage(where: { slug: { current: { eq: $pageSlug } } }) {
      ...PageFragment
    }
  }
`;

export const POST_CATEGORY_PAGE_QUERY = gql`
  ${PAGE_FRAGMENT}
  ${IMAGE_FRAGMENT}
  query Page($pageSlug: String!) {
    allPage(where: { slug: { current: { eq: $pageSlug } } }) {
      ...PageFragment
    }

    allPost {
      title
      _createdAt
      slug {
        current
      }
      excerptRaw
      image {
        ...ImageFragment
      }
    }
  }
`;
