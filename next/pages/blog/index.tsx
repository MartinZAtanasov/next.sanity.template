import { Page, PageProps, fetchPostCategoryPageData } from "../../template";

export const getServerSideProps = async () => {
  const { pageData, ...rest } = await fetchPostCategoryPageData({
    pageSlug: "/blog",
  });

  return {
    props: { ...pageData, rest },
  };
};

const Blog = (props: PageProps) => <Page {...props} />;

export default Blog;
