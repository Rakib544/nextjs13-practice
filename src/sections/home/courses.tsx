import Link from "next/link";
import CourseCard from "~/components/shared/course-card";
import { Button } from "~/components/ui/button";

type CourseType = {
  title: string;
  subtitle: string;
  courses: Array<{
    id: number;
    thumbnail: string;
    title: string;
    contentInfo: string;
    instructionLevel: string;
    objectives: Array<string>;
    price: {
      currencySymbol: string;
      amount: number;
    };
    ratings: number;
    totalRatings: number;
    instructors: Array<{ name: string }>;
  }>;
  viewMoreURL: string;
};

function Courses({ title, subtitle, courses, viewMoreURL = "" }: CourseType) {
  return (
    <div className="my-12">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="mb-1 text-xl font-bold lg:text-2xl">{title}</h2>
          <p className="text-slate-600">{subtitle}</p>
        </div>
        <div className="shrink-0">
          <Button asChild variant="outline">
            <Link href={viewMoreURL}>View More</Link>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        {courses.map((course) => (
          <div
            key={Math.random().toString()}
            className="col-span-12 block  md:col-span-6 lg:col-span-3"
          >
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
