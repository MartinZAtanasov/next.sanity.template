import { Button } from "@mui/material";
import { Page, PageProps, fetchPageData } from "@template";
import { useRouter } from "next/router";

export const getServerSideProps = async () => {
  const { pageData } = await fetchPageData("/");
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
