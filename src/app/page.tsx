import {
  Check,
  PlayCircle,
  TrophyIcon,
  Tv,
  UserPlus2,
  Video,
} from "lucide-react";
import { getServerSession } from "next-auth";
import Link from "next/link";
import BannerImage from "~/components/banner-img";
import { Button } from "~/components/ui/button";
// import SearchBox from "~/components/search-box";
import { courseData } from "~/data/course-data";
import { authOptions } from "~/lib/auth";
import BecomeAnInstructor from "~/sections/home/become-an-instructor";
import Courses from "~/sections/home/courses";
import FindTheBestInstructor from "~/sections/home/find-the-best-instructor";
import HaveAnyQuestion from "~/sections/home/have-any-question";
import Instructor from "~/sections/home/instructors";
import Testimonials from "~/sections/home/testimonials";

export default async function Home() {
  const data = await getServerSession(authOptions);
  console.log({ data });

  return (
    <div className="container z-10 pt-4">
      <div
        style={{
          backgroundImage: `url(https://lms-course.netlify.app/static/media/banner-bg.41b0e580ed026d2e594f.png)`,
        }}
        className="bg-cover bg-center bg-no-repeat py-4"
      >
        <div className="grid grid-cols-2 items-center gap-10 ">
          <div className="order-2 col-span-2 md:order-1 md:col-span-1">
            <p className="mb-3 inline-flex items-center gap-x-1 text-sm font-medium">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-green-200 bg-green-100">
                <Check className="h-4 w-4 text-green-700" />
              </span>
              Most Trusted Education Platform
            </p>
            <h1 className="w-100 text-3xl font-bold md:w-2/3 lg:text-4xl">
              Joy of learning & teaching
            </h1>
            <p className="my-3 text-muted-foreground">
              Ustaze is a fully-featured educational platform that helps
              instructors to create and publish video courses, live classes, and
              text courses and earn money, and helps students to learn in the
              easiest way.
            </p>
            {/* <SearchBox /> */}
            <div className="mt-4 flex gap-x-3">
              <Button asChild>
                <Link href="/auth/signup">Join Free Now</Link>
              </Button>
              <Button variant="outline">
                <PlayCircle className="mr-1 h-4 w-4" />
                Watch Demo
              </Button>
            </div>
          </div>
          <div className="order-1 col-span-2 md:order-2 md:col-span-1">
            <BannerImage />
          </div>
        </div>
      </div>
      <div className="mb-24 mt-16">
        <div className="grid grid-cols-4 gap-x-8 gap-y-4">
          <div className="col-span-4 border-0 sm:col-span-2 lg:col-span-1 lg:border-r">
            <div className="px-2 py-8 text-center">
              <TrophyIcon className="mx-auto mb-2 h-10 w-10 text-yellow-500" />
              <p className="mb-2 mt-2 block text-2xl font-bold">10,000+</p>
              <p className="text-muted-foreground">Skillful Instructor</p>
            </div>
          </div>
          <div className="col-span-4 border-0 sm:col-span-2 lg:col-span-1 lg:border-r">
            <div className="px-2 py-8 text-center">
              <UserPlus2 className="mx-auto mb-2 h-10 w-10 text-sky-500" />
              <p className="mb-2 mt-2 block text-2xl font-bold">1.8 Million+</p>
              <p className="text-muted-foreground">Course Enrollments</p>
            </div>
          </div>
          <div className="col-span-4 border-0 sm:col-span-2 lg:col-span-1 lg:border-r">
            <div className="px-2 py-8 text-center">
              <Tv className="mx-auto mb-2 h-10 w-10 text-indigo-500" />
              <p className="mb-2 mt-2 block text-2xl font-bold">21,000+</p>
              <p className="text-muted-foreground">Courses</p>
            </div>
          </div>
          <div className="col-span-4 sm:col-span-2 lg:col-span-1">
            <div className="px-2 py-8 text-center">
              <Video className="mx-auto mb-2 h-10 w-10 text-green-500" />
              <p className="mb-2 mt-2 block text-2xl font-bold">197,000+</p>
              <p className="text-muted-foreground">Online Videos</p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-20">
        <Courses
          title="Latest Bundles"
          subtitle="Subtitles goes here"
          courses={courseData}
          viewMoreURL="/courses"
        />
      </div>
      <div className="my-20">
        <Courses
          title="Best Rated Courses"
          subtitle="Enjoy high quality and best rated content"
          courses={courseData}
          viewMoreURL="/courses"
        />
      </div>
      <div className="my-20">
        <Courses
          title="Bestselling Courses"
          subtitle="#Learn from bestselling courses"
          courses={courseData}
          viewMoreURL="/courses"
        />
      </div>
      <div className="my-20">
        <Courses
          title="Free Courses"
          subtitle="#Never miss free learning opportunities"
          courses={courseData}
          viewMoreURL="/courses"
        />
      </div>
      <div className="my-20">
        <Courses
          title="Discounted Courses"
          subtitle="#Get courses at the latest price"
          courses={courseData}
          viewMoreURL="/courses"
        />
      </div>
      <BecomeAnInstructor />
      <HaveAnyQuestion />
      <FindTheBestInstructor />
      <Instructor />
      <Testimonials />
      <div className="relative">
        <div
          className="h-30 absolute top-1/2 w-full -translate-y-1/2 bg-slate-800 lg:h-72"
          style={{ zIndex: "-1" }}
        />
        <div>
          <div
            style={{
              backgroundImage: `url(https://lms-course.netlify.app/static/media/home_video_section.8decfc5175a78a334abf.png)`,
            }}
            className="flex flex-col items-center justify-center rounded-2xl bg-cover bg-center bg-no-repeat pb-16 pt-40 lg:pb-24 lg:pt-48"
          >
            <button className="home-video-play-button relative flex h-36 w-36 items-center justify-center rounded-full bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="feather feather-play"
                viewBox="0 0 24 24"
              >
                <path d="M5 3L19 12 5 21 5 3z" />
              </svg>
            </button>
            <div className="pt-3 text-center">
              <h2 className="text-2xl font-bold text-white">
                Start learning anywhere, anytime...
              </h2>
              <p className="mt-3 text-white">
                Use Ustaze to access high-quality education materials without
                any limitations in the easiest way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
