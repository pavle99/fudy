import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url/";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = sanityClient({
  projectId: "3f6l2wv1",
  dataset: "production",
  apiVersion: "2021-03-25",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => builder.image(source);
