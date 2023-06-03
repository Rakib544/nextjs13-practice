import { Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CourseCard from "~/components/shared/course-card";
import { Button } from "~/components/ui/button";
import { courseData } from "~/data/course-data";

export default function InstructorProfile() {
  return (
    <div>
      <div className="container my-32">
        <div className="grid grid-cols-2 gap-20">
          <div className="order-2 col-span-2 md:order-1 md:col-span-1 lg:order-1">
            <h3 className="font-medium text-muted-foreground">INSTRUCTOR</h3>
            <h1 className="w-100 pb-2 text-2xl font-bold text-black lg:text-3xl">
              Colt Steele
            </h1>
            <p className="pb-3 font-bold text-black">
              Developer and Bootcamp Instructor
            </p>
            <div className="mt-4 flex gap-5">
              <div>
                <p className="font-medium">Total students</p>
                <p className="w-100 font-bold text-black md:w-2/3">1,501,793</p>
              </div>
              <div>
                <p className="font-medium">Reviews</p>
                <p className="w-100 font-bold text-black md:w-2/3">463,637</p>
              </div>
            </div>
            <div className="mt-10">
              <h3 className="w-100 font-bold text-black md:w-2/3">About me</h3>
              <p className="my-1 text-muted-foreground">
                Ustaze is a fully-featured educational platform that helps
                instructors to create and publish video courses, live classes,
                and text courses and earn money, and helps students to learn in
                the easiest way.
              </p>
            </div>
            <div className="w-100 mt-8 font-bold text-black md:w-2/3">
              <h3>My Courses (25)</h3>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-5">
              {courseData.map((course) => (
                <div className="col-span-2 md:col-span-1" key={course.id}>
                  <CourseCard course={course} />
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 col-span-2 mx-auto mt-5 md:order-1 md:col-span-1 lg:order-2">
            <div className="mx-auto h-48 w-48 rounded-full">
              <Image
                src="https://lms-course.netlify.app/static/media/instructor.38efa4e9104ade8ec36b.png"
                height={600}
                width={600}
                alt="The Future of Energy"
                className="h-full w-full rounded-full object-cover object-center"
              />
            </div>
            <div className="mt-5 flex flex-col gap-y-3">
              <div>
                <Button asChild variant="outline" className="w-[265px]">
                  <Link href="" className="flex items-center">
                    <Link2 className="mr-1 h-5 w-5" /> Website
                  </Link>
                </Button>
              </div>
              <div>
                <Button asChild variant="outline" className="w-[265px]">
                  <Link href="" className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="mr-1 h-5 w-5"
                    >
                      <path d="M22.2125 5.65605C21.4491 5.99375 20.6395 6.21555 19.8106 6.31411C20.6839 5.79132 21.3374 4.9689 21.6493 4.00005C20.8287 4.48761 19.9305 4.83077 18.9938 5.01461C18.2031 4.17106 17.098 3.69303 15.9418 3.69434C13.6326 3.69434 11.7597 5.56661 11.7597 7.87683C11.7597 8.20458 11.7973 8.52242 11.8676 8.82909C8.39047 8.65404 5.31007 6.99005 3.24678 4.45941C2.87529 5.09767 2.68005 5.82318 2.68104 6.56167C2.68104 8.01259 3.4196 9.29324 4.54149 10.043C3.87737 10.022 3.22788 9.84264 2.64718 9.51973C2.64654 9.5373 2.64654 9.55487 2.64654 9.57148C2.64654 11.5984 4.08819 13.2892 6.00199 13.6731C5.6428 13.7703 5.27232 13.8194 4.90022 13.8191C4.62997 13.8191 4.36771 13.7942 4.11279 13.7453C4.64531 15.4065 6.18886 16.6159 8.0196 16.6491C6.53813 17.8118 4.70869 18.4426 2.82543 18.4399C2.49212 18.4402 2.15909 18.4205 1.82812 18.3811C3.74004 19.6102 5.96552 20.2625 8.23842 20.2601C15.9316 20.2601 20.138 13.8875 20.138 8.36111C20.138 8.1803 20.1336 7.99886 20.1256 7.81997C20.9443 7.22845 21.651 6.49567 22.2125 5.65605Z"></path>
                    </svg>
                    Twitter
                  </Link>
                </Button>
              </div>
              <div>
                <Button asChild variant="outline" className="w-[265px]">
                  <Link href="" className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="mr-1 h-5 w-5"
                    >
                      <path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path>
                    </svg>
                    Linkedin
                  </Link>
                </Button>
              </div>
              <div>
                <Button asChild variant="outline" className="w-[265px]">
                  <Link href="" className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="mr-1 h-5 w-5"
                    >
                      <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"></path>
                    </svg>{" "}
                    Facebook
                  </Link>
                </Button>
              </div>
              <div>
                <Button asChild variant="outline" className="w-[265px]">
                  <Link href="" className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="mr-1 h-5 w-5"
                    >
                      <path d="M12.2439 4C12.778 4.00294 14.1143 4.01586 15.5341 4.07273L16.0375 4.09468C17.467 4.16236 18.8953 4.27798 19.6037 4.4755C20.5486 4.74095 21.2913 5.5155 21.5423 6.49732C21.942 8.05641 21.992 11.0994 21.9982 11.8358L21.9991 11.9884L21.9991 11.9991C21.9991 11.9991 21.9991 12.0028 21.9991 12.0099L21.9982 12.1625C21.992 12.8989 21.942 15.9419 21.5423 17.501C21.2878 18.4864 20.5451 19.261 19.6037 19.5228C18.8953 19.7203 17.467 19.8359 16.0375 19.9036L15.5341 19.9255C14.1143 19.9824 12.778 19.9953 12.2439 19.9983L12.0095 19.9991L11.9991 19.9991C11.9991 19.9991 11.9956 19.9991 11.9887 19.9991L11.7545 19.9983C10.6241 19.9921 5.89772 19.941 4.39451 19.5228C3.4496 19.2573 2.70692 18.4828 2.45587 17.501C2.0562 15.9419 2.00624 12.8989 2 12.1625V11.8358C2.00624 11.0994 2.0562 8.05641 2.45587 6.49732C2.7104 5.51186 3.45308 4.73732 4.39451 4.4755C5.89772 4.05723 10.6241 4.00622 11.7545 4H12.2439ZM9.99911 8.49914V15.4991L15.9991 11.9991L9.99911 8.49914Z"></path>
                    </svg>
                    Youtube
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
