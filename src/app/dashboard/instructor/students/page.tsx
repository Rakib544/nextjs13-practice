import { columns, type Payment } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      phone: "+8801786542643",
      status: "active",
      email: "m@example.com",
      country: "Bangladesh",
      user: {
        name: "Rakib",
        image:
          "https://lms-course.netlify.app/static/media/instructor.38efa4e9104ade8ec36b.png",
      },
    },
    // ...
  ];
}

export default async function Students() {
  const data = await getData();

  return (
    <div className="mx-auto w-full overflow-x-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
