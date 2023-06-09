import { getServerSession } from "next-auth";
import { Sidebar } from "~/components/dashboard-sidebar";
import { authOptions } from "~/lib/auth";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getServerSession(authOptions);
  return (
    <div className="my-24 w-full bg-background">
      <div className="grid grid-cols-12">
        <Sidebar
          role={data?.user?.role}
          className="col-span-0 hidden lg:col-span-2 lg:block"
        />
        <div className="col-span-12 lg:col-span-10 lg:border-l">
          <div className="h-full px-4 py-6 lg:px-8">{children}</div>
        </div>
      </div>
    </div>
  );
}
