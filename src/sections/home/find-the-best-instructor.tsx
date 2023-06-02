import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function FindTheBestInstructor() {
  return (
    <div className="my-20">
      <div className="grid grid-cols-2 items-center gap-4">
        <div className="order-2 col-span-2 md:order-1 md:col-span-1">
          <h2 className="text-2xl font-bold">Find the best instructor</h2>
          <p className="mb-8 mt-2 text-slate-600">
            Looking for an instructor? Find the best instructors according to
            different parameters like gender, skill level, price, meeting type,
            rating, etc. Find instructors on the map.
          </p>
          <div
            className="mt-12 flex gap-3"
            style={{ marginTop: "15px", gap: "10px" }}
          >
            <div>
              <Button asChild>
                <Link href="">Tutor Finder</Link>
              </Button>
            </div>
            <div>
              <Button asChild variant="outline">
                <Link href="">Tutor On Map</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="order-1 col-span-2 md:order-2 md:col-span-1">
          <div className="relative">
            <Image
              src="https://lms-course.netlify.app/static/media/become_instructor_banner.2888ca953ff4e54a8667.jpg"
              width={400}
              height={650}
              alt="become an instructor"
              className="md:max-w-100 max-h-72 max-w-[500px] rounded-bl rounded-br-2xl rounded-tl-2xl rounded-tr md:max-h-[750px]"
            />
            <div className="animation-hero-bounce absolute -right-0 bottom-12 rounded  md:-right-4">
              <div className="flex items-center gap-2 rounded-lg bg-white px-2 py-3 shadow-sm">
                <div className="h-14 w-14">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    className="h-full w-full"
                    enableBackground="new 0 0 512 512"
                    viewBox="0 0 510 510"
                  >
                    <linearGradient
                      xmlns="http://www.w3.org/2000/svg"
                      id="SVGID_1_"
                      x1="131.515"
                      x2="440.582"
                      y1="131.515"
                      y2="440.582"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#18cffc" />
                      <stop offset="1" stopColor="#4a98f7" />
                    </linearGradient>
                    <linearGradient xmlns="http://www.w3.org/2000/svg" id="lg1">
                      <stop offset="0" stopColor="#18cffc" stopOpacity="0" />
                      <stop offset="1" stopColor="#65e1dc" />
                    </linearGradient>
                    <linearGradient
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      id="SVGID_2_"
                      x1="293.974"
                      x2="202.219"
                      y1="535.746"
                      y2="-125.198"
                      gradientUnits="userSpaceOnUse"
                      xlinkHref="#lg1"
                    />
                    <linearGradient
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      id="SVGID_3_"
                      x1="310.055"
                      x2="55.988"
                      y1="310.055"
                      y2="55.988"
                      gradientUnits="userSpaceOnUse"
                      xlinkHref="#lg1"
                    />
                    <linearGradient xmlns="http://www.w3.org/2000/svg" id="lg2">
                      <stop offset="0" stopColor="#0469bc" stopOpacity="0" />
                      <stop offset="1" stopColor="#0469bc" />
                    </linearGradient>
                    <linearGradient
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      id="SVGID_4_"
                      x1="354.277"
                      x2="4.969"
                      y1="348.599"
                      y2="207.078"
                      gradientUnits="userSpaceOnUse"
                      xlinkHref="#lg2"
                    />
                    <linearGradient xmlns="http://www.w3.org/2000/svg" id="lg3">
                      <stop offset="0" stopColor="#92f37f" />
                      <stop offset="1" stopColor="#4ab272" />
                    </linearGradient>
                    <linearGradient
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      id="SVGID_5_"
                      x1="92.947"
                      x2="494.723"
                      y1="268.277"
                      y2="553.355"
                      gradientUnits="userSpaceOnUse"
                      xlinkHref="#lg3"
                    />
                    <linearGradient
                      xmlns="http://www.w3.org/2000/svg"
                      id="SVGID_6_"
                      x1="365.455"
                      x2="139.921"
                      y1="402.371"
                      y2="237.136"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#4ab272" stopOpacity="0" />
                      <stop offset="1" stopColor="#009245" />
                    </linearGradient>
                    <linearGradient
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      id="SVGID_7_"
                      x1="174.893"
                      x2="576.668"
                      y1="152.787"
                      y2="437.864"
                      gradientUnits="userSpaceOnUse"
                      xlinkHref="#lg3"
                    />
                    <linearGradient
                      xmlns="http://www.w3.org/2000/svg"
                      id="SVGID_8_"
                      x1="192.494"
                      x2="78.675"
                      y1="173.743"
                      y2="59.924"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#92f37f" stopOpacity="0" />
                      <stop offset="1" stopColor="#ffee83" />
                    </linearGradient>
                    <linearGradient
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      id="SVGID_9_"
                      x1="394.214"
                      x2="574.262"
                      y1="276.752"
                      y2="308.427"
                      gradientUnits="userSpaceOnUse"
                      xlinkHref="#lg3"
                    />
                    <linearGradient
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      id="SVGID_10_"
                      x1="422.759"
                      x2="602.808"
                      y1="114.496"
                      y2="146.171"
                      gradientUnits="userSpaceOnUse"
                      xlinkHref="#lg3"
                    />
                    <linearGradient
                      xmlns="http://www.w3.org/2000/svg"
                      id="SVGID_11_"
                      x1="206.123"
                      x2="231.829"
                      y1="279.302"
                      y2="305.009"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#ff7044" />
                      <stop offset="1" stopColor="#f92814" />
                    </linearGradient>
                    <linearGradient
                      xmlns="http://www.w3.org/2000/svg"
                      id="SVGID_12_"
                      x1="215.526"
                      x2="197.564"
                      y1="288.706"
                      y2="270.744"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#ff7044" stopOpacity="0" />
                      <stop offset="1" stopColor="#ffa425" />
                    </linearGradient>
                    <linearGradient
                      xmlns="http://www.w3.org/2000/svg"
                      id="SVGID_13_"
                      x1="214.238"
                      x2="241.52"
                      y1="294.335"
                      y2="243.594"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#f92814" stopOpacity="0" />
                      <stop offset="1" stopColor="#c1272d" />
                    </linearGradient>
                    <linearGradient
                      xmlns="http://www.w3.org/2000/svg"
                      id="SVGID_14_"
                      x1="209.514"
                      x2="217.626"
                      y1="262.222"
                      y2="262.222"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#f9f7fc" />
                      <stop offset="1" stopColor="#f0ddfc" />
                    </linearGradient>
                    <linearGradient
                      xmlns="http://www.w3.org/2000/svg"
                      id="SVGID_15_"
                      x1="208.491"
                      x2="220.736"
                      y1="263.065"
                      y2="260.711"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#fff" />
                      <stop offset="1" stopColor="#e9edf5" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                      xmlns="http://www.w3.org/2000/svg"
                      id="SVGID_16_"
                      x1="225.692"
                      x2="207.486"
                      y1="251.95"
                      y2="233.745"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#f0ddfc" stopOpacity="0" />
                      <stop
                        offset="0.289"
                        stopColor="#c8b7e0"
                        stopOpacity="0.289"
                      />
                      <stop
                        offset="0.592"
                        stopColor="#a595c8"
                        stopOpacity="0.592"
                      />
                      <stop
                        offset="0.84"
                        stopColor="#8f81b8"
                        stopOpacity="0.84"
                      />
                      <stop offset="1" stopColor="#8779b3" />
                    </linearGradient>
                    <linearGradient
                      xmlns="http://www.w3.org/2000/svg"
                      id="SVGID_17_"
                      x1="200.49"
                      x2="245.695"
                      y1="195.774"
                      y2="240.979"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#ffda45" />
                      <stop offset="1" stopColor="#ffa425" />
                    </linearGradient>
                    <linearGradient
                      xmlns="http://www.w3.org/2000/svg"
                      id="SVGID_18_"
                      x1="217.026"
                      x2="185.44"
                      y1="212.31"
                      y2="180.724"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#ffda45" stopOpacity="0" />
                      <stop offset="1" stopColor="#fcee21" />
                    </linearGradient>
                    <linearGradient
                      xmlns="http://www.w3.org/2000/svg"
                      id="SVGID_19_"
                      x1="214.761"
                      x2="262.737"
                      y1="222.209"
                      y2="132.982"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#ffda45" stopOpacity="0" />
                      <stop offset="1" stopColor="#b53759" />
                    </linearGradient>
                    <linearGradient
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      id="SVGID_20_"
                      x1="301.885"
                      x2="652.395"
                      y1="282"
                      y2="-369.899"
                      gradientUnits="userSpaceOnUse"
                      xlinkHref="#lg2"
                    />
                    <circle
                      xmlns="http://www.w3.org/2000/svg"
                      cx="255"
                      cy="255"
                      r="255"
                      fill="url(#SVGID_1_)"
                      data-original="url(#SVGID_1_)"
                    />
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      fill="url(#SVGID_2_)"
                      d="M434.552 120.876c-8.75-6.428-18.028-12.322-27.751-17.676-5.354-9.723-11.249-19.002-17.677-27.752C353.431 26.858 305.797.098 255 .098s-98.43 26.76-134.124 75.35c-6.428 8.75-12.323 18.028-17.677 27.752-9.723 5.354-19.001 11.249-27.752 17.677C26.858 156.57.098 204.203.098 255s26.76 98.43 75.35 134.124c8.75 6.428 18.028 12.323 27.752 17.677 5.354 9.723 11.249 19.001 17.677 27.752 35.694 48.59 83.327 75.35 134.124 75.35s98.431-26.76 134.124-75.35c6.428-8.75 12.323-18.028 17.677-27.752 9.723-5.354 19.001-11.249 27.751-17.676 48.59-35.694 75.35-83.327 75.35-134.124s-26.761-98.431-75.351-134.125zM255 497.902c-13.999 0-28.837-20.853-40.567-56.435 13.296 1.564 26.847 2.375 40.567 2.375s27.272-.81 40.568-2.375c-11.731 35.582-26.569 56.435-40.568 56.435zm0-66.061a331.812 331.812 0 01-44.414-2.973c-7.994-28.266-13.798-62.197-17.119-99.243 19.885 1.422 40.515 2.154 61.533 2.154s41.648-.733 61.533-2.154c-3.321 37.046-9.125 70.976-17.119 99.243A331.8 331.8 0 01255 431.841zm0-419.743c13.999 0 28.837 20.853 40.568 56.435-13.296-1.564-26.848-2.375-40.568-2.375s-27.272.811-40.567 2.375c11.73-35.582 26.568-56.435 40.567-56.435zm0 66.061a331.8 331.8 0 0144.414 2.973c7.994 28.267 13.798 62.197 17.119 99.243-19.885-1.422-40.516-2.154-61.533-2.154-21.018 0-41.648.733-61.533 2.154 3.321-37.046 9.125-70.977 17.119-99.243A331.812 331.812 0 01255 78.159zM190.22 255c0-21.396.771-42.362 2.258-62.521 20.159-1.487 41.126-2.258 62.522-2.258s42.363.771 62.522 2.258c1.487 20.159 2.258 41.126 2.258 62.521 0 21.396-.771 42.362-2.258 62.521-20.159 1.487-41.126 2.258-62.522 2.258s-42.362-.771-62.522-2.258c-1.487-20.159-2.258-41.125-2.258-62.521zm-9.845 61.533c-37.046-3.321-70.977-9.125-99.243-17.119-1.946-14.405-2.973-29.247-2.973-44.414s1.027-30.009 2.973-44.414c28.266-7.994 62.197-13.798 99.243-17.119-1.422 19.885-2.154 40.515-2.154 61.533-.001 21.018.732 41.648 2.154 61.533zm149.251-123.066c37.046 3.321 70.976 9.125 99.243 17.119 1.946 14.405 2.973 29.247 2.973 44.414s-1.027 30.009-2.973 44.414c-28.267 7.994-62.197 13.798-99.243 17.119 1.422-19.885 2.154-40.515 2.154-61.533s-.732-41.648-2.154-61.533zm-.962-12.13c-3.16-36.311-8.668-69.795-16.25-98.174 31.293 5.543 60.229 15.507 85.491 28.934 13.426 25.262 23.391 54.198 28.933 85.49-28.379-7.582-61.863-13.09-98.174-16.25zm-147.328 0c-36.311 3.16-69.795 8.668-98.174 16.25 5.542-31.292 15.507-60.229 28.933-85.49 25.262-13.426 54.198-23.391 85.49-28.933-7.58 28.377-13.088 61.861-16.249 98.173zM68.533 295.567C32.951 283.837 12.098 268.999 12.098 255s20.853-28.837 56.435-40.567c-1.564 13.296-2.375 26.847-2.375 40.567s.811 27.272 2.375 40.567zm112.803 33.097c3.16 36.311 8.668 69.795 16.25 98.174-31.292-5.542-60.229-15.507-85.49-28.933-13.426-25.262-23.391-54.198-28.933-85.491 28.378 7.581 61.862 13.089 98.173 16.25zm147.328 0c36.311-3.16 69.795-8.668 98.174-16.25-5.542 31.292-15.507 60.228-28.933 85.49-25.262 13.427-54.198 23.391-85.491 28.934 7.582-28.379 13.09-61.863 16.25-98.174zm112.803-114.231c35.582 11.731 56.434 26.568 56.434 40.567s-20.852 28.836-56.434 40.567c1.564-13.295 2.375-26.847 2.375-40.567s-.811-27.272-2.375-40.567zm53.601 13.543c-11.741-10.012-30.353-19.013-55.413-26.714-4.364-27.63-12.089-53.955-22.901-78.066 41.028 26.716 69.562 63.402 78.314 104.78zM386.805 93.247c-24.111-10.812-50.436-18.537-78.067-22.901-7.701-25.06-16.702-43.673-26.714-55.414 41.379 8.752 78.065 37.286 104.781 78.315zM227.976 14.931c-10.012 11.741-19.013 30.354-26.715 55.414-27.63 4.364-53.955 12.089-78.066 22.901 26.717-41.028 63.402-69.562 104.781-78.315zM93.246 123.195c-10.812 24.111-18.537 50.436-22.901 78.066-25.06 7.701-43.673 16.702-55.414 26.714 8.753-41.377 37.287-78.063 78.315-104.78zM14.931 282.024c11.741 10.012 30.354 19.013 55.414 26.715 4.364 27.63 12.089 53.955 22.901 78.066-41.028-26.717-69.562-63.402-78.315-104.781zm108.264 134.73c24.111 10.812 50.436 18.537 78.066 22.901 7.702 25.06 16.702 43.673 26.715 55.414-41.379-8.753-78.064-37.287-104.781-78.315zm158.829 78.315c10.013-11.741 19.013-30.354 26.714-55.414 27.631-4.364 53.956-12.089 78.067-22.901-26.716 41.028-63.402 69.562-104.781 78.315zm134.73-108.265c10.812-24.111 18.537-50.435 22.901-78.066 25.06-7.701 43.672-16.702 55.413-26.714-8.752 41.378-37.286 78.064-78.314 104.78z"
                      data-original="url(#SVGID_2_)"
                    />
                    <circle
                      xmlns="http://www.w3.org/2000/svg"
                      cx="255"
                      cy="255"
                      r="227.62"
                      fill="url(#SVGID_3_)"
                      data-original="url(#SVGID_3_)"
                    />
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      fill="url(#SVGID_4_)"
                      d="M460.195 406.399L240.68 186.885c-6.399-7.9-16.173-12.954-27.131-12.954-19.276 0-34.903 15.626-34.903 34.903 0 10.947 5.046 20.708 12.934 27.104 1.541 1.905 16.993 17.253 17.774 18.049v13.348c-8.945 1.927-15.653 9.873-15.653 19.395 0 6.805 3.429 12.807 8.649 16.382l175.426 175.426c32.425-17.849 60.545-42.542 82.419-72.139z"
                      data-original="url(#SVGID_4_)"
                    />
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      fill="url(#SVGID_5_)"
                      d="M231.172 265.619l9.872 9.871a19.253 19.253 0 015.639 13.614c0 10.633 8.62 19.253 19.253 19.253 11.089 0 20.079 8.989 20.079 20.078a103.64 103.64 0 01-8.833 41.869l-35.542 80.488c-4.865 11.018-19.279 13.712-27.796 5.195a66.191 66.191 0 01-19.387-46.804v-9.362a92.028 92.028 0 00-26.954-65.073l-1.052-1.052a86.602 86.602 0 01-25.366-61.239v-3.355c0-15.933 12.916-28.849 28.849-28.849a86.606 86.606 0 0161.238 25.366z"
                      data-original="url(#SVGID_5_)"
                    />
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      fill="url(#SVGID_6_)"
                      d="M265.935 308.358c-10.633 0-19.253-8.62-19.253-19.253a19.253 19.253 0 00-5.639-13.614l-9.872-9.871a86.56 86.56 0 00-29.495-19.313c3.812 3.826 7.316 7.311 7.677 7.68v13.348c-8.945 1.927-15.653 9.873-15.653 19.395 0 6.805 3.429 12.807 8.649 16.382l72.492 72.492 2.339-5.298a103.656 103.656 0 008.833-41.869c.001-11.09-8.989-20.079-20.078-20.079z"
                      data-original="url(#SVGID_6_)"
                    />
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      fill="url(#SVGID_7_)"
                      d="M167.298 15.489C103.454 38.875 51.571 87.062 23.308 148.381c-3.35 7.267-5.008 15.2-5.008 23.201a56.198 56.198 0 0016.46 39.738l5.212 5.212a124.538 124.538 0 0088.061 36.476 8.934 8.934 0 000-17.868h-27.464c-12.667 0-22.935-10.268-22.935-22.935 0-12.667 10.269-22.935 22.935-22.935h21.451a96.984 96.984 0 0068.576-28.405l33.12-33.12a38.458 38.458 0 0127.193-11.264 38.456 38.456 0 0034.627-21.727c7.867-16.282-3.996-35.188-22.079-35.188h-42.733c-12.564 0-22.749-10.185-22.749-22.749 0-15.856-15.789-26.781-30.677-21.328z"
                      data-original="url(#SVGID_7_)"
                    />
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      fill="url(#SVGID_8_)"
                      d="M263.457 59.565h-42.733c-12.564 0-22.749-10.185-22.749-22.749 0-.747-.046-1.478-.114-2.202-83.307 21.538-148.109 89.063-165.719 173.879a56.67 56.67 0 002.617 2.827l5.212 5.212a124.538 124.538 0 0088.061 36.476 8.934 8.934 0 000-17.868h-27.464c-12.667 0-22.935-10.269-22.935-22.935 0-12.667 10.269-22.935 22.935-22.935h21.451a96.984 96.984 0 0068.576-28.405l33.12-33.12a38.458 38.458 0 0127.193-11.264 38.457 38.457 0 0034.627-21.727c7.867-16.283-3.995-35.189-22.078-35.189z"
                      data-original="url(#SVGID_8_)"
                    />
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      fill="url(#SVGID_9_)"
                      d="M504.064 200.057c-3.522-16.035-17.859-27.377-34.277-27.377H414.625c-32.659 0-59.135 26.476-59.135 59.135v7.195c0 28.686 23.255 51.94 51.941 51.94 14.586 0 26.409 11.824 26.409 26.41v68.964c0 17.971 23.334 25.13 33.321 10.189 20.755-31.049 34.874-66.914 40.329-105.563C509.14 279.21 510 267.2 510 255c0-18.866-2.05-37.248-5.936-54.943z"
                      data-original="url(#SVGID_9_)"
                    />
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      fill="url(#SVGID_10_)"
                      d="M482.62 139.93h-76.17c-13.625 0-24.67-11.045-24.67-24.67 0-13.625 11.045-24.67 24.67-24.67h43.48a254.972 254.972 0 0132.69 49.34z"
                      data-original="url(#SVGID_10_)"
                    />
                    <circle
                      xmlns="http://www.w3.org/2000/svg"
                      cx="213.549"
                      cy="286.728"
                      r="19.848"
                      fill="url(#SVGID_11_)"
                      data-original="url(#SVGID_11_)"
                    />
                    <circle
                      xmlns="http://www.w3.org/2000/svg"
                      cx="213.549"
                      cy="286.728"
                      r="16.565"
                      fill="url(#SVGID_12_)"
                      data-original="url(#SVGID_12_)"
                    />
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      fill="url(#SVGID_13_)"
                      d="M222.428 268.974a19.76 19.76 0 012.093 8.879c0 10.962-8.886 19.848-19.848 19.848-3.192 0-6.207-.755-8.879-2.093 3.259 6.504 9.985 10.969 17.755 10.969 10.962 0 19.848-8.886 19.848-19.848 0-7.771-4.465-14.497-10.969-17.755z"
                      data-original="url(#SVGID_13_)"
                    />
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      fill="url(#SVGID_14_)"
                      d="M213.549 288.315a4.195 4.195 0 01-4.195-4.195v-47.99h8.391v47.99a4.196 4.196 0 01-4.196 4.195z"
                      data-original="url(#SVGID_14_)"
                    />
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      fill="url(#SVGID_15_)"
                      d="M214.875 288.097a4.195 4.195 0 002.869-3.978v-47.99h-5.738v47.99a4.194 4.194 0 002.869 3.978z"
                      data-original="url(#SVGID_15_)"
                    />
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      fill="url(#SVGID_16_)"
                      d="M209.354 243.486l8.39 8.39V236.13h-8.39z"
                      data-original="url(#SVGID_16_)"
                    />
                    <circle
                      xmlns="http://www.w3.org/2000/svg"
                      cx="213.549"
                      cy="208.833"
                      r="34.903"
                      fill="url(#SVGID_17_)"
                      data-original="url(#SVGID_17_)"
                    />
                    <circle
                      xmlns="http://www.w3.org/2000/svg"
                      cx="213.549"
                      cy="208.833"
                      r="29.129"
                      fill="url(#SVGID_18_)"
                      data-original="url(#SVGID_18_)"
                    />
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      fill="url(#SVGID_19_)"
                      d="M229.162 177.611a34.753 34.753 0 013.681 15.613c0 19.276-15.626 34.903-34.903 34.903a34.753 34.753 0 01-15.613-3.681c5.73 11.437 17.558 19.29 31.222 19.29 19.276 0 34.903-15.626 34.903-34.903 0-13.663-7.853-25.491-19.29-31.222z"
                      data-original="url(#SVGID_19_)"
                    />
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      fill="url(#SVGID_20_)"
                      d="M369.069 26.893c17.198 34.325 26.893 73.062 26.893 114.069 0 140.833-114.167 255-255 255-41.007 0-79.744-9.694-114.069-26.893C68.761 452.63 155.174 510 255 510c140.833 0 255-114.167 255-255 0-99.826-57.371-186.239-140.931-228.107z"
                      data-original="url(#SVGID_20_)"
                    />
                  </svg>
                </div>
                <div className="">
                  <span className="block text-sm">You earned 50 points!</span>
                  <span className="block text-xs">
                    for completing the course...
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
