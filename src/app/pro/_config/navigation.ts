export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
  badge?: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const mainNavigation: NavItem[] = [
  { title: 'Features', href: '/pro#features' },
  { title: 'Pricing', href: '/pro#pricing' },
  { title: 'Enterprise', href: '/pro#enterprise' },
  { title: 'Contact', href: '/pro#contact' },
];

export const footerNavigation: NavSection[] = [
  {
    title: 'Product',
    items: [
      { title: 'Features', href: '/pro#features' },
      { title: 'Pricing', href: '/pro#pricing' },
      { title: 'Enterprise', href: '/pro#enterprise' },
    ],
  },
  {
    title: 'Company',
    items: [
      { title: 'About', href: '/pro/about' },
      { title: 'Blog', href: '/pro/blog' },
      { title: 'Careers', href: '/pro/careers' },
    ],
  },
  {
    title: 'Legal',
    items: [
      { title: 'Privacy', href: '/pro/privacy' },
      { title: 'Terms', href: '/pro/terms' },
    ],
  },
];
