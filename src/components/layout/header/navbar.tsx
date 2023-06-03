"use client";

import { type Session } from "next-auth";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import useScroll from "~/lib/hooks/use-scroll";
import { cn } from "~/lib/utils";
// import ThemeToggle from "../../shared/theme-toggle";
import { ShoppingCart } from "lucide-react";
import { NavNavigationMenu } from "~/components/navigation-menu";
import { SearchModal } from "~/components/search-modal";
import SideDrawer from "~/components/shared/drawer";
import UserNav from "../user-nav";

export default function Navbar({ session }: { session: Session | null }) {
  const scrolled = useScroll(50);
  return (
    <header
      className={cn(
        "fixed top-0 w-full",
        scrolled
          ? "h-16 border-b border-gray-200 bg-white transition-all"
          : "h-20 bg-white/0",
        "z-30"
      )}
    >
      <div className="container h-full">
        <div className="flex h-full  items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/usthtaze.png"
                alt="Usthtaze logo"
                width="160"
                height="190"
                className="mr-2 rounded-sm object-contain"
              />
            </Link>
          </div>
          <div className="hidden lg:block">
            <NavNavigationMenu />
          </div>
          <div className=" flex items-center gap-x-2">
            {/* <ThemeToggle /> */}
            <div className="flex">
              <SearchModal />
              <Button variant="link" className="rounded-full px-2">
                <Link href="/cart">
                  <ShoppingCart className="h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="hidden items-center gap-x-2 lg:flex ">
              {session ? (
                <UserNav session={session} />
              ) : (
                <>
                  <Button onClick={() => signIn()} variant="outline">
                    Sign In
                  </Button>
                  <Button asChild>
                    <Link href="/auth/singup">Sign up</Link>
                  </Button>
                </>
              )}
            </div>
            <div className="block lg:hidden ">
              <SideDrawer />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
