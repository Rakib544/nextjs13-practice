import Image from "next/image";
import Link from "next/link";
import CustomRating from "~/components/rating";
import { Button } from "~/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/components/ui/hover-card";

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
          <h2 className="mb-1 text-2xl font-bold">{title}</h2>
          <p className="text-slate-600">{subtitle}</p>
        </div>
        <div>
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
            <HoverCard>
              <HoverCardTrigger asChild>
                <Link href="/">
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
                  <div className="mt-2 flex items-center gap-1 text-sm font-medium">
                    <p className="text-[#e1b634]">{course.ratings}</p>
                    <CustomRating value={course.ratings} />
                    <p className="text-slate-600">({course.totalRatings})</p>
                  </div>
                  <p className="mt-2 text-xl font-bold">
                    {course.price.currencySymbol}
                    {course.price.amount}
                  </p>
                </Link>
              </HoverCardTrigger>
              <HoverCardContent
                className="relative after:absolute after:top-1/2 after:h-6 after:w-6 after:-translate-y-1/2 after:rotate-[135deg] after:bg-popover data-[side=left]:after:-right-3 data-[side=right]:after:-left-3 data-[side=left]:after:border-l data-[side=left]:after:border-t data-[side=right]:after:border-b data-[side=right]:after:border-r "
                sideOffset={4}
              >
                <h2 className="text-xl font-bold">{course.title}</h2>
                <ul className="mt-1 flex list-inside text-sm text-slate-500">
                  <li className="mr-2">{course.contentInfo}</li>
                  <li className="list-disc">{course.instructionLevel}</li>
                </ul>
                <ul className="mt-4 flex list-inside list-disc flex-col gap-2 text-sm text-slate-700">
                  {course.objectives.slice(0, 3).map((objective) => (
                    <li className="" key={objective}>
                      {objective}
                    </li>
                  ))}
                </ul>
                <Button className="mt-3 w-full">Add to Cart</Button>
              </HoverCardContent>
            </HoverCard>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
