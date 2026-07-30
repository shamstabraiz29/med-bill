export interface PageSeo {
  metaTitle?: string
  metaDescription?: string
  keywords?: string
  canonicalUrl?: string
  robots?: string
  openGraph?: {
    ogTitle?: string
    ogDescription?: string
    ogType?: string
    ogUrl?: string
  }
}
