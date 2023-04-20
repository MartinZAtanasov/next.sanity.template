import { gql } from "@apollo/client";
import { PAGE_FRAGMENT } from "../fragments/page/page";

export const PAGE_QUERY = gql`
  ${PAGE_FRAGMENT}
  query Page($pageSlug: String!) {
    allPage(where: { slug: { current: { eq: $pageSlug } } }) {
      ...PageFragment
    }
  }
`;
