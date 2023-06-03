"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { cn } from "~/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Button } from "../ui/button";

const components: { title: string; href: string }[] = [
  {
    title: "Design",
    href: "/courses?category=design",
  },
  {
    title: "Development",
    href: "/course?category=development",
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

const SideDrawer = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <Button variant="outline" onClick={() => setIsOpen(true)}>
        <Menu />
      </Button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="p-4"
      >
        <div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-none px-3">
              <AccordionTrigger>Categories</AccordionTrigger>
              <AccordionContent>
                <ul>
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    />
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Link
            href="/courses"
            className=" block select-none space-y-2 rounded-md p-3 font-medium leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          >
            Courses
          </Link>
          <Link
            href="/instructors"
            className="block select-none space-y-2 rounded-md p-3 font-medium leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          >
            Instructors
          </Link>
          <Link
            href="/forums"
            className="block select-none space-y-2 rounded-md p-3 font-medium leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          >
            Forums
          </Link>
          <div className="mt-6 grid gap-y-3">
            <Button>Sign In</Button>
            <Button asChild variant="outline">
              <Link href="/auth/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default SideDrawer;

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
    </li>
  );
};
