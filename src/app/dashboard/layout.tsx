"use client";

import React, { useState } from 'react';
import { useUser } from "@clerk/nextjs";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconCalendar,
  IconSettings,
  IconBox,
  IconUsers,
} from "@tabler/icons-react";

export default function DashboardLayout({ children }: { children: React.ReactNode; }) {
  const { user } = useUser();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);

  const links = [
    {
      label: "Calendar",
      href: "#",
      icon: <IconCalendar className="text-neutral-700 dark:text-neutral-200 h-10 w-10 flex-shrink-0" />,
    },
    {
      label: "Admin",
      href: "#",
      icon: <IconSettings className="text-neutral-700 dark:text-neutral-200 h-10 w-10 flex-shrink-0" />,
    },
    {
      label: "Products",
      href: "#",
      icon: <IconBox className="text-neutral-700 dark:text-neutral-200 h-10 w-10 flex-shrink-0" />,
    },
    {
      label: "Clients",
      href: "#",
      icon: <IconUsers className="text-neutral-700 dark:text-neutral-200 h-10 w-10 flex-shrink-0" />,
    },
  ];

  return (
    <div className="flex w-full bg-[#4527a0] text-white">
      <main className="flex-1 bg-white text-black p-6">
        <div className="flex justify-between items-center mb-6">
        <div className="p-4 font-bold text-black text-xl">SEEYOUTHURSDAY</div>
        </div>
        <div className="flex h-screen bg-[#4527a0] text-white">
    
          <Sidebar open={isSidebarOpen} setOpen={setIsSidebarOpen}>
            <SidebarBody>
              {links.map((link) => (
                <SidebarLink
                  key={link.label}
                  link={link}
                />
              ))}
            </SidebarBody>
          </Sidebar>
          {children}
        </div>
      </main>
    </div>
  );
}
