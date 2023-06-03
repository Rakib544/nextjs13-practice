"use client";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import CustomRating from "~/components/rating";
import { Button } from "~/components/ui/button";

function Instructor() {
  return (
    <div className="my-20">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="mb-1 text-xl font-bold lg:text-2xl">Instructors</h2>
          <p className="text-slate-600">
            Learn from the experienced & skillful instructors
          </p>
        </div>
        <div className="shrink-0">
          <Button asChild variant="outline">
            <Link href="">View More</Link>
          </Button>
        </div>
      </div>
      <div className="custom-swiper">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={12}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            992: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop
        >
          {[1, 2, 3, 4, 5, 6, 7].map((courseInfo) => (
            <SwiperSlide className="mb-20 mt-8" key={courseInfo}>
              <div className="rounded-lg p-4 text-center shadow-lg">
                <div className="mx-auto h-32 w-32 rounded-full">
                  <Image
                    src="https://lms-course.netlify.app/static/media/instructor.38efa4e9104ade8ec36b.png"
                    alt="instructor"
                    height={128}
                    width={128}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <h3 className="mb-1 mt-2">Robert Ransdell</h3>
                <p className="mb-3">Software Developer</p>
                <div className="mb-2 flex justify-center">
                  <CustomRating value={5} />
                </div>
                <Button asChild className="mt-2 rounded-full">
                  <Link href="">View Profile</Link>
                </Button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Instructor;
