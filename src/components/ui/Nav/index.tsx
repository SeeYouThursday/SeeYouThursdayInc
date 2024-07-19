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
    { href: '/services', name: 'Services', isActive: false },
    { href: '#ourCrew', name: 'Meet The Team', isActive: false },
    { href: '/pricing', name: 'Pricing', isActive: false },
    { href: '#ContactUs', name: 'Contact Us', isActive: false },
  ];

  return (
    <Navbar
      maxWidth="full"
      position="static"
      className="bg-nav-small md:bg-nav bg-center"
      classNames={{
        toggleIcon: ['text-slate-800 font-bolder p-2'],
        toggle: ['bg-violet-200 h-8 w-auto'],
        brand: ['rounded-full'],
        base: ['bg-slate-900'],
      }}
    >
      {/* when window is not on a phone, show links and hide hamburger menu */}
      <NavbarContent justify="start">
        <NavbarItem>
          <NavbarBrand>
            <a href="/" title="Home">
              <Image
                height={50}
                width={50}
                quality={100}
                src="/solid-webdevdesign.png"
                alt="SeeYouThursday"
                className="w-16 h-16 mt-3 mb-3"
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
        {navItems.map((item) => {
          return (
            <NavbarItem
              key={item.name}
              isActive={pathname === item.href}
              className="hover:bg-violet-600 p-2 ps-3 pe-3 rounded-3xl hover:text-white text-primary"
            >
              <Link color="primary" href={item.href} className="text-white">
                {item.name}
              </Link>
            </NavbarItem>
          );
        })}
        {/* <NavbarItem className="hover:bg-violet-600 p-2 ps-3 pe-3 rounded-3xl hover:text-white text-primary">
          <Link
            color="primary"
            href="#services"
            className="text-inherit hover:text-white"
          >
            Services
          </Link>
        </NavbarItem>
        <NavbarItem className="hover:bg-violet-600 p-2 ps-3 pe-3 rounded-3xl hover:text-white text-primary">
          <Link
            color="primary"
            href="/pricing"
            className="text-inherit hover:text-white"
          >
            Pricing
          </Link>
        </NavbarItem>
        <NavbarItem className="hover:bg-violet-600 p-2 ps-3 pe-3 rounded-3xl hover:text-white text-primary">
          <Link
            color="primary"
            href="#ourCrew"
            className="text-inherit hover:text-white"
          >
            Meet The Team
          </Link>
        </NavbarItem>
        <NavbarItem className="hover:bg-violet-600 p-2 ps-3 pe-3 rounded-3xl hover:text-white text-primary">
          <Link
            color="primary"
            href="#ContactUs"
            className="text-inherit hover:text-white"
          >
            Contact Us
          </Link>
        </NavbarItem> */}
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
