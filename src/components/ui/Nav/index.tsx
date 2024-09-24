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
import {SignedIn } from '@clerk/nextjs';
import ClerkMenu from '@/components/ui/ClerkMenu';
// import { NavDropDown } from '@/components/navDropdown';

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

  const navLinkSize = `text-violet-100 hover:text-white poppins-medium lg:text-xl sm:text-md md:text-lg text-center`;

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
    // {
    //   href: '#contact',
    //   name: 'Contact Us',
    //   icon: '',
    //   key: 'Contact',
    //   isActive: false,
    // },
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
        content: [
          'flex justify-center items-center md:data-[justify=start]:justify-center',
        ],
      }}
      id="home"
    >
      <NavbarContent justify="start">
        <NavbarItem>
          <NavbarBrand className="flex items-center">
            <a
              href="/"
              title="Home"
              className="flex justify-center items-center"
            >
              <Image
                height={50}
                width={50}
                quality={100}
                src="/logo/revised-logo.webp"
                alt="SeeYouThursday"
                className="w-auto min-w-16 h-auto mt-3 mb-3 mobile:hidden"
              />
            </a>
          </NavbarBrand>
        </NavbarItem>
      </NavbarContent>{' '}
      <NavbarContent className="" justify="center">
        <div
          className="hidden sm:grid grid-cols-4 gap-2
        lg:font-bold justify-center items-center flex-wrap"
        >
          {/* <NavDropConditional
            pathname={pathname}
            dropdown={dropdown}
            navLinkSize={navLinkSize}
          /> */}
          {navItems.map((item) => (
            <NavbarItem
              key={item.name}
              isActive={pathname === item.href}
              className="px-3 flex justify-center items-center"
            >
              <Link href={item.href} underline="hover" className={navLinkSize}>
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
            <ClerkMenu />
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
                className="w-full text-white ps-1 text-center"
                href={item.href}
                size="lg"
              >
                {item.name}
              </Link>
            </div>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
// const NavDropConditional = ({
//   pathname,
//   dropdown,
//   navLinkSize,
// }: {
//   pathname: string;
//   dropdown: dropDown[];
//   navLinkSize: string;
// }) => (
//   <>
//     {pathname === '/' ? (
//       <NavDropDown dropdown={dropdown} navLinkStyle={navLinkSize} />
//     ) : (
//       <NavbarItem className="hover:underline p-2 px-3 hover:text-white text-primary">
//         <div className="flex items-start">
//           <Link color="primary" href="/" className={`${navLinkSize} m-0`}>
//             Home
//           </Link>
//         </div>
//       </NavbarItem>
//     )}
//   </>
// );

export default Nav;
