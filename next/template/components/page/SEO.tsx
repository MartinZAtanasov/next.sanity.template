import Head from "next/head";
import { SEO as SEOType } from "../../types/seo";

interface SEOProps extends SEOType {
  url: string;
}

const SITE_NAME = "Myoganche";

export const SEO = (props: SEOProps) => {
  const { title, description, url, image } = props;

  const imageURL =
    image?.asset?.url || `${process.env.NEXT_PUBLIC_BASE_URL}logo-main.png`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" key="twcard" />
      <meta name="twitter:creator" content={SITE_NAME} key="twhandle" />

      {/* Open Graph */}
      <meta property="og:url" content={url} key="ogurl" />
      <meta property="og:image" content={imageURL} key="ogimage" />
      <meta property="og:site_name" content={SITE_NAME} key="ogsitename" />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
    </Head>
  );
};
