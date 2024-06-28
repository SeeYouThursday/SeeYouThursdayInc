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
  <Image
    height={50}
    width={50}
    quality={100}
    src="/Purple-SeeYouThursday.png"
    alt="SeeYouThursday"
    className="p-3 w-24 h-24 rounded-sm"
  />;
  const navItems: navItem[] = [
    { href: '/', name: 'Home', isActive: false },
    { href: '/portfolio', name: 'Portfolio', isActive: false },
  ];

  return (
    
    <Navbar
      // shouldHideOnScroll={true}
      maxWidth="full"
      className="w-[100svw] bg-nav"
      classNames={{
        toggleIcon: ['text-blue-200'],
        brand: ['rounded-full'],
        base: ['bg-slate-900'],
      }}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
        <NavbarBrand>
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
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            PlaceHolder
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            PlaceHolder
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            PlaceHolder
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} href="#" className="bg-violet-400">
            Get a Quote!
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
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
