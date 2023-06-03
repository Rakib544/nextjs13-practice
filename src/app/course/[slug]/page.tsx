import Image from "next/image";
import Link from "next/link";
import CustomRating from "~/components/rating";
import CourseCard from "~/components/shared/course-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Button } from "~/components/ui/button";
import { courseData } from "~/data/course-data";

export default function CourseDetails() {
  return (
    <div className="z-10 my-20">
      <div className="bg-[#0a2540]">
        <div className="container py-20 lg:py-24">
          <div className="max-w-xl">
            <h1 className="text-2xl font-bold text-white lg:text-3xl">
              The Complete Python Bootcamp From Zero to Hero in Python
            </h1>
            <p className="mt-3 text-slate-100">
              Learn Python like a Professional Start from the basics and go all
              the way to creating your own applications and games
            </p>
            <div className="my-3 flex items-center gap-2 text-sm text-white">
              <span>4.6</span>
              <span>
                <CustomRating value={5} />
              </span>
              <span>(462,590 ratings)</span>
              <span>1,718,662 students</span>
            </div>
            <p className="text-sm font-medium text-white">
              Created By -{" "}
              <Link href="/instructor/rakib" className="underline">
                Rakib
              </Link>
            </p>
            <p className="mt-3 text-sm text-white">
              Last Update - {new Date().toDateString()}
            </p>
          </div>
        </div>
      </div>
      <div className="container my-12">
        <div className="grid grid-cols-12 gap-4">
          <div className="order-2 col-span-12 lg:order-1 lg:col-span-8">
            <div className="rounded border bg-[#F7FAFD] p-4">
              <h3 className="font-bold">What you will learn</h3>
              <ul className="mt-4 flex list-inside list-disc flex-col gap-1 text-sm text-slate-500">
                <li>
                  You will learn how to leverage the power of Python to solve
                  tasks.
                </li>
                <li>
                  You will be able to use Python for your own work problems or
                  personal projects.
                </li>
                <li>
                  Learn to use Python professionally, learning both Python 2 and
                  Python 3!
                </li>
                <li>
                  You will build games and programs that use Python libraries.
                </li>
                <li>
                  You will create a portfolio of Python based projects you can
                  share.
                </li>
              </ul>
            </div>
            <div className="my-12">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is it styled?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It comes with default styles that matches the other
                    components aesthetic.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is it animated?</AccordionTrigger>
                  <AccordionContent>
                    Yes. Its animated by default, but you can disable it if you
                    prefer.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="my-12">
              <h3 className="font-bold">Requirements</h3>
              <ul className="mt-3 flex list-inside list-disc flex-col gap-1 text-sm text-slate-500">
                <li>Access to a computer with an internet connection.</li>
              </ul>
            </div>
            <div className="my-12">
              <h3 className="font-bold">Description</h3>
              <p className="my-3">
                Become a Python Programmer and learn one of employer&apos;s most
                requested skills of 2023! This is the most comprehensive, yet
                straight-forward, course for the Python programming language on
                Udemy! Whether you have never programmed before, already know
                basic syntax, or want to learn about the advanced features of
                Python, this course is for you! In this course we will teach you
                Python 3.
              </p>
              <p>
                With over 100 lectures and more than 21 hours of video this
                comprehensive course leaves no stone unturned! This course
                includes quizzes, tests, coding exercises and homework
                assignments as well as 3 major projects to create a Python
                project portfolio!
              </p>
            </div>
            <div className="my-12">
              <h3 className="mb-4 text-xl font-bold lg:text-2xl">
                More Courses by{" "}
                <Link href="/instructor/1" className="hover:underline">
                  Rakib
                </Link>
              </h3>
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
          <div className="order-1 col-span-12 lg:order-2 lg:col-span-4">
            <div className=" -translate-y-24 rounded bg-white shadow-lg lg:-translate-y-96 ">
              <div>
                <Image
                  className="rounded"
                  src="https://lms.rocket-soft.org/store/929/update_1.6.jpg"
                  alt=""
                  width={400}
                  height={400}
                />
              </div>
              <div className="p-4">
                <h2 className="my-3 text-2xl font-bold">$74.99</h2>
                <Button className="w-full">Add To Cart</Button>
                <p className="mb-1 mt-3 text-center">
                  30-Day Money-Back Guarantee
                </p>
                <p className="text-center">Full Lifetime Access</p>

                <div className="my-8">
                  <h3 className="mb-3 font-bold">This course includes:</h3>
                  <div className="flex flex-col gap-1">
                    <p className="flex items-center gap-3">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path d="M9 7v8l7-4zm12-4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"></path>
                      </svg>{" "}
                      <span>22 hours on-demand video</span>
                    </p>
                    <p className="flex items-center gap-3">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 16 16"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z"></path>
                      </svg>{" "}
                      <span>19 coding exercises</span>
                    </p>
                    <p className="flex items-center gap-3">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494zM504 618H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM312 490v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8z"></path>
                      </svg>{" "}
                      <span>14 articles</span>
                    </p>
                    <p className="flex items-center gap-3">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M868 160h-92v-40c0-4.4-3.6-8-8-8H256c-4.4 0-8 3.6-8 8v40h-92a44 44 0 0 0-44 44v148c0 81.7 60 149.6 138.2 162C265.7 630.2 359 721.7 476 734.5v105.2H280c-17.7 0-32 14.3-32 32V904c0 4.4 3.6 8 8 8h512c4.4 0 8-3.6 8-8v-32.3c0-17.7-14.3-32-32-32H548V734.5C665 721.7 758.3 630.2 773.8 514 852 501.6 912 433.7 912 352V204a44 44 0 0 0-44-44zM184 352V232h64v207.6a91.99 91.99 0 0 1-64-87.6zm520 128c0 49.1-19.1 95.4-53.9 130.1-34.8 34.8-81 53.9-130.1 53.9h-16c-49.1 0-95.4-19.1-130.1-53.9-34.8-34.8-53.9-81-53.9-130.1V184h384v296zm136-128c0 41-26.9 75.8-64 87.6V232h64v120z"></path>
                      </svg>{" "}
                      <span>Certificate of completion</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
