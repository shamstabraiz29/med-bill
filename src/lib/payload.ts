import { getPayload } from 'payload'
import config from '@payload-config'
import type { HomepageData } from '@/payload/types/homepage'
import { defaultHomepageData } from '@/lib/defaults/homepage'

/**
 * Fetches the Homepage global data from Payload CMS using the Local API.
 * Uses the Payload Local API (no HTTP overhead) for maximum performance.
 * Falls back to default hardcoded content on any error.
 */
export async function getHomepageData(): Promise<HomepageData> {
  try {
    const payload = await getPayload({ config })

    const data = await payload.findGlobal({
      slug: 'homepage',
    })

    // Merge with defaults: CMS data takes priority, defaults fill gaps
    return deepMerge(defaultHomepageData, data as unknown as Partial<HomepageData>)
  } catch (error) {
    console.error('[Payload] Failed to fetch homepage data, using defaults:', error)
    return defaultHomepageData
  }
}

/**
 * Deep-merges a source into a target object. Source values override target
 * values, but only when defined (non-null, non-undefined). Arrays from source
 * replace target arrays entirely (CMS arrays should be treated as complete).
 */
function deepMerge<T>(
  target: T,
  source: Partial<T>,
): T {
  const output = { ...target } as any
  const src = source as any

  for (const key in src) {
    const sourceVal = src[key]
    const targetVal = output[key]

    if (sourceVal === null || sourceVal === undefined) {
      continue
    }

    if (Array.isArray(sourceVal)) {
      // Arrays from CMS replace defaults entirely (if non-empty)
      if (sourceVal.length > 0) {
        output[key] = sourceVal
      }
    } else if (
      typeof sourceVal === 'object' &&
      !Array.isArray(sourceVal) &&
      typeof targetVal === 'object' &&
      !Array.isArray(targetVal) &&
      targetVal !== null
    ) {
      // Recursively merge nested objects
      output[key] = deepMerge(targetVal, sourceVal)
    } else {
      output[key] = sourceVal
    }
  }

  return output as T
}
