import { apolloClient } from "../apolloClient";
import { PAGE_QUERY } from "../graphql/queries/page";
import { formatSectionsData } from "../helpers/sanity";

export const fetchPageData = async (pageSlug: string) => {
  const res = await apolloClient?.query({
    query: PAGE_QUERY,
    variables: { pageSlug },
  });

  const pageDataResponse = res?.data?.allPage?.[0];

  const pageData = {
    ...pageDataResponse,
    sections: formatSectionsData(pageDataResponse?.sections?.sections || []),
  };

  return { pageData, unformattedData: { ...res?.data } };
};
