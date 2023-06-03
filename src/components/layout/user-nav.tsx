import { Laptop, LogOut, Pencil, ShoppingCart, User } from "lucide-react";

import { type Session } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

export default function UserNav({ session }: { session: Session | null }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10">
            <AvatarImage
              src={session?.user?.image as string}
              alt={session?.user?.name as string}
            />
            <AvatarFallback>{session?.user?.name?.[0]}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link href="/user/edit-profile" className="flex items-center gap-4">
              <Avatar className="h-14 w-14">
                <AvatarImage
                  src={session?.user?.image as string}
                  alt={session?.user?.name as string}
                />
                <AvatarFallback>{session?.user?.name?.[0]}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col space-y-1">
                <p className="text-lg font-bold leading-none">
                  {session?.user?.name}
                </p>
                <p className="text-xs leading-none text-muted-foreground">
                  {session?.user?.email}
                </p>
              </div>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="cursor-pointer py-2 font-medium">
          <Link
            href={
              session?.user?.role === "USER"
                ? "/dashboard/user"
                : session?.user?.role === "INSTRUCTOR"
                ? "/dashboard/instructor"
                : "/dashboard/admin"
            }
          >
            <User className="mr-2 h-4 w-4" />
            <span>Dashboard</span>
          </Link>
        </DropdownMenuItem>
        {session?.user?.role === "USER" ? (
          <DropdownMenuItem asChild className="cursor-pointer py-2 font-medium">
            <Link href="/cart">
              <ShoppingCart className="mr-2 h-4 w-4" />
              <span>Cart</span>
            </Link>
          </DropdownMenuItem>
        ) : null}
        {session?.user?.role === "USER" ? (
          <DropdownMenuItem asChild className="cursor-pointer py-2 font-medium">
            <Link href="/dashboard/user/my-learning">
              <Laptop className="mr-2 h-4 w-4" />
              <span>My Learning</span>
            </Link>
          </DropdownMenuItem>
        ) : null}
        {session?.user?.role === "INSTRUCTOR" ? (
          <DropdownMenuItem asChild className="cursor-pointer py-2 font-medium">
            <Link href="/instructor/1">
              <Pencil className="mr-2 h-4 w-4" />
              <span>Public Profile</span>
            </Link>
          </DropdownMenuItem>
        ) : null}
        <DropdownMenuItem asChild className="cursor-pointer py-2 font-medium">
          <Link href="/user/edit-profile">
            <Pencil className="mr-2 h-4 w-4" />
            <span>Edit Profile</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => signOut()}
          className="cursor-pointer py-2 font-medium"
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
