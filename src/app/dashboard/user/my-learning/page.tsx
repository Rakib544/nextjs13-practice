import { LucideArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { courseData } from "~/data/course-data";

// const coursesData = [
//   {
//     id: 1,
//     title: "Pro Course (Content Updated up to Batch 6)",
//     author: "Jhanker Mahbub",
//     thumbnail:
//       "https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1642917817354.png",
//   },
//   {
//     id: 2,
//     title: "Pro Course (Content Updated up to Batch 6)",
//     author: "Jhanker Mahbub",
//     thumbnail:
//       "https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1626003573155.png",
//   },
//   {
//     id: 3,
//     title: "Pro Course (Content Updated up to Batch 6)",
//     author: "Jhanker Mahbub",
//     thumbnail:
//       "https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1619594179730.png",
//   },
// ];

export default function MyLearning() {
  return (
    <div>
      <div className="grid grid-cols-12 gap-6">
        {courseData.map((course) => (
          <div
            className="col-span-12 md:col-span-6 lg:col-span-4"
            key={course.id}
          >
            <Link href="/course/1">
              <Image
                src={course.thumbnail}
                alt={course.title}
                width={400}
                height={400}
              />
              <h2 className="mt-2 font-bold">{course.title}</h2>
              <p className="mt-1 text-sm text-slate-600">
                {course.instructors[0].name}
              </p>
              <div className="my-2 flex items-center gap-2">
                <div className="relative h-2 w-full rounded-full bg-slate-200">
                  <div className="absolute left-0 top-0 block h-2 w-[95%] rounded-full bg-[#0c0c0c]" />
                </div>
                <p className="text-sm font-medium">96%</p>
              </div>
              <p className="flex items-center gap-1 text-sm font-medium">
                Continue Course <LucideArrowRight size={15} />
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
