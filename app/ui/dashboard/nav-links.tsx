'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { HomeIcon, UserIcon, CogIcon } from '@heroicons/react/24/outline'; // Import necessary icons

const links = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Profile', href: '/profile', icon: UserIcon },
  { name: 'Settings', href: '/settings', icon: CogIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex items-center gap-2 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600',
              { 'bg-sky-100 text-blue-600': pathname === link.href }
            )}
          >
            <LinkIcon className="w-6" />
            <p>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
