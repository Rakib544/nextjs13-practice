"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";
import { cn } from "~/lib/utils";

const components: { title: string; href: string }[] = [
  {
    title: "Design",
    href: "/courses?category=design",
  },
  {
    title: "Development",
    href: "/courses?category=development",
  },
  {
    title: "Academics",
    href: "/courses?category=academics",
  },
  {
    title: "Marketing",
    href: "/courses?category=marketing",
  },
  {
    title: "Business",
    href: "/courses?category=business",
  },
  {
    title: "Life Style",
    href: "/courses?category=lifestyle",
  },
  {
    title: "Health and Fitness",
    href: "/courses?category=health",
  },
];

export function NavNavigationMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/instructors" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Instructors
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/forums" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Forums
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = ({
  className,
  title,
  href,
  ...props
}: {
  className?: string;
  title: string;
  href: string;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <p className="text-sm font-medium leading-none">{title}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
ListItem.displayName = "ListItem";
