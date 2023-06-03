import { columns, type Course } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Course[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      title: "This is very basic level course you can enroll",
      status: "published",
      duration: "20h 10m",
      price: "$13",
      level: "Basic",
      image:
        "https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1642917817354.png",
      createdAt: new Date().toString(),
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
