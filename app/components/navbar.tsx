"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

import { Logo } from "./logo";

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY <= 32 || currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/projects", label: "Projects " }
  ];

  const socialLinks = [
    {
      href: "https://github.com/naimulcsx",
      icon: (
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      )
    },
    {
      href: "https://linkedin.com/in/naimulcsx",
      icon: (
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      )
    }
  ];

  const pathname = usePathname();

  return (
    <motion.nav
      style={{
        height: 80,
        transform: isVisible ? "translateY(0)" : "translateY(-10%)",
        opacity: isVisible ? 1 : 0,
        transition: "transform 0.2s ease, opacity 0.2s ease"
      }}
      className="sticky top-0 z-50 border-b border-slate-900 backdrop-blur-md dark:bg-gray-900/90"
    >
      <div className="container flex h-full max-w-7xl items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2">
            <div className="relative right-1 text-primary-400">
              <Logo className="h-10 w-10" />
            </div>
            <p className="text-xl font-semibold text-gray-200">
              Naimul's Space
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <div className="flex items-center gap-4 text-sm">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`flex border-b-2 px-2 py-2.5 ${
                  pathname === item.href
                    ? "border-primary-300 font-medium text-primary-300"
                    : "border-transparent text-gray-300/90 hover:text-gray-200"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-300/90 hover:text-gray-200"
                target="_blank"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {link.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Replace Mobile Menu Button and Navigation with Dialog */}
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="text-gray-300/90 transition-colors duration-200 hover:text-gray-200 md:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="DialogOverlay fixed inset-0 z-50 animate-[fade-in_150ms_ease-out] bg-black/50 backdrop-blur-sm" />
            <Dialog.Content className="DialogContent fixed right-0 top-0 z-50 flex h-full w-[250px] animate-[slide-in_150ms_ease-out] flex-col border-l border-slate-800 bg-gray-900 p-5 focus:outline-none">
              <div className="mb-4 flex justify-end">
                <Dialog.Close className="text-gray-300/90 hover:text-gray-200">
                  <X className="h-6 w-6" />
                </Dialog.Close>
              </div>

              <div className="flex flex-col divide-y divide-gray-700">
                {navItems.map((item, index) => (
                  <Dialog.Close asChild key={index}>
                    <Link
                      href={item.href}
                      className={`py-3 text-sm ${
                        pathname === item.href
                          ? "font-medium text-primary-300"
                          : "text-gray-300/90 hover:text-gray-200"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </Dialog.Close>
                ))}
              </div>

              <div className="mt-auto flex items-center gap-4 pt-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-gray-300/90 hover:text-gray-200"
                    target="_blank"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {link.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </motion.nav>
  );
}
