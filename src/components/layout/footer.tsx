import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-40 w-full bg-[#F6F9FC]">
      <div className="pb-6 pt-20">
        <div className="container grid grid-cols-12 items-center gap-4">
          <div className="col-span-12 lg:col-span-5">
            <h3 className="text-lg font-bold lg:text-xl">
              Trusted by over 80000 learners who are working for companies like{" "}
            </h3>
          </div>
          <div className="col-span-12 flex gap-4 lg:col-span-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="40"
              fill="none"
              // className="UserLogo variant-- "
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 200 40"
            >
              <path
                fill="var(--userLogoColor, #003D29)"
                d="M85.027 20.795l-1.825-.168c-1.197-.104-1.68-.524-1.68-1.259 0-.86.735-1.427 2.162-1.427 1.343 0 2.015.587 2.12 1.532h4.281c-.273-2.791-2.245-4.764-6.275-4.764-4.197 0-6.507 2.14-6.507 4.973 0 2.645 1.448 4.093 5.038 4.388l1.806.146c1.404.106 1.909.588 1.909 1.427 0 .882-.734 1.532-2.246 1.532-1.407 0-2.245-.63-2.392-1.74h-4.513c.398 3.042 2.54 5.056 6.884 5.056 4.219 0 6.548-2.16 6.548-5.079 0-2.833-1.553-4.28-5.31-4.617zm-14.775-6.086c-2.686 0-4.282 1.406-5.037 4.282h-.273v-4.03h-4.24v15.28h4.513v-8.9c0-2.036 1.05-3.148 2.938-3.148 1.868 0 2.792 1.155 2.792 3.127v8.92h4.512v-9.717c0-3.695-1.931-5.814-5.206-5.814zM56.316 9c-1.532 0-2.687 1.008-2.687 2.54s1.134 2.54 2.666 2.54 2.665-1.009 2.665-2.54c0-1.512-1.133-2.54-2.644-2.54zm2.245 5.96H54.05v15.28h4.512V14.96zm38.87-3.232h-2.875c-.084 2.457-1.134 3.526-3.485 3.715v3.107h1.848v6.716c0 3.379 1.93 5.225 5.771 5.225.722 0 1.442-.091 2.141-.272v-3.632a6.21 6.21 0 01-1.09.084c-1.617 0-2.31-.609-2.31-2.31V18.55h3.967v-3.59h-3.967v-3.232zM169 18.55v-3.59h-3.966v-3.232H162.2c-.063 1.7-.567 2.687-1.679 3.233v10.305c0 3.379 1.931 5.225 5.772 5.225a8.55 8.55 0 002.141-.272v-3.632a6.24 6.24 0 01-1.092.084c-1.616 0-2.308-.609-2.308-2.31V18.55H169zm-14.775.671h-.273V14.96h-4.177v15.28h4.513v-8.27c0-2.288 1.028-3.253 3.379-3.253.399 0 .839.043 1.448.147v-3.945a3.725 3.725 0 00-1.28-.21c-1.827 0-3.086 1.05-3.61 4.512zm-28.817 7.41c-2.12 0-3.652-1.408-3.652-4.136 0-2.434 1.427-3.945 3.61-3.945 1.868 0 2.938 1.049 3.253 2.728h4.575c-.44-3.925-3.252-6.57-7.765-6.57-4.953 0-8.206 3.359-8.206 7.956 0 4.763 3.127 7.827 8.143 7.827 4.555 0 7.514-2.538 7.934-6.653h-4.576c-.251 1.68-1.406 2.792-3.316 2.792zm-16.181-11.922c-3.925 0-6.296 1.93-6.717 5.393h4.324c.146-1.196.924-1.826 2.287-1.826 1.385 0 2.015.63 2.015 1.533 0 .755-.482 1.155-1.72 1.385l-2.058.378c-3.63.671-5.016 2.161-5.016 4.533 0 2.707 1.91 4.408 4.555 4.408 2.161 0 3.568-1.008 4.219-3.526h.272v3.253h4.261v-9.97c0-3.463-2.078-5.561-6.422-5.561zm-.504 12.718c-1.217 0-1.91-.65-1.91-1.616 0-.797.483-1.343 1.679-1.616l.839-.189c.724-.167 1.286-.391 1.806-.84v1.617c0 1.867-.987 2.644-2.414 2.644zm32.573-12.718c-3.925 0-6.296 1.93-6.716 5.393h4.323c.148-1.196.924-1.826 2.288-1.826 1.385 0 2.015.63 2.015 1.533 0 .755-.483 1.155-1.721 1.385l-2.057.378c-3.631.671-5.017 2.161-5.017 4.533 0 2.707 1.91 4.408 4.555 4.408 2.162 0 3.568-1.008 4.219-3.526h.273v3.253h4.261v-9.97c0-3.463-2.079-5.561-6.423-5.561zm-.504 12.718c-1.217 0-1.91-.65-1.91-1.616 0-.797.483-1.343 1.679-1.616l.839-.189c.724-.167 1.287-.391 1.806-.84v1.617c0 1.867-.986 2.644-2.414 2.644z"
              ></path>
              <path
                fill="var(--userLogoColor, #0AAD0A)"
                d="M46.453 12.656c-.928 0-1.59.404-2.2 1.282l-1.76 2.527V9.252h-4.197v7.213l-1.76-2.527c-.609-.878-1.27-1.282-2.199-1.282-1.4 0-2.332 1.034-2.337 2.307-.004 1.091.51 1.802 1.595 2.5l6.8 4.381 6.8-4.38c1.084-.699 1.599-1.41 1.595-2.5-.004-1.274-.937-2.308-2.337-2.308z"
              ></path>
              <path
                fill="var(--userLogoColor, #FF7009)"
                d="M40.395 22.894c4.041 0 7.355 3.017 7.345 7.346H33.05c-.009-4.328 3.303-7.346 7.345-7.346z"
              ></path>
              <title>Instacart logo</title>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="40"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 200 40"
            >
              <title>Slack logo</title>
              <g fill="none">
                <path
                  fill="var(--userLogoColor, #000)"
                  d="M80.95 28.15l1.32-3.06a8.8 8.8 0 005.2 1.62c1.38 0 2.25-.53 2.25-1.34-.02-2.26-8.28-.49-8.34-6.15-.03-2.87 2.53-5.08 6.15-5.08 2.15 0 4.3.53 5.83 1.75L92.12 19a9.32 9.32 0 00-4.8-1.53c-1.13 0-1.88.53-1.88 1.21.02 2.21 8.34 1 8.43 6.4 0 2.94-2.49 5-6.07 5-2.61 0-5.02-.62-6.85-1.94M131.59 24a3.8 3.8 0 110-3.74l3.64-2.02a7.98 7.98 0 100 7.78L131.59 24zM95.7 7.53h4.55v22.26H95.7zm41.31 0V29.8h4.56v-6.68l5.4 6.68h5.84l-6.88-7.93 6.37-7.4h-5.58l-5.15 6.15V7.53zm-23.21 16.5a4.2 4.2 0 01-3.56 1.9 3.8 3.8 0 110-7.62c1.53 0 2.9.85 3.55 1.96v3.76zm0-9.57v1.8c-.75-1.25-2.6-2.12-4.54-2.12-4 0-7.15 3.53-7.15 7.95 0 4.43 3.15 8 7.15 8 1.94 0 3.79-.87 4.53-2.13v1.8h4.56v-15.3h-4.56z"
                ></path>
                <path
                  fill="var(--userLogoColor, #E01E5A)"
                  d="M52.79 24a2.8 2.8 0 11-2.81-2.8h2.81V24zm1.4 0a2.8 2.8 0 115.62 0v7.02a2.8 2.8 0 11-5.62 0v-7.01z"
                ></path>
                <path
                  fill="var(--userLogoColor, #36C5F0)"
                  d="M57 12.74a2.8 2.8 0 112.81-2.8v2.8h-2.8zm0 1.42a2.8 2.8 0 110 5.62h-7.04a2.8 2.8 0 110-5.62H57z"
                ></path>
                <path
                  fill="var(--userLogoColor, #2EB67D)"
                  d="M68.26 16.97a2.8 2.8 0 112.81 2.8h-2.8v-2.8zm-1.4 0a2.8 2.8 0 11-5.62 0V9.93a2.8 2.8 0 115.62 0v7.04z"
                ></path>
                <path
                  fill="var(--userLogoColor, #ECB22E)"
                  d="M64.05 28.22a2.8 2.8 0 11-2.81 2.8v-2.8h2.8zm0-1.4a2.8 2.8 0 110-5.62h7.04a2.8 2.8 0 110 5.61h-7.04z"
                ></path>
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="40"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 200 40"
            >
              <title>Amazon logo</title>
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="var(--userLogoColor, #EFA82E)"
                  d="M111.58 33.91C106.18 37.9 98.37 40 91.64 40a36.13 36.13 0 01-24.37-9.28c-.5-.45-.05-1.08.56-.72a49.08 49.08 0 0024.37 6.46c5.98 0 12.55-1.24 18.6-3.8.9-.39 1.67.6.78 1.25"
                ></path>
                <path
                  fill="var(--userLogoColor, #EFA82E)"
                  d="M113.82 31.36c-.69-.88-4.56-.42-6.3-.21-.52.06-.6-.4-.13-.73 3.09-2.17 8.15-1.54 8.73-.82.6.74-.15 5.8-3.04 8.21-.45.38-.87.18-.67-.31.65-1.63 2.1-5.26 1.41-6.14"
                ></path>
                <path
                  fill="var(--userLogoColor, #1B1A19)"
                  d="M107.65 15.13v-2.1c0-.33.24-.54.53-.54h9.45c.3 0 .54.22.54.53v1.8c0 .3-.26.7-.71 1.33l-4.9 6.97c1.82-.04 3.74.23 5.4 1.16.36.2.47.51.5.82v2.24c0 .31-.34.67-.7.48a10.89 10.89 0 00-9.98.02c-.33.17-.67-.18-.67-.49v-2.13c0-.34 0-.93.35-1.45l5.67-8.11h-4.94a.53.53 0 01-.54-.53M73.2 28.26h-2.88a.54.54 0 01-.5-.48V13.06c0-.3.24-.53.55-.53h2.67c.28.01.5.23.52.5v1.92h.06c.7-1.86 2-2.73 3.78-2.73 1.8 0 2.92.87 3.73 2.73a4.08 4.08 0 013.96-2.73c1.2 0 2.52.5 3.33 1.61.9 1.24.72 3.04.72 4.62v9.28c0 .3-.25.53-.55.53h-2.87a.54.54 0 01-.52-.52v-7.8c0-.63.06-2.18-.08-2.76-.22-1-.86-1.27-1.69-1.27-.7 0-1.42.46-1.72 1.2-.29.75-.26 1.99-.26 2.82v7.8c0 .3-.25.53-.56.53h-2.87a.54.54 0 01-.51-.52v-7.8c0-1.65.26-4.06-1.77-4.06-2.07 0-1.99 2.35-1.99 4.05v7.8c0 .3-.25.53-.55.53m53.11-13.03c-2.11 0-2.25 2.88-2.25 4.67 0 1.8-.02 5.64 2.23 5.64 2.22 0 2.33-3.1 2.33-4.99 0-1.24-.05-2.72-.43-3.9-.32-1.02-.96-1.42-1.88-1.42m-.02-3.01c4.26 0 6.57 3.66 6.57 8.3 0 4.5-2.55 8.05-6.57 8.05-4.19 0-6.46-3.65-6.46-8.2 0-4.59 2.3-8.15 6.46-8.15m12.1 16.04h-2.87a.54.54 0 01-.51-.52V13a.55.55 0 01.55-.48h2.66c.25.01.46.18.51.41v2.25h.05c.81-2.01 1.94-2.97 3.92-2.97 1.29 0 2.55.47 3.35 1.74.75 1.17.75 3.16.75 4.58v9.26a.55.55 0 01-.55.46h-2.88a.54.54 0 01-.5-.46v-8c0-1.6.18-3.95-1.8-3.95-.7 0-1.35.46-1.67 1.17-.4.9-.46 1.8-.46 2.79v7.92c0 .3-.25.53-.55.53m-35.38-.03a.6.6 0 01-.68.06c-.96-.79-1.13-1.15-1.65-1.9-1.57 1.6-2.7 2.08-4.73 2.08-2.42 0-4.3-1.5-4.3-4.47a4.87 4.87 0 013.06-4.69c1.56-.68 3.74-.8 5.4-1v-.36c0-.69.06-1.5-.35-2.08-.35-.53-1.02-.75-1.61-.75-1.1 0-2.07.56-2.31 1.72-.05.26-.24.52-.5.53l-2.78-.3c-.24-.05-.5-.24-.43-.6.64-3.37 3.69-4.4 6.42-4.4 1.4 0 3.23.38 4.33 1.44 1.4 1.3 1.26 3.04 1.26 4.93v4.47c0 1.34.56 1.93 1.09 2.66.18.26.22.57-.01.76-.59.49-1.63 1.4-2.2 1.9h-.01zm-2.9-7c0 1.12.03 2.05-.54 3.05-.45.8-1.18 1.3-1.98 1.3-1.1 0-1.75-.84-1.75-2.08 0-2.44 2.2-2.88 4.27-2.88v.61zm-34.76 7a.6.6 0 01-.68.06c-.95-.79-1.12-1.15-1.65-1.9-1.57 1.6-2.69 2.08-4.73 2.08-2.42 0-4.3-1.5-4.3-4.47a4.87 4.87 0 013.06-4.69c1.56-.68 3.74-.8 5.4-1v-.36c0-.69.06-1.5-.35-2.08-.34-.53-1.02-.75-1.6-.75-1.1 0-2.08.56-2.32 1.72-.05.26-.24.52-.5.53l-2.78-.3c-.23-.05-.5-.24-.43-.6.64-3.37 3.7-4.4 6.43-4.4 1.4 0 3.22.38 4.32 1.44 1.4 1.3 1.27 3.04 1.27 4.93v4.47c0 1.34.55 1.93 1.08 2.66.18.26.22.57-.01.76-.59.49-1.63 1.4-2.2 1.9zm-2.9-7c0 1.12.03 2.05-.53 3.05-.46.8-1.18 1.3-2 1.3-1.1 0-1.74-.84-1.74-2.08 0-2.44 2.2-2.88 4.28-2.88v.61z"
                ></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="container mt-12">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <h4 className="text-lg font-bold">About Us</h4>
            <p className="mt-3 text-muted-foreground">
              Ustaze is a fully-featured learning management system that helps
              you to run your education business in several hours. This platform
              helps instructors to create professional education materials and
              helps students to learn from the best instructors.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-2">
            <h4 className="mb-2 text-lg font-bold">Additional Links</h4>
            <ul className="text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-slate-800 hover:underline">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-slate-800 hover:underline">
                  Register
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-slate-800 hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-slate-800 hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-2">
            <h4 className="mb-2 text-lg font-bold">Similar Business</h4>
            <ul className="text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-slate-800 hover:underline">
                  Udemy
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-slate-800 hover:underline">
                  Coursera
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-slate-800 hover:underline">
                  edX
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-slate-800 hover:underline">
                  Masterclass
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <h4 className="mb-2 text-lg font-bold">Contact Us</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <Link href="/">
                  <span className="items-top flex gap-2">
                    <MapPin className="mt-1 h-5 w-5 shrink-0" />
                    <span>
                      (18/1/4) Farrag Mall, Central Axis, 2nd District, 6th
                      Octobar, Giza, Egypt
                    </span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="items-top flex gap-2">
                    <Phone className="mt-1 h-5 w-5 shrink-0" />
                    <span>(+20) 2 38367340/9</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="items-top flex gap-2">
                    <Mail className=" mt-0.5 h-5 w-5 shrink-0" />
                    <span>info@afro-group.com</span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="mt-14 flex items-center justify-between border-t pb-4 pt-4">
          <div>
            <Image
              src="https://lms-course.netlify.app/static/media/logo.5cb689a2ad3891b534c8.png"
              alt="logo"
              width={176}
              height={100}
              className="h-auto w-44"
            />
          </div>
          <div className="flex items-center gap-6 text-muted-foreground">
            <Link href="" className="hover:text-slate-800 hover:underline">
              Terms and Conditions
            </Link>
            <Link href="" className="hover:text-slate-800 hover:underline">
              Site Map
            </Link>
            <Link href="" className="hover:text-slate-800 hover:underline">
              Privacy and Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
