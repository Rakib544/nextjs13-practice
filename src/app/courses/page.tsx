import CourseCard from "~/components/shared/course-card";
import { Checkbox } from "~/components/ui/checkbox";
import { courseData } from "~/data/course-data";

export default function Courses() {
  return (
    <div className="z-10 my-32 px-6">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 flex flex-col gap-y-6 lg:col-span-3">
          <h2 className="mb-4 text-xl font-semibold">Filter By</h2>
          <div className="flex flex-col gap-y-3">
            <h2 className="font-semibold">Level</h2>
            <div className="items-top flex space-x-2">
              <Checkbox id="beginner" />
              <label
                htmlFor="beginner"
                className="text font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Beginner
              </label>
            </div>
            <div className="items-top flex space-x-2">
              <Checkbox id="intermediate" />
              <label
                htmlFor="intermediate"
                className="text font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Intermediate
              </label>
            </div>
            <div className="items-top flex space-x-2">
              <Checkbox id="advanced" />
              <label
                htmlFor="advanced"
                className="text font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Advanced
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-y-3">
            <h2 className="font-semibold">Duration</h2>
            <div className="items-top flex space-x-2">
              <Checkbox id="lessThanTwoHour" />
              <label
                htmlFor="beginner"
                className="text font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Less than 2 hour
              </label>
            </div>
            <div className="items-top flex space-x-2">
              <Checkbox id="oneToFourWeek" />
              <label
                htmlFor="oneToFourWeek"
                className="text font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                1 to 4 week
              </label>
            </div>
            <div className="items-top flex space-x-2">
              <Checkbox id="oneToThreeMonth" />
              <label
                htmlFor="oneToThreeMonth"
                className="text font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                1 to 3 month
              </label>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-9">
          <div className="grid grid-cols-12 gap-4">
            {courseData.map((course) => (
              <div
                key={Math.random().toString()}
                className="col-span-12 block  md:col-span-6 lg:col-span-4"
              >
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
