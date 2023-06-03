import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";

const coursesData = [
  {
    id: 1,
    title: "Pro Course (Content Updated up to Batch 6)",
    author: "Jhanker Mahbub",
    thumbnail:
      "https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1642917817354.png",
  },
  {
    id: 2,
    title: "Pro Course (Content Updated up to Batch 6)",
    author: "Jhanker Mahbub",
    thumbnail:
      "https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1626003573155.png",
  },
  {
    id: 3,
    title: "Pro Course (Content Updated up to Batch 6)",
    author: "Jhanker Mahbub",
    thumbnail:
      "https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1619594179730.png",
  },
];

export default function MyLearning() {
  return (
    <div>
      <div className="grid grid-cols-12 gap-6">
        {coursesData.map(
          (course: {
            id: number;
            title: string;
            author: string;
            thumbnail: string;
          }) => (
            <Link
              href="/course/1/learn/lecture/1"
              className="shadow-nav col-span-12 grid grid-cols-12 gap-3 rounded bg-white p-2 lg:col-span-6"
              key={course.id}
            >
              <div className="col-span-5">
                <Image
                  src={course.thumbnail}
                  alt={course.title}
                  height={400}
                  width={400}
                  className="h-full w-auto rounded-md"
                />
              </div>
              <div className="col-span-7">
                <h3 className="mb-1 font-bold">{course.title}</h3>
                <p>{course.author}</p>
                <div className="my-2 flex gap-2">
                  <div className="relative h-4 w-full rounded-full bg-slate-200">
                    <div className="absolute left-0 top-0 block h-4 w-[95%] rounded-full bg-[#04D9FF]" />
                  </div>
                  <p>96%</p>
                </div>
                <Button>Continue Courses</Button>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  );
}
