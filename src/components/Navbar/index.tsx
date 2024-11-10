import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { DarkModeSwitch } from "./darkmodeswitch";
import { Skeleton } from "@nextui-org/react";

interface MenuItem {
  label: string;
  href: string;
}

const menuItems: MenuItem[] = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/allproductslist" },
  { label: "Skils", href: "/brands" },
  { label: "Projects", href: "/about" },
];

// Updated logo component with fixed dimensions
const LogoImage = () => (
  <div className="relative h-14 w-[110px]">
    <Image
      fill
      className="object-contain"
      alt="Akij Fair Value"
      src="/logo/logo.webp"
      priority={true}
      sizes="110px"
    />
  </div>
);

const NavbarSkeleton = () => (
  <div className="fixed z-[500] w-full bg-white shadow-md dark:bg-zinc-800">
    <div className="grid h-16 w-full grid-cols-3 items-center justify-center px-4 sm:h-[20] md:h-16 md:px-6 lg:h-[4rem] xl:h-20 2xl:h-[4.5rem]">
      <div className="flex w-full justify-center">
        <Skeleton className="h-12 w-20" />
      </div>
      <div className="hidden space-x-4 md:flex md:justify-center">
        <Skeleton className="h-6 w-20" />
        <Skeleton className="h-6 w-20" />
        <Skeleton className="h-6 w-20" />
        <Skeleton className="h-6 w-20" />
      </div>
      <div className="flex items-center justify-center gap-4">
        <Skeleton className="h-10 w-48" />
        <Skeleton className="h-10 w-10" />
        <Skeleton className="h-10 w-10 rounded-full" />
      </div>
    </div>
  </div>
);

const MobileNavbar = () => {

  return (
    <motion.nav
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      className="fixed z-[50] w-full bg-white shadow-md dark:bg-zinc-800"
    >
      <div className="flex h-16 max-w-[1400px] items-center justify-between px-4">
        <Link prefetch={false} href="/" className="shrink-0">
          <LogoImage />
        </Link>

        <div className="flex items-center gap-3">
          <DarkModeSwitch />
        </div>
      </div>
    </motion.nav>
  );
};

const TabletNavbar = () => {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      className="fixed z-[50] w-full bg-white shadow-md dark:bg-zinc-800"
    >
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="grid h-20 grid-cols-3 items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex w-full shrink-0 justify-center"
          >
            <Link prefetch={false} href="/" className="shrink-0">
              <LogoImage />
            </Link>
          </motion.div>

          <div className="flex items-center gap-4 lg:gap-6">
            {menuItems?.map((item) => (
              <motion.div
                key={item.href}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <Link
                  prefetch={false}
                  href={item?.href}
                  className={`text-sm font-medium transition-colors lg:text-base ${
                    pathname === item?.href
                      ? "text-green-500"
                      : "text-gray-700 hover:text-green-700 dark:text-gray-200 dark:hover:text-green-400"
                  }`}
                >
                  {item?.label}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <DarkModeSwitch />
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

const DesktopNavbar = () => {
  const pathname = usePathname();

  return (
    <>
      <motion.nav
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        className="fixed z-[50] w-full bg-white shadow-md dark:bg-zinc-800"
      >
        <div className="mx-auto max-w-[1400px] px-4 md:px-6">
          <div
            className={`grid grid-cols-3 items-center justify-center lg:h-[4rem] lg:gap-40 xl:gap-10 2xl:h-[4.5rem] 2xl:gap-20`}
          >
            <motion.div whileHover={{ scale: 1.02 }} className="shrink-0">
              <Link prefetch={false} href="/" className="shrink-0">
                <LogoImage />
              </Link>
            </motion.div>

            <div className="flex w-[100%] items-center gap-6">
              {menuItems.map((item) => (
                <motion.div
                  key={item.href}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <Link
                    prefetch={false}
                    href={item.href}
                    className={`text-base font-medium transition-colors ${
                      pathname === item.href
                        ? "text-green-500"
                        : "text-gray-700 hover:text-green-700 dark:text-gray-200 dark:hover:text-green-400"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center justify-end gap-4">
              <div className="flex items-center justify-end gap-4">
                <DarkModeSwitch />
              </div>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

const NavbarComponent: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      setMounted(true);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) {
    return <NavbarSkeleton />;
  }

  const renderNavbar = () => {
    if (windowWidth < 790) {
      return <MobileNavbar />;
    } else if (windowWidth < 1400) {
      return <TabletNavbar />;
    } else {
      return <DesktopNavbar />;
    }
  };

  return renderNavbar();
};

export default NavbarComponent;
