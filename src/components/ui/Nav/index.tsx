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
    { href: '/', name: 'Home', isActive: false },
    { href: '/pricing', name: 'Pricing', isActive: false },
    { href: '/team', name: 'Meet The Team', isActive: false },
    { href: '/services', name: 'Services', isActive: false },
  ];

  return (
    <Navbar
      maxWidth="full"
      className="bg-nav"
      classNames={{
        toggleIcon: ['text-blue-200'],
        brand: ['rounded-full'],
        base: ['bg-slate-900'],
      }}
    >
      {/* when window is not on a phone, show links and hide hamburger menu */}
      <NavbarContent justify="start">
        <NavbarItem className="">
          <NavbarBrand>
            <Image
              height={50}
              width={50}
              quality={100}
              src="/solid-webdevdesign.png"
              alt="SeeYouThursday"
              className="w-16 h-16 mt-3 mb-3"
            />
          </NavbarBrand>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="primary" href="#">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="primary" href="#">
            Pricing
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="primary" href="#ourCrew">
            Meet The Team
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <Button as={Link} href="#" className="bg-violet-400">
          Get a Quote!
        </Button>
        <NavbarItem className="sm:hidden">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          />
        </NavbarItem>
        {/* <NavbarItem className="hidden sm:flex">
          <NavbarBrand>
            <Image
              height={50}
              width={50}
              quality={100}
              src="/solid-webdevdesign.png"
              alt="SeeYouThursday"
              className="w-16 h-16 mt-3 mb-3"
            />
          </NavbarBrand>
        </NavbarItem> */}
      </NavbarContent>

      <NavbarMenu>
        {navItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" href="#" size="lg">
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Nav;
