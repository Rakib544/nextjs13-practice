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
    <div className="my-24 bg-background">
      <div className="grid lg:grid-cols-5">
        <Sidebar role={data?.user?.role} className="hidden lg:block" />
        <div className="col-span-3 lg:col-span-4 lg:border-l">
          <div className="h-full px-4 py-6 lg:px-8">{children}</div>
        </div>
      </div>
    </div>
  );
}
