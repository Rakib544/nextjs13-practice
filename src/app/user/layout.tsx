import { type Metadata } from "next";
import { SidebarNav } from "~/components/sidenav-bar";
import { Separator } from "~/components/ui/separator";
import { cn } from "~/lib/utils";

export const metadata: Metadata = {
  title: "Setting",
  description: "Change you profile information",
};

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/user/edit-profile",
  },
  {
    title: "Account",
    href: "/user/edit-account",
  },
  {
    title: "Photo",
    href: "/user/edit-photo",
  },
  {
    title: "Education",
    href: "/edit-education",
  },
];

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <div className="container my-32 space-y-6">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">
          Manage your account settings and set e-mail preferences.
        </p>
      </div>
      <Separator className="my-6" />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="-mx-4 lg:w-1/5">
          <nav
            className={cn(
              "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1"
            )}
          >
            <SidebarNav items={sidebarNavItems} />
          </nav>
        </aside>
        <div className="flex-1 lg:max-w-2xl">{children}</div>
      </div>
    </div>
  );
}
