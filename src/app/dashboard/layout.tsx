"use client";

import React, { useState }  from 'react';
import { useUser, UserButton } from "@clerk/nextjs";
import { redirect } from 'next/navigation';
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconCalendar,
  IconSettings,
  IconUserBolt,
  IconBox,
  IconUsers,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/util/cn";


export default function DashboardLayout({ children }: {
    children: React.ReactNode;
}) {
const { user } = useUser();
const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // }
  // if (!user) {
  //   redirect('/');

  const links = [
    {
      label: "Calendar",
      href: "#",
      icon: <IconCalendar className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Admin",
      href: "#",
      icon: <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Products",
      href: "#",
      icon: <IconBox className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Clients",
      href: "#",
      icon: <IconUsers className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
    },
  ];

  return (
    <div className="flex w-full bg-[#4527a0] text-white">
        <main className="flex-1 bg-white text-black p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Welcome</h1>
      </div>
    <div className="flex h-screen bg-[#4527a0] text-white">
      <Sidebar open={isSidebarOpen} setOpen={setIsSidebarOpen}>
        <div className="p-4 font-bold text-xl">SEEYOUTHURSDAY</div>
        <SidebarBody>
          {links.map((link) => (
            <SidebarLink key={link.label} link={link} />
          ))}
        </SidebarBody>
      </Sidebar>
            {children}
        </div>
    </main>
</div>
    );
}