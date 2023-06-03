import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function BecomeAnInstructor() {
  return (
    <div className="my-20">
      <div className="grid grid-cols-2 items-center gap-4">
        <div className="order-2 col-span-2 md:order-1 md:col-span-1">
          <h2 className="text-2xl font-bold">Become an instructor</h2>
          <p className="mb-8 mt-2 text-slate-600">
            Are you interested to be a part of our community? You can be a part
            of our community by signing up as an instructor or organization.
          </p>
          <div
            className="mt-12 flex gap-3"
            style={{ marginTop: "15px", gap: "10px" }}
          >
            <div>
              <Button asChild>
                <Link href="">Become and Instructor</Link>
              </Button>
            </div>
            {/* <div>
              <Button asChild variant="outline">
                <Link href="">Registration Packages</Link>
              </Button>
            </div> */}
          </div>
        </div>
        <div className="order-1 col-span-2 md:order-2 md:col-span-1">
          <div className="relative">
            <Image
              src="https://lms-course.netlify.app/static/media/become_instructor_banner.2888ca953ff4e54a8667.jpg"
              width={320}
              height={550}
              alt="become an instructor"
              className="md:max-w-100 max-h-72 w-full max-w-[500px] rounded-bl rounded-br-2xl rounded-tl-2xl rounded-tr md:max-h-[750px] lg:w-[400px]"
            />
            <div className="animation-hero-bounce absolute -right-0 bottom-12 rounded  md:right-16">
              <div className="flex items-center gap-2 rounded-lg bg-white px-2 py-3 shadow-sm">
                <div className="h-14 w-14">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    className="h-full w-full"
                    enableBackground="new 0 0 512 512"
                    viewBox="0 0 510 510"
                  >
                    <linearGradient xmlns="http://www.w3.org/2000/svg" id="lg1">
                      <stop offset="0" stopColor="#7faef4" />
                      <stop offset="1" stopColor="#4c8df1" />
                    </linearGradient>
                    <linearGradient
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      id="SVGID_1_"
                      x1="72.017"
                      x2="448.659"
                      y1="30.771"
                      y2="407.412"
                      gradientUnits="userSpaceOnUse"
                      xlinkHref="#lg1"
                    />
                    <linearGradient
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      id="SVGID_2_"
                      x1="393.324"
                      x2="118.808"
                      y1="393.324"
                      y2="118.808"
                      gradientUnits="userSpaceOnUse"
                      xlinkHref="#lg1"
                    />
                    <linearGradient
                      xmlns="http://www.w3.org/2000/svg"
                      id="SVGID_3_"
                      x1="220.253"
                      x2="342.575"
                      y1="220.253"
                      y2="342.575"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#4166bf" />
                      <stop offset="1" stopColor="#4256ac" />
                    </linearGradient>
                    <linearGradient
                      xmlns="http://www.w3.org/2000/svg"
                      id="SVGID_4_"
                      x1="368.352"
                      x2="227.221"
                      y1="309.634"
                      y2="168.502"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#4256ac" stopOpacity="0" />
                      <stop offset="1" stopColor="#1b1464" />
                    </linearGradient>
                    <linearGradient xmlns="http://www.w3.org/2000/svg" id="lg2">
                      <stop offset="0" stopColor="#ebeff0" />
                      <stop offset="1" stopColor="#e3e5e4" />
                    </linearGradient>
                    <linearGradient
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      id="SVGID_5_"
                      x1="51.502"
                      x2="399.05"
                      y1="-7.217"
                      y2="340.331"
                      gradientUnits="userSpaceOnUse"
                      xlinkHref="#lg2"
                    />
                    <linearGradient
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      id="SVGID_6_"
                      x1="232.637"
                      x2="276.114"
                      y1="303.885"
                      y2="381.967"
                      gradientUnits="userSpaceOnUse"
                      xlinkHref="#lg2"
                    />
                    <g xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill="url(#SVGID_1_)"
                        d="M239.907 2.943C201.352 18.568 112.032 56.305 68.065 65.347c-9.715 1.998-16.648 10.61-16.648 20.528v127.182c0 99.733 44.909 194.164 122.273 257.105l23.878 19.426c33.451 27.215 81.411 27.215 114.863 0l23.878-19.426c77.364-62.941 122.273-157.376 122.273-257.109V85.875c0-9.918-6.933-18.53-16.648-20.528-43.967-9.042-133.287-46.779-171.841-62.404a40.173 40.173 0 00-30.186 0z"
                        data-original="url(#SVGID_1_)"
                      />
                      <circle
                        cx="255"
                        cy="255"
                        r="169.321"
                        fill="url(#SVGID_2_)"
                        data-original="url(#SVGID_2_)"
                      />
                      <path
                        fill="url(#SVGID_3_)"
                        d="M405.238 255c0 45.321-20.067 85.954-51.801 113.5-26.365 22.886-60.783 22.738-98.437 22.738-37.275 0-71.379.426-97.639-22.05-32.195-27.555-52.599-68.489-52.599-114.188 0-82.974 67.264-150.238 150.238-150.238S405.238 172.026 405.238 255z"
                        data-original="url(#SVGID_3_)"
                      />
                      <path
                        fill="url(#SVGID_4_)"
                        d="M255.332 127.937c-38.909 0-68.676 29.767-68.676 68.676 0 20.788 7.232 39.467 21.552 52.363l121.193 121.193c5.079-3.425 19.423 2.333 24.035-1.67 31.734-27.546 51.802-68.178 51.802-113.499 0-2.749-.079-5.48-.225-8.193l-97.318-97.318c-12.896-14.32-31.575-21.552-52.363-21.552z"
                        data-original="url(#SVGID_4_)"
                      />
                      <circle
                        cx="255"
                        cy="196.281"
                        r="70.452"
                        fill="url(#SVGID_5_)"
                        data-original="url(#SVGID_5_)"
                      />
                      <path
                        fill="url(#SVGID_6_)"
                        d="M348.476 315.4c19.076 12.239 20.97 39.524 3.686 54.185l-.598.505c-26.113 21.943-59.795 35.145-96.564 35.145-37.133 0-71.107-13.469-97.327-35.793l-.306-.261c-17.185-14.694-15.152-41.941 3.917-54.088 26.972-17.181 59.001-27.131 93.351-27.131 34.573 0 66.77 10.069 93.841 27.438z"
                        data-original="url(#SVGID_6_)"
                      />
                    </g>
                  </svg>
                </div>
                <div className="">
                  <span className="block text-sm">Become an instructor</span>
                  <span className="block text-xs">
                    Start earning right now...
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
