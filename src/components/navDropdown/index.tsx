// import React from 'react';
// import { useRouter } from 'next/navigation';
// import {
//   Dropdown,
//   DropdownTrigger,
//   DropdownMenu,
//   DropdownItem,
//   NavbarItem,
// } from '@nextui-org/react';
// import { IconChevronDown } from '@tabler/icons-react';

// interface DropdownItem {
//   href: string;
//   name: string;
//   key: string;
// }

// interface NavDropDownProps {
//   dropdown: DropdownItem[];
//   navLinkStyle: string;
// }

// export const NavDropDown: React.FC<NavDropDownProps> = ({ dropdown, navLinkStyle }) => {
//   const router = useRouter();

//   const handleItemClick = (href: string) => {
//     if (href.startsWith('#')) {
//       router.push('/');
//       setTimeout(() => {
//         const element = document.querySelector(href);
//         if (element) {
//           element.scrollIntoView({ behavior: 'smooth' });
//         }
//       }, 100);
//     } else {
//       router.push(href);
//     }
//   };

//   return (
//     <Dropdown
//       className={navLinkStyle}
//       showArrow
//       classNames={{
//         base: 'before:bg-default-200',
//         content: 'bg-blue-200 text-black',
//       }}
//     >
//       <NavbarItem>
//         <DropdownTrigger>
//           <div
//             className={`home-dropdown-button rounded-3xl text-violet-100 poppins-medium hover:underline flex justify-center items-center outline-none underline-offset-4 hover:text-white/80 tap-highlight-transparent hover:cursor-pointer ${navLinkStyle}`}
//           >
//             Home
//             <span className="mt-[3px]">
//               <IconChevronDown stroke={1} />
//             </span>
//           </div>
//         </DropdownTrigger>
//       </NavbarItem>
//       <DropdownMenu
//         aria-label="Home Links"
//         className="w-[240px]"
//         itemClasses={{
//           base: 'gap-4 bg-violet-300 text-black',
//         }}
//         onAction={(key) => {
//           const item = dropdown.find((i) => i.key === key);
//           if (item) {
//             handleItemClick(item.href);
//           }
//         }}
//       >
//         {dropdown.map((item) => (
//           <DropdownItem key={item.key} className="dropdownitem">
//             {item.name}
//           </DropdownItem>
//         ))}
//       </DropdownMenu>
//     </Dropdown>
//   );
// };