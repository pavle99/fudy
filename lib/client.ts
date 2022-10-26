import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url/";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = sanityClient({
  projectId: "3f6l2wv1",
  dataset: "production",
  apiVersion: "2021-03-25",
  useCdn: true,
  token:
    "skfvjpm1MgbN0g4RA7ePk8cqw4LxNNVrsOZHXrMac2f71lkB8ZoVO5L3m5Y2TCoiWLB8KHF33HrBVd4xiIrl9gJqOT7MuzGqR4l7LNhTfY7FvgeeGcYhssdEPFZoDSOisNDxZ3BXHOjVPK9d4eFuuQ7OL9B9UDWzBqESiP0Ah7hlqWCiRa2B",
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => builder.image(source);
