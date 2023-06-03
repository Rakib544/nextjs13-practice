import Image from "next/image";
import Link from "next/link";
import CustomRating from "~/components/rating";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Checkbox } from "~/components/ui/checkbox";
import { Input } from "~/components/ui/input";

const instructorsData = [
  {
    id: 1,
    name: "John Doe",
    profession: "Software Engineer",
    rating: 4.9,
    image:
      "https://lms-course.netlify.app/static/media/instructor.38efa4e9104ade8ec36b.png",
  },
  {
    id: 2,
    name: "John Cena",
    profession: "Software Engineer",
    rating: 4.9,
    image:
      "https://lms-course.netlify.app/static/media/instructor.38efa4e9104ade8ec36b.png",
  },
  {
    id: 3,
    name: "Roman Reings",
    profession: "Wreslter",
    rating: 4.9,
    image:
      "https://lms-course.netlify.app/static/media/instructor.38efa4e9104ade8ec36b.png",
  },

  {
    id: 4,
    name: "Rakib",
    profession: "Software Engineer",
    rating: 4.9,
    image:
      "https://lms-course.netlify.app/static/media/instructor.38efa4e9104ade8ec36b.png",
  },
  {
    id: 5,
    name: "Borhan Uddin",
    profession: "Software Engineer",
    rating: 4.9,
    image:
      "https://lms-course.netlify.app/static/media/instructor.38efa4e9104ade8ec36b.png",
  },
  {
    id: 6,
    name: "John Does brother",
    profession: "Software Engineer",
    rating: 4,
    image:
      "https://lms-course.netlify.app/static/media/instructor.38efa4e9104ade8ec36b.png",
  },
  {
    id: 1,
    name: "Rohit Sharma",
    profession: "Software Engineer",
    rating: 4.9,
    image:
      "https://lms-course.netlify.app/static/media/instructor.38efa4e9104ade8ec36b.png",
  },
];

export default function Instructors() {
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
                className="font-medium leading-none text-muted-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Beginner
              </label>
            </div>
            <div className="items-top flex space-x-2">
              <Checkbox id="intermediate" />
              <label
                htmlFor="intermediate"
                className="font-medium leading-none text-muted-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Intermediate
              </label>
            </div>
            <div className="items-top flex space-x-2">
              <Checkbox id="advanced" />
              <label
                htmlFor="advanced"
                className="font-medium leading-none text-muted-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
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
                className="font-medium leading-none text-muted-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Less than 2 hour
              </label>
            </div>
            <div className="items-top flex space-x-2">
              <Checkbox id="oneToFourWeek" />
              <label
                htmlFor="oneToFourWeek"
                className="font-medium leading-none text-muted-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                1 to 4 week
              </label>
            </div>
            <div className="items-top flex space-x-2">
              <Checkbox id="oneToThreeMonth" />
              <label
                htmlFor="oneToThreeMonth"
                className="font-medium leading-none text-muted-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                1 to 3 month
              </label>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-9">
          <Input
            type="search"
            className="mb-6 max-w-xl"
            placeholder="Search instructors here..."
          />
          <div className="grid grid-cols-12 gap-4">
            {instructorsData.map((instructor) => (
              <div
                key={Math.random().toString()}
                className="col-span-12 block  md:col-span-6 lg:col-span-4"
              >
                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 h-32 w-32 rounded-full">
                      <Image
                        src={instructor.image}
                        alt={instructor.name}
                        height={128}
                        width={128}
                        className="h-full w-full rounded-full object-cover"
                      />
                    </div>
                    <CardTitle>{instructor.name}</CardTitle>
                    <CardDescription>{instructor.profession}</CardDescription>
                  </CardHeader>
                  <CardDescription>
                    <div className="mb-2 flex justify-center">
                      <CustomRating value={instructor.rating} />
                    </div>
                  </CardDescription>
                  <CardFooter>
                    <Button asChild className="mt-2 w-full">
                      <Link href="/instructor/1">View Profile</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
