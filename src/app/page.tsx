import BannerImage from "~/components/banner-img";
import SearchBox from "~/components/search-box";
import { courseData } from "~/data/course-data";
import BecomeAnInstructor from "~/sections/become-an-instructor";
import Courses from "~/sections/courses";
import FindTheBestInstructor from "~/sections/find-the-best-instructor";
import HaveAnyQuestion from "~/sections/have-any-question";
import Instructor from "~/sections/instructors";
import Testimonials from "~/sections/testimonials";

export default async function Home() {
  return (
    <div className="container z-10">
      <div
        style={{
          backgroundImage: `url(https://lms-course.netlify.app/static/media/banner-bg.41b0e580ed026d2e594f.png)`,
        }}
        className="bg-cover bg-center bg-no-repeat py-4"
      >
        <div className="grid grid-cols-2 items-center gap-10 ">
          <div className="order-2 col-span-2 md:order-1 md:col-span-1">
            <h1 className="w-100 text-4xl font-bold md:w-2/3">
              Joy of learning & teaching
            </h1>
            <p className="my-3 text-lg">
              Ustaze is a fully-featured educational platform that helps
              instructors to create and publish video courses, live classes, and
              text courses and earn money, and helps students to learn in the
              easiest way.
            </p>
            <SearchBox />
          </div>
          <div className="order-1 col-span-2 md:order-2 md:col-span-1">
            <BannerImage />
          </div>
        </div>
      </div>
      <div className="my-20">
        <div className="grid grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((info) => (
            <div className="col-span-4 sm:col-span-2 lg:col-span-1" key={info}>
              <div className="group rounded-xl px-2 py-8 text-center shadow-lg transition duration-500 hover:-translate-y-3 hover:bg-[#1F3B64]">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-lg bg-sky-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="43.358"
                    height="56.005"
                    fill="#fff"
                    viewBox="0 0 43.358 56.005"
                  >
                    <g transform="translate(-13 -1)">
                      <path
                        d="M29 23h5.42v1.807H29z"
                        className="cls-1"
                        data-name="Path 99"
                        transform="translate(-1.547 -2.127)"
                      />
                      <path
                        d="M53.648 24.486h-.9v-2.71a2.71 2.71 0 00-5.42 0v2.876a2.706 2.706 0 00-1.809 2.548v2.116a4.488 4.488 0 001.323 3.194l.419.419-.687 4.118a17.17 17.17 0 00-12.058-9.707l-.361-1.443a6.332 6.332 0 004.065-5.022h.072a3.608 3.608 0 003.01-5.606l.288-1.152A10.551 10.551 0 0031.351 1h-2.377a10.551 10.551 0 00-10.238 13.115l.288 1.153a3.607 3.607 0 003.009 5.6h.072a6.333 6.333 0 004.065 5.022l-.357 1.425A15.7 15.7 0 0013 42.681v4.387A9.948 9.948 0 0022.936 57h8.13a3.609 3.609 0 003.554-3.026 9.8 9.8 0 013.316-.587h3.97v-2.016l1.259 1.51a6.44 6.44 0 0011.387-4.123V32.989l.483-.483a4.488 4.488 0 001.323-3.194V27.2a2.713 2.713 0 00-2.71-2.71zm-3.613-3.613a.9.9 0 01.9.9v2.876a2.7 2.7 0 00-.9.538 2.685 2.685 0 00-.9-.538v-2.873a.9.9 0 01.9-.903zM30.948 49.778a2.579 2.579 0 00-4.767-.381l-.19.381H23.84v-9.033H26a9.813 9.813 0 015.063 1.407v7.626zM28.5 30.082l-2.463 1.97-1.074-2.686a13.875 13.875 0 011.459-.324zm1.446 5.244h.444l1.486 5.2a11.611 11.611 0 00-3.061-1.24zm.566-1.807h-.69l-.779-1.557 1.124-.9 1.124.9zm1.322-3.437l2.066-1.034c.493.1.976.222 1.452.365l-1.056 2.639zm4.656-14.629a1.807 1.807 0 11-1.807-1.807 1.808 1.808 0 011.803 1.807zm1.807 3.613v-3.613a1.807 1.807 0 110 3.613zM28.975 2.807h2.377a8.75 8.75 0 018.486 10.871l-.072.29a3.575 3.575 0 00-1.473-.322h-.044a4.51 4.51 0 00-3.911-4l-.477-.06a3.2 3.2 0 01-2.795-3.166h-1.807a5 5 0 004.376 4.957l.477.06a2.694 2.694 0 011.194.465 3.677 3.677 0 00-.627-.062 3.608 3.608 0 00-3.485 2.71h-2.063a3.568 3.568 0 00-5.249-2.231 2.7 2.7 0 012.574-2.276 6.983 6.983 0 002.3 2.549l1-1.5a5.172 5.172 0 01-2.307-4.311V6.42h-1.803v.357a7.014 7.014 0 00.176 1.523 4.512 4.512 0 00-3.789 4.442v.9a3.575 3.575 0 00-1.473.322l-.072-.29a8.75 8.75 0 018.487-10.867zm-3.329 10.84a1.807 1.807 0 11-1.807 1.807 1.808 1.808 0 011.807-1.808zm-5.42 3.613a1.808 1.808 0 011.807-1.807v3.613a1.808 1.808 0 01-1.807-1.807zm3.613 2.71v-1.406a3.571 3.571 0 005.292-2.208h2.063a3.571 3.571 0 005.292 2.208v1.406a4.522 4.522 0 01-4.516 4.516h-3.614a4.522 4.522 0 01-4.516-4.516zm4.516 6.323h3.613c.141 0 .28-.012.418-.021l.336 1.343-2.559 1.285-2.563-1.285.336-1.343c.14.009.279.02.42.02zM14.807 47.068v-4.387A13.9 13.9 0 0123.25 29.96l2.011 5.026 2.339-1.869.7 1.4-1.279 4.476c-.337-.03-.674-.05-1.014-.05h-3.97v10.669a2.706 2.706 0 01-1.807-2.544v-9.936h-1.81v9.936a4.522 4.522 0 004.516 4.516h2.71V55.2h-2.71a8.138 8.138 0 01-8.129-8.132zM31.066 55.2h-3.613v-4.3l.345-.69a.772.772 0 011.462.345v1.035h1.807a1.807 1.807 0 110 3.613zm9.034-3.615h-2.164a11.579 11.579 0 00-3.5.54 3.611 3.611 0 00-1.565-1.845v-8.128a9.815 9.815 0 015.063-1.407H40.1zm8.013 1.807a4.621 4.621 0 01-3.559-1.667l-2.648-3.177v-9.609h-3.97a11.626 11.626 0 00-4.394.864l-1.511-5.291.7-1.4 2.337 1.869 1.98-4.949a15.383 15.383 0 018.649 9.813l.263.893-1.331 7.984 1.782.3 2.584-15.5h3.751v15.24a4.638 4.638 0 01-4.633 4.633zm5.646-22.162l-.483.483H48.6l-.483-.483a2.7 2.7 0 01-.794-1.917V27.2a.9.9 0 111.807 0 2.713 2.713 0 002.71 2.71h2.646a2.7 2.7 0 01-.728 1.319zm.794-3.13h-2.71a.9.9 0 010-1.807h1.807a.9.9 0 01.9.9z"
                        className="cls-1"
                        data-name="Path 100"
                      />
                    </g>
                  </svg>
                </div>
                <strong className="mt-2 block text-4xl font-normal transition duration-500 group-hover:text-white">
                  7
                </strong>
                <h3 className="transition duration-500 group-hover:text-white">
                  Skillful Instructor
                </h3>
                <p className="transition duration-500 group-hover:text-white">
                  Start learning from experienced instructor
                </p>
              </div>
            </div>
          ))}
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
          className="absolute top-1/2 h-72 w-full -translate-y-1/2 bg-slate-800"
          style={{ zIndex: "-1" }}
        />
        <div>
          <div
            style={{
              backgroundImage: `url(https://lms-course.netlify.app/static/media/home_video_section.8decfc5175a78a334abf.png)`,
            }}
            className="flex flex-col items-center justify-center rounded-2xl bg-cover bg-center bg-no-repeat pb-24 pt-48"
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
