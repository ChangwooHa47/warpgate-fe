export const siteConfig = {
  name: 'Warpgate',
  description: 'Enterprise-grade power and performance for teams that demand the best',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://warpgate.io',
  ogImage: '/og-image.png',
  links: {
    twitter: 'https://twitter.com/warpgate',
    github: 'https://github.com/warpgate',
  },
} as const;

export type SiteConfig = typeof siteConfig;
