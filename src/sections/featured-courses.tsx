"use client";

import Image from "next/image";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

export default function FeaturedCourses() {
  return (
    <div className="container my-20">
      <div>
        <h2 className="font-bold">Featured Courses</h2>
        <p>#Browse featured courses and become skillful</p>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            992: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            1200: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop
        >
          {[1, 2, 3, 4]?.map((courseInfo) => (
            <SwiperSlide className="mb-20 mt-8" key={courseInfo}>
              <div
                className="rounded-lg bg-cover p-6"
                style={{
                  backgroundImage: `url(https://lms-course.netlify.app/static/media/excel-from-beginner-to-advanced.d3bc28bb1bf7eaba375d.jpg)`,
                }}
              >
                <div className="w-full rounded-lg bg-white p-4 md:w-2/3 lg:w-2/5">
                  <div className="bg-white">
                    <h3 className="mb-3 text-lg">
                      Excel from beginner to advance
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded-full">
                        <Image
                          src="https://lms-course.netlify.app/static/media/instructor.38efa4e9104ade8ec36b.png"
                          alt="user"
                          className="h-full w-full rounded-full object-cover object-center"
                          height={40}
                          width={40}
                        />
                      </div>
                      <p>Robert Loe</p>
                    </div>
                    <p className="mb-2 mt-6">
                      Microsoft Excel is a spreadsheet developed by Microsoft
                      for Windows, macOS, Android and iOS. It features
                      calculation, graphing tools, pivot tables, and a macro
                      programming language called Visual Basic for Applications
                      (VBA).
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="my-3 grid grid-cols-6 divide-x-2">
                        <div className="col-span-3 flex items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="feather feather-clock webinar-icon"
                            viewBox="0 0 24 24"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 6L12 12 16 14" />
                          </svg>{" "}
                          <span className="text-sm text-secondary">
                            1:30 Hours
                          </span>
                        </div>
                        <div className="col-span-3">
                          <div className="flex items-center gap-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              className="feather feather-calendar webinar-icon"
                              viewBox="0 0 24 24"
                            >
                              <rect
                                width="18"
                                height="18"
                                x="3"
                                y="4"
                                rx="2"
                                ry="2"
                              />
                              <path d="M16 2L16 6" />
                              <path d="M8 2L8 6" />
                              <path d="M3 10L21 10" />
                            </svg>
                            <span className="text-sm text-secondary">
                              30 January 2022
                            </span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <span className="text-md bg-green inline-block rounded-lg px-3 py-2 text-white">
                          $100
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
