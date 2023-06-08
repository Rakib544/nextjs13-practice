import { SidebarNav } from "~/components/sidenav-bar";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const sidebarNavItems = [
    {
      title: "Goals",
      href: `/instructor/course/${params.id}/manage/goals`,
    },
    {
      title: "Curriculum",
      href: `/instructor/course/${params.id}/manage/curriculum`,
    },
    {
      title: "Basics",
      href: `/instructor/course/${params.id}/manage/basics`,
    },
    {
      title: "Pricing",
      href: `/instructor/course/${params.id}/manage/pricing`,
    },
    {
      title: "Course Message",
      href: `/instructor/course/${params.id}/manage/course-message`,
    },
  ];
  return (
    <div className="container my-24 w-full bg-background">
      <div className="grid grid-cols-12">
        <div className="col-span-0 hidden lg:col-span-2 lg:block">
          <SidebarNav items={sidebarNavItems} />
        </div>

        <div className="col-span-12 lg:col-span-10">
          <div className="h-full px-4 lg:px-8">{children}</div>
        </div>
      </div>
    </div>
  );
}
