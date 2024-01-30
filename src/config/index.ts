export const PRODUCT_CATEGORIES = [
  {
    label: 'Notes',
    value: 'notes' as const,
    featured: [
      {
        name: 'Editor picks',
        href: `/products?category=notes`,
        imageSrc: '/nav/ui-kits/mixed.jpg',
      },
      {
        name: 'New Arrivals',
        href: '/products?category=notes&sort=desc',
        imageSrc: '/nav/ui-kits/blue.jpg',
      },
      {
        name: 'Bestsellers',
        href: '/products?category=notes',
        imageSrc: '/nav/ui-kits/purple.jpg',
      },
    ],
  },
  {
    label: 'Projects',
    value: 'projects' as const,
    featured: [
      {
        name: 'Favorite Project Picks',
        href: `/products?category=projects`,
        imageSrc: '/nav/icons/picks.jpg',
      },
      {
        name: 'New Arrivals',
        href: '/products?category=projects&sort=desc',
        imageSrc: '/nav/icons/new.jpg',
      },
      {
        name: 'Bestselling Projects',
        href: '/products?category=projects',
        imageSrc: '/nav/icons/bestsellers.jpg',
      },
    ],
  },
]
