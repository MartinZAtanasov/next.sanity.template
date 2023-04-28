import { Page, PageProps, fetchPageData } from "../../template";

export const getServerSideProps = async () => {
  const { pageData, ...rest } = await fetchPageData({
    pageSlug: "/blog",
    isPostCategory: true,
  });

  return {
    props: { ...pageData, rest },
  };
};

const Blog = (props: PageProps) => <Page {...props} />;

export default Blog;
