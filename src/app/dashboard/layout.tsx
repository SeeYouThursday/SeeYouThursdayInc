"use client";

import React, { useState } from 'react';
import { useUser } from "@clerk/nextjs";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconCalendar,
  IconSettings,
  IconBox,
  IconUsers,
  IconMenu, 
  IconX 
} from "@tabler/icons-react";

export default function DashboardLayout({ children }: { children: React.ReactNode; }) {
  const { user } = useUser();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
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
    <div className="flex w-full bg-[#4527a0] text-black min-h-screen">
      <aside className={`hidden lg:block lg:w-64 bg-[#4527a0] ${isSidebarOpen ? 'block' : 'hidden'}`}>
        <Sidebar open={true}>
          <SidebarBody>
            <div className="font-bold text-xl pt-3 pb-10">SEEYOUTHURSDAY</div>
            {links.map((link) => (
              <SidebarLink key={link.label} link={link} />
            ))}
          </SidebarBody>
        </Sidebar>
      </aside>
      <div className={`lg:hidden fixed inset-0 bg-[#4527a0] text-black z-40 transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Sidebar open={true}>
          <SidebarBody>
            <div className="flex justify-between items-center p-4">
              <button onClick={() => setIsSidebarOpen(false)} className="text-black">
                <IconX className="h-8 w-8" />
              </button>
            </div>
            {links.map((link) => (
              <SidebarLink key={link.label} link={link} />
            ))}
          </SidebarBody>
        </Sidebar>
      </div>

      <div className="flex-1 flex flex-col min-h-screen">
        <header className="flex justify-between items-center p-6 bg-white shadow-md lg:hidden">
          <button onClick={() => setIsSidebarOpen(true)} className="text-black">
            <IconMenu className="h-8 w-8" />
          </button>
          <div className="font-bold text-xl">SEEYOUTHURSDAY</div>
        </header>
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
