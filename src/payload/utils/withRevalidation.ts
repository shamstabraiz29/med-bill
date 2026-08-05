import type { CollectionConfig, GlobalConfig } from 'payload'

import { revalidateGlobalHook, revalidatePostsHook } from '../hooks/revalidateFrontend'

export function withGlobalRevalidation(global: GlobalConfig): GlobalConfig {
  return {
    ...global,
    hooks: {
      ...global.hooks,
      afterChange: [...(global.hooks?.afterChange ?? []), revalidateGlobalHook],
    },
  }
}

export function withCollectionRevalidation(collection: CollectionConfig): CollectionConfig {
  if (collection.slug !== 'posts') {
    return collection
  }

  return {
    ...collection,
    hooks: {
      ...collection.hooks,
      afterChange: [...(collection.hooks?.afterChange ?? []), revalidatePostsHook],
    },
  }
}
