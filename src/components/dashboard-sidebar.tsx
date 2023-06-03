"use client";

import {
  Award,
  Laptop,
  LayoutDashboard,
  Pencil,
  StickyNote,
  UserCheck,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";

const userMenus = [
  {
    label: "Dashboard",
    href: "/dashboard/user",
    icon: <LayoutDashboard className="mr-2 h-4 w-4" />,
  },
  {
    label: "My Learning",
    href: "/dashboard/user/my-learning",
    icon: <Laptop className="mr-2 h-4 w-4" />,
  },
  {
    label: "Order History",
    href: "/dashboard/user/order-history",
    icon: <StickyNote className="mr-2 h-4 w-4" />,
  },
  {
    label: "Certificates",
    href: "/dashboard/user/certificates",
    icon: <Award className="mr-2 h-4 w-4" />,
  },
];

const instructorMenus = [
  {
    label: "Dashboard",
    href: "/dashboard/instructor",
    icon: <LayoutDashboard className="mr-2 h-4 w-4" />,
  },
  {
    label: "Courses",
    href: "/dashboard/instructor/courses",
    icon: <Laptop className="mr-2 h-4 w-4" />,
  },
  {
    label: "Students",
    href: "/dashboard/instructor/students",
    icon: <Users className="mr-2 h-4 w-4" />,
  },
  {
    label: "Create Course",
    href: "/dashboard/instructor/create-course",
    icon: <Pencil className="mr-2 h-4 w-4" />,
  },
];

const adminMenus = [
  {
    label: "Dashboard",
    href: "/dashboard/admin",
    icon: <LayoutDashboard className="mr-2 h-4 w-4" />,
  },
  {
    label: "Students",
    href: "/dashboard/admin/students",
    icon: <Users className="mr-2 h-4 w-4" />,
  },
  {
    label: "Instructors",
    href: "/dashboard/admin/instructors",
    icon: <Users className="mr-2 h-4 w-4" />,
  },
  {
    label: "Enrollments",
    href: "/dashboard/admin/enrollments",
    icon: <UserCheck className="mr-2 h-4 w-4" />,
  },
];

export function Sidebar({
  className,
  role = "USER",
}: {
  className: string;
  role?: string;
}) {
  const pathname = usePathname();
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <div className="space-y-1">
            {role === "USER" ? (
              <>
                {userMenus.map((menu) => (
                  <Link
                    key={menu.href}
                    href={menu.href}
                    className={cn(
                      buttonVariants({ variant: "ghost" }),
                      pathname === menu.href
                        ? "bg-muted hover:bg-muted"
                        : "hover:bg-transparent hover:underline",
                      "flex items-center justify-start"
                    )}
                  >
                    {menu.icon}
                    {menu.label}
                  </Link>
                ))}
              </>
            ) : null}
            {role === "INSTRUCTOR" ? (
              <>
                {instructorMenus.map((menu) => (
                  <Link
                    key={menu.href}
                    href={menu.href}
                    className={cn(
                      buttonVariants({ variant: "ghost" }),
                      pathname === menu.href
                        ? "bg-muted hover:bg-muted"
                        : "hover:bg-transparent hover:underline",
                      "flex items-center justify-start"
                    )}
                  >
                    {menu.icon}
                    {menu.label}
                  </Link>
                ))}
              </>
            ) : null}
            {role === "ADMIN" ? (
              <>
                {adminMenus.map((menu) => (
                  <Link
                    key={menu.href}
                    href={menu.href}
                    className={cn(
                      buttonVariants({ variant: "ghost" }),
                      pathname === menu.href
                        ? "bg-muted hover:bg-muted"
                        : "hover:bg-transparent hover:underline",
                      "flex items-center justify-start"
                    )}
                  >
                    {menu.icon}
                    {menu.label}
                  </Link>
                ))}
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
