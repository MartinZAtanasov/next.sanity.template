import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { Page, PageProps, fetchPageData } from "../template";

export const getServerSideProps = async () => {
  const { pageData } = await fetchPageData({ pageSlug: "/" });

  return {
    props: { ...pageData },
  };
};

const About = (props: PageProps) => {
  const { push } = useRouter();
  return (
    <>
      <Button variant="contained" onClick={() => push("/")}>
        To Home page
      </Button>
      <Page {...props} />
    </>
  );
};
export default About;
