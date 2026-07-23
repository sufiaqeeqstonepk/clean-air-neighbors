/**
 * Canonical URL utilities for SEO
 */

export const DOMAIN = "https://greensboromoldremovalcompany.com";

/**
 * Generate an absolute canonical URL
 * @param path - The relative path (e.g., "/", "/locations/eastover-nc")
 * @returns The full canonical URL with domain
 */
export function getCanonicalUrl(path: string): string {
  // Ensure path starts with /
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${DOMAIN}${normalizedPath}`;
}
