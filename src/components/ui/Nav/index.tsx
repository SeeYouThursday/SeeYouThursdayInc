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
import { IconChevronDown, IconComet } from '@tabler/icons-react';
import { UserButton, SignedIn } from '@clerk/nextjs';

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
  const [isActive, setIsActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinkSize = `text-2xl`;

  const navItems: navItem[] = [
    { href: '/pricing', name: 'Pricing', isActive: false },
    { href: '/products', name: 'Our Work', isActive: false },
    { href: '/contact-us', name: 'Contact Us', isActive: false },
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
      href: '#contact',
      name: 'Contact Us',
      icon: '',
      key: 'Contact',
      isActive: false,
    },
  ];

  return (
    <Navbar
      isBlurred
      // isBordered
      maxWidth="full"
      position="static"
      className="bg-blue-400/50"
      // height={'5rem'}
      classNames={{
        toggleIcon: ['text-slate-800 font-bolder p-2'],
        toggle: ['bg-violet-200 h-8 w-auto'],
        brand: ['rounded-full'],
        base: ['bg-slate-900'],
        menu: ['bg-violet-200 max-h-48'],
      }}
      id="home"
    >
      <NavbarContent justify="start">
        <NavbarItem>
          <NavbarBrand>
            <a href="/" title="Home" className="">
              <Image
                height={50}
                width={50}
                quality={100}
                src="/revised-logo.webp"
                alt="SeeYouThursday"
                className="w-auto min-w-16 h-auto mt-3 mb-3"
              />
            </a>
          </NavbarBrand>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="" justify="center">
        <div
          className="hidden sm:flex gap-4 
        m-3 font-bold justify-center items-center flex-wrap"
        >
          <NavDropConditional pathname={pathname} dropdown={dropdown} />
          {navItems.map((item) => (
            <NavbarItem
              key={item.name}
              isActive={pathname === item.href}
              className="px-3"
            >
              <Link
                href={item.href}
                underline="hover"
                className="text-violet-100 hover:text-white poppins-medium text-xl"
              >
                {item.name}
              </Link>
            </NavbarItem>
          ))}{' '}
        </div>
        {/* ADMIN USE */}
        <SignedIn>
          <NavbarItem className="hover:bg-violet-600 p-2 px-3 rounded-3xl hover:text-white text-primary">
            <Link color="primary" href="/dashboard" className="text-white">
              Dashboard
            </Link>
          </NavbarItem>
          <NavbarItem>
            <UserButton />
          </NavbarItem>
        </SignedIn>
      </NavbarContent>
      {/* Mobile Menu */}
      <NavbarContent justify="end">
        {/* <Image
          alt=""
          src="/nav/make-wife-happy.png"
          height={607}
          width={207}
          quality={100}
          className="hidden sm:block"
        /> */}
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
      </NavbarContent>
      <NavbarMenu className="bg-blue-950">
        {navItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <div className="flex hover:translate-x-2">
              <IconComet className="hover:text-blue-900 -rotate-45 text-yellow-300" />
              <Link
                className="w-full text-white ps-1"
                href={item.href}
                size="lg"
              >
                {item.name}
              </Link>
            </div>
          </NavbarMenuItem>
        ))}
        <div className="flex hover:translate-x-2">
          <IconComet className="hover:text-blue-900 -rotate-45 text-yellow-300" />
          <Link href="/contact-us" className="w-full text-white ps-1" size="lg">
            Contact Us!
          </Link>
        </div>
      </NavbarMenu>
    </Navbar>
  );
};

const NavDropDown = ({ dropdown }: { dropdown: dropDown[] }) => (
  <Dropdown
    className="navLinkStyle"
    showArrow
    classNames={{
      base: 'before:bg-default-200', // change arrow background
      content: 'bg-blue-200 text-black', //change the overall bg of dropdown menu
    }}
  >
    <NavbarItem>
      <DropdownTrigger>
        <div className="home-dropdown-button p-2 px-3 rounded-3xl text-violet-100 poppins-medium hover:underline flex outline-none underline-offset-4  text-xl hover:text-white/80 tap-highlight-transparent hover:cursor-pointer">
          Home{' '}
          <span className="mt-[3px]">
            <IconChevronDown stroke={1} />
          </span>
        </div>
      </DropdownTrigger>
    </NavbarItem>
    <NavbarItem>
      <DropdownMenu
        aria-label="ACME features"
        className="w-[340px]"
        itemClasses={{
          base: 'gap-4 bg-violet-300 text-black',
        }}
      >
        {dropdown.map((item) => (
          <DropdownItem
            key={item.key}
            href={item.href}
            className="dropdownitem"
            textValue={item.name}
          >
            {item.name}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </NavbarItem>
  </Dropdown>
);

const NavDropConditional = ({
  pathname,
  dropdown,
}: {
  pathname: string;
  dropdown: dropDown[];
}) => (
  <>
    {pathname === '/' ? (
      <NavDropDown dropdown={dropdown} />
    ) : (
      <NavbarItem className="hover:bg-violet-600 p-2 px-3 rounded-3xl hover:text-white text-primary">
        <div className="flex items-start">
          <Link color="primary" href="/" className="text-white">
            Home
          </Link>
        </div>
      </NavbarItem>
    )}
  </>
);

export default Nav;
