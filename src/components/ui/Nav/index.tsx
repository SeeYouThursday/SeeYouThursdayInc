'use client';
import Image from 'next/image';
import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Dropdown,
  DropdownItem,
  DropdownTrigger,
  DropdownMenu,
} from '@nextui-org/react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { ContactModal } from '@/components/ContactForm';
import { IconChevronDown, IconHome } from '@tabler/icons-react';

interface navItem {
  href: string;
  name: string;
  isActive: boolean;
}

interface dropDown extends navItem {
  icon: string;
  key: string;
}

const Nav = () => {
  // used to track active tab/link in nav
  const [isActive, setIsActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();
  console.log(pathname);

  const navItems: navItem[] = [
    { href: '/pricing', name: 'Pricing', isActive: false },
  ];

  const dropdown = [
    {
      href: '#services',
      name: 'Services',
      icon: '',
      key: 'Services',
      isActive: false,
    },
    {
      href: '#ourCrew',
      name: 'Meet The Team',
      icon: '',
      key: 'Team',
      isActive: false,
    },
    {
      href: '#ContactUs',
      name: 'Contact Us',
      icon: '',
      key: 'Contact',
      isActive: false,
    },
  ];

  return (
    <Navbar
      isBlurred
      isBordered
      maxWidth="full"
      position="static"
      className="bg-nav md:bg-nav bg-center"
      height={'8rem'}
      classNames={{
        toggleIcon: ['text-slate-800 font-bolder p-2'],
        toggle: ['bg-violet-200 h-8 w-auto'],
        brand: ['rounded-full'],
        base: ['bg-slate-900'],
        menu: ['bg-violet-200 max-h-40'],
      }}
    >
      {/* when window is not on a phone, show links and hide hamburger menu */}
      <NavbarContent justify="start">
        <NavbarItem>
          <NavbarBrand>
            <a href="/" title="Home">
              <Image
                height={100}
                width={100}
                quality={100}
                src="/revised-logo.png"
                alt="SeeYouThursday"
                className="w-auto min-w-24 h-auto mt-3 mb-3"
                // bg-indigo-700 bg-opacity-50
              />
            </a>
          </NavbarBrand>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent
        className="hidden sm:flex gap-4 bg-violet-200 bg-opacity-40
          rounded-3xl p-3 m-3 h-12 ps-10 pe-10 font-bold shadow-inner backdrop-blur-sm"
        justify="center"
      >
        {pathname === '/' ? (
          <NavDropDown dropdown={dropdown} />
        ) : (
          <NavbarItem
            // isActive={pathname === item.href}
            className="hover:bg-violet-600 p-2 px-3 rounded-3xl hover:text-white text-primary"
          >
            <div className="flex items-start">
              <Link color="primary" href="/" className="text-white ">
                Home
              </Link>
            </div>
          </NavbarItem>
        )}

        {navItems.map((item) => {
          return (
            <NavbarItem
              key={item.name}
              isActive={pathname === item.href}
              className="hover:bg-violet-600 p-2 px-3 rounded-3xl hover:text-white text-primary"
            >
              <Link color="primary" href={item.href} className="text-white">
                {item.name}
              </Link>
            </NavbarItem>
          );
        })}
        {/* Contact Modal */}
        <NavbarItem>
          <ContactModal location="nav" />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
      </NavbarContent>
      <NavbarMenu>
        {navItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" href={item.href} size="lg">
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

const NavDropDown = ({ dropdown }: { dropdown: dropDown[] }) => {
  return (
    <Dropdown className="navLinkStyle">
      <NavbarItem>
        <DropdownTrigger>
          <Button
            disableRipple
            className="hover:bg-violet-600 p-2 px-3 rounded-3xl text-medium text-white font-semibold"
            endContent={<IconChevronDown stroke={2} />}
            radius="sm"
            variant="light"
          >
            Home
          </Button>
        </DropdownTrigger>
      </NavbarItem>
      <NavbarItem>
        <DropdownMenu
          aria-label="ACME features"
          className="w-[340px]"
          itemClasses={{
            base: 'gap-4',
          }}
        >
          {dropdown.map((item) => {
            return (
              <DropdownItem key={item.key} href={item.href}>
                {item.name}
              </DropdownItem>
            );
          })}
        </DropdownMenu>
      </NavbarItem>
    </Dropdown>
  );
};

export default Nav;
