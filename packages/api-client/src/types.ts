export type TODO = unknown;

export type Setttings = TODO;

export type Endpoints = TODO;

export type BillingAddress = TODO;

export type Cart = TODO;

export type CartItem = TODO;

export type Category = TODO;

export type Coupon = TODO;

export type Facet = TODO;

export type FacetSearchCriteria = TODO;

export type Order = TODO;

export type OrderItem = TODO;

export type ProductAsset = {
  source: string;
  [key: string]: string
}

export type ProductOptions = {
  id: string;
  name: string;
  code: string;
  [key: string]: string
}

export type ProductOptionGroups = {
  id: string;
  name: string;
  code: string;
  options: ProductOptions[];
}

export type ProductCollections = {
  id: string;
  name: string;
  [key: string]: string
}

export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  sku: string;
  price: number;
  priceWithTax: number;
  currencyCode: string;
  featuredAsset: ProductAsset;
  assets: ProductAsset[];
  collections: ProductCollections[];
  optionGroups: ProductOptionGroups
};

export type ProductVariant = {
  _id: string;
  _description: string;
  _categoriesRef: string[];
  name: string;
  sku: string;
  slug: string;
  images: string[];
  price: {
    original: number;
    current: number;
  };
  collections?: ProductCollections[];
  optionGroups?: ProductOptionGroups;
  featuredAsset?: ProductAsset;
  assets?: ProductAsset[];
}

export type ProductFilter = {
  master: boolean;
};

export type Review = TODO;

export type ReviewItem = TODO;

export type User = TODO;

export type UserBillingAddress = TODO;

export type UserBillingAddressItem = TODO;

export type UserBillingAddressSearchCriteria = TODO;

export type UserShippingAddress = TODO;

export type UserShippingAddressItem = TODO;

export type UserShippingAddressSearchCriteria = TODO;

export type ShippingAddress = TODO;

export type ShippingMethod = TODO;

export type ShippingProvider = TODO;

export type Wishlist = TODO;

export type WishlistItem = TODO;
