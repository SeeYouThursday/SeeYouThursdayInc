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
    <>
      <Navbar
        shouldHideOnScroll={true}
        maxWidth="full"
        className="w-screen bg-slate-900 bg-nav"
        classNames={{ toggleIcon: ['text-blue-200'], brand: ['rounded-full'] }}
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          />
          <NavbarBrand>
            <Image
              height={50}
              width={50}
              quality={100}
              src="/Purple-SeeYouThursday.png"
              alt="SeeYouThursday"
              className="w-16 h-16 mt-3"
            />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
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
    </>
  );
};

export default Nav;
