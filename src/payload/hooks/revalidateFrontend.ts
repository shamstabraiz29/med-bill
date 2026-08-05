import type { CollectionAfterChangeHook, GlobalAfterChangeHook } from 'payload'

import { revalidatePathsForGlobal, revalidatePathsForPost } from '@/lib/revalidatePaths'

export const revalidateGlobalHook: GlobalAfterChangeHook = ({ global }) => {
  revalidatePathsForGlobal(global.slug)
}

export const revalidatePostsHook: CollectionAfterChangeHook = ({ doc, collection }) => {
  if (collection.slug !== 'posts') {
    return
  }

  revalidatePathsForPost(typeof doc.slug === 'string' ? doc.slug : null)
}
