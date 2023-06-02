"use client";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import CustomRating from "~/components/rating";

export default function Testimonials() {
  return (
    <div className="my-20 text-center">
      <h2 className="mb-1 text-2xl font-bold">Testimonials</h2>
      <p className="mb-12 text-slate-600">
        Choose a subscription plan and save money
      </p>
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
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop
      >
        {[1, 2, 3, 4, 5].map((courseInfo) => (
          <SwiperSlide className="mb-20 mt-10" key={courseInfo}>
            <div className="relative rounded-lg text-center shadow-lg">
              <div className="mx-auto -mb-16 h-20 w-20 -translate-y-1/2 rounded-full">
                <Image
                  src="https://lms-course.netlify.app/static/media/instructor.38efa4e9104ade8ec36b.png"
                  alt="instructor"
                  height={80}
                  width={80}
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <div className="px-2 py-4">
                <h3 className="mt-10">Rayan Newman</h3>
                <p>Software Engineer</p>

                <div className="mb-2 mt-2 flex justify-center">
                  <CustomRating value={5} />
                </div>

                <p className="mt-6">
                  &quot;We&apos;re loving it. Ustaze is both perfect and highly
                  adaptable.&quot;
                </p>
              </div>
              <div className="h-2 rounded-b-lg bg-gradient-to-r from-green-500 to-green-200" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
