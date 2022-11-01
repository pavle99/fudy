import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * pizza
 *
 *
 */
export interface Pizza extends SanityDocument {
  _type: "pizza";

  /**
   * image — `image`
   *
   *
   */
  image: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * name — `string`
   *
   *
   */
  name: string;

  /**
   * slug — `slug`
   *
   *
   */
  slug: { _type: "slug"; current: string };

  /**
   * price — `array`
   *
   *
   */
  price: Array<SanityKeyed<number>>;

  /**
   * details — `string`
   *
   *
   */
  details: string;
}

/**
 * order
 *
 *
 */
export interface Order extends SanityDocument {
  _type: "order";

  /**
   * name — `string`
   *
   *
   */
  name: string;

  /**
   * phone — `string`
   *
   *
   */
  phone: string;

  /**
   * address — `string`
   *
   *
   */
  address: string;

  /**
   * total — `number`
   *
   *
   */
  total: number;

  /**
   * status — `number`
   *
   *
   */
  status: number;
}

export type Documents = Pizza | Order;
