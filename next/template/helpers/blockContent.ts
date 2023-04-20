import { Image } from '../types/image';

// TODO: Get the variables from the library consumer
const NEXT_PUBLIC_SANITY_PROJECT_ID = '7ug4e9nf';
const NEXT_PUBLIC_SANITY_DATASET = 'production';

export const formatBodyRawImage = (bodyRawImageRef: string) => {
  const dataset = NEXT_PUBLIC_SANITY_DATASET;
  const projectId = NEXT_PUBLIC_SANITY_PROJECT_ID;

  // Build image src
  const noPrefixRef = bodyRawImageRef.replace('image-', '');
  const noPrefixRefArr = noPrefixRef.split('');
  noPrefixRefArr[noPrefixRefArr.lastIndexOf('-')] = '.';
  const ref = noPrefixRefArr.join('');

  // Build width & height
  const refSplitByDash = bodyRawImageRef.split('-');
  const [width, height] = refSplitByDash[refSplitByDash.length - 2]
    .split('x')
    .map(Number);

  const src = `https://cdn.sanity.io/images/${projectId}/${dataset}/${ref}`;

  return { width, height, src } as Image;
};
