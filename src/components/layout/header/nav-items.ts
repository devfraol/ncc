export const navItems = [
  {
    type: 'link',
    href: '/',
    label: 'Home',
  },
  {
    type: 'link',
    href: '/courses',
    label: 'Courses',
  },
  {
    type: 'link',
    href: '/blog',
    label: 'Blog',
  },
  {
    type: 'link',
    href: '/about',
    label: 'About',
  },
  {
    type: 'link',
    label: 'Student Dashboard',
    href: '/dashboard',
  },
  {
    type: 'dropdown',
    label: 'Account',
    items: [
      { href: '/sign-in', label: 'Sign In' },
      { href: '/sign-up', label: 'Sign Up' },
      { href: '/reset-password', label: 'Reset Password' },
      { href: '/not-found', label: '404 Error' },
    ],
  },
] satisfies NavItem[];

type NavItem = Record<string, string | unknown> &
  (
    | {
        type: 'link';
        href: string;
      }
    | {
        type: 'dropdown';
      }
  );
