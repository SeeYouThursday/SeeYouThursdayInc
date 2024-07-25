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
} from '@nextui-org/react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { ContactModal } from '@/components/ContactForm';

const Nav = () => {
  // used to track active tab/link in nav
  const [isActive, setIsActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  type navItem = {
    href: string;
    name: string;
    isActive: boolean;
  };

  const navItems: navItem[] = [
    // { href: '/', name: 'Home', isActive: false },
    // { href: '/services', name: 'Services', isActive: false },
    { href: '#ourCrew', name: 'Meet The Team', isActive: false },
    { href: '/pricing', name: 'Pricing', isActive: false },
    // { href: '#ContactUs', name: 'Contact Us', isActive: false },
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
                className="w-auto h-auto mt-3 mb-3"
                // bg-indigo-700 bg-opacity-50
              />
              {/* <Image
                height={50}
                width={50}
                quality={100}
                src="/solid-webdevdesign.png"
                alt="SeeYouThursday"
                className="w-16 h-16 mt-3 mb-3"
                // bg-indigo-700 bg-opacity-50
              /> */}
            </a>
          </NavbarBrand>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent
        className="hidden sm:flex gap-4 bg-violet-200 bg-opacity-40
          rounded-3xl p-3 m-3 h-12 ps-10 pe-10 font-bold shadow-inner backdrop-blur-sm"
        justify="center"
      >
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

export default Nav;
