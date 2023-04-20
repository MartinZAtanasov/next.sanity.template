import { Image } from "../types/image";

const NEXT_PUBLIC_SANITY_PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const NEXT_PUBLIC_SANITY_DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET;
const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const formatBodyRawImage = (bodyRawImageRef: string) => {
  const dataset = NEXT_PUBLIC_SANITY_DATASET;
  const projectId = NEXT_PUBLIC_SANITY_PROJECT_ID;

  // Build image src
  const noPrefixRef = bodyRawImageRef.replace("image-", "");
  const noPrefixRefArr = noPrefixRef.split("");
  noPrefixRefArr[noPrefixRefArr.lastIndexOf("-")] = ".";
  const ref = noPrefixRefArr.join("");

  // Build width & height
  const refSplitByDash = bodyRawImageRef.split("-");
  const [width, height] = refSplitByDash[refSplitByDash.length - 2]
    .split("x")
    .map(Number);

  const src = `https://cdn.sanity.io/images/${projectId}/${dataset}/${ref}`;

  return { width, height, src } as Image;
};

export const mapHref = (href: string) => {
  if (!NEXT_PUBLIC_BASE_URL) return href;

  if (!href.includes(NEXT_PUBLIC_BASE_URL)) {
    return href;
  }

  return href.replace(NEXT_PUBLIC_BASE_URL, "/");
};
