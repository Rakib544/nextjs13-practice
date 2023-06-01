import Image from "next/image";
import Link from "next/link";
import SearchBox from "../search-box";

export default function Footer() {
  return (
    <footer className="mt-60 bg-slate-800">
      <div className="-translate-y-28">
        <div className="container">
          <div
            className="grid h-48 grid-cols-2 items-center gap-4 rounded-2xl bg-green-500 p-2 md:p-5"
            style={{
              backgroundImage: `url(https://lms-course.netlify.app/static/media/pattern.20e0c4e68fa21ccdc415.png)`,
            }}
          >
            <div className="col-span-2 md:col-span-1">
              <h2 className="text-2xl font-bold text-white">Join us today</h2>
              <p className="text-white">
                We will send the best deals and offers by email
              </p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <SearchBox />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-4 sm:col-span-2 md:col-span-1">
            <h4 className="text-xl text-white">About Us</h4>
            <p className="mt-3 text-white">
              Ustaze is a fully-featured learning management system that helps
              you to run your education business in several hours. This platform
              helps instructors to create professional education materials and
              helps students to learn from the best instructors.
            </p>
          </div>
          <div className="col-span-4 sm:col-span-2 md:col-span-1">
            <h4 className="text-xl text-white">Additional Links</h4>
            <ul className="text-white">
              <li>
                <Link href="/">Login</Link>
              </li>
              <li>
                <Link href="/">Register</Link>
              </li>
              <li>
                <Link href="/">Blog</Link>
              </li>
              <li>
                <Link href="/">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-4 sm:col-span-2 md:col-span-1">
            <h4 className="text-xl text-white">Similar Business</h4>
            <ul className="text-white">
              <li>
                <Link href="/">Udemy</Link>
              </li>
              <li>
                <Link href="/">Coursera</Link>
              </li>
              <li>
                <Link href="/">edX</Link>
              </li>
              <li>
                <Link href="/">Masterclass</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-4 sm:col-span-2 md:col-span-1">
            {/* <H4 color='text-white text-xl'>Purchase on LMS</H4>
            <div>
              <img src={envatoLogo} alt='envato' />
            </div> */}
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
          <div className="flex items-center gap-2">
            <Link href="" className="h-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M13.0281 2.00098C14.1535 2.00284 14.7238 2.00879 15.2166 2.02346L15.4107 2.02981C15.6349 2.03778 15.8561 2.04778 16.1228 2.06028C17.1869 2.10944 17.9128 2.27778 18.5503 2.52528C19.2094 2.77944 19.7661 3.12278 20.3219 3.67861C20.8769 4.23444 21.2203 4.79278 21.4753 5.45028C21.7219 6.08694 21.8903 6.81361 21.9403 7.87778C21.9522 8.14444 21.9618 8.36564 21.9697 8.58989L21.976 8.78397C21.9906 9.27672 21.9973 9.8471 21.9994 10.9725L22.0002 11.7182C22.0003 11.8093 22.0003 11.9033 22.0003 12.0003L22.0002 12.2824L21.9996 13.0281C21.9977 14.1535 21.9918 14.7238 21.9771 15.2166L21.9707 15.4107C21.9628 15.6349 21.9528 15.8561 21.9403 16.1228C21.8911 17.1869 21.7219 17.9128 21.4753 18.5503C21.2211 19.2094 20.8769 19.7661 20.3219 20.3219C19.7661 20.8769 19.2069 21.2203 18.5503 21.4753C17.9128 21.7219 17.1869 21.8903 16.1228 21.9403C15.8561 21.9522 15.6349 21.9618 15.4107 21.9697L15.2166 21.976C14.7238 21.9906 14.1535 21.9973 13.0281 21.9994L12.2824 22.0002C12.1913 22.0003 12.0973 22.0003 12.0003 22.0003L11.7182 22.0002L10.9725 21.9996C9.8471 21.9977 9.27672 21.9918 8.78397 21.9771L8.58989 21.9707C8.36564 21.9628 8.14444 21.9528 7.87778 21.9403C6.81361 21.8911 6.08861 21.7219 5.45028 21.4753C4.79194 21.2211 4.23444 20.8769 3.67861 20.3219C3.12278 19.7661 2.78028 19.2069 2.52528 18.5503C2.27778 17.9128 2.11028 17.1869 2.06028 16.1228C2.0484 15.8561 2.03871 15.6349 2.03086 15.4107L2.02457 15.2166C2.00994 14.7238 2.00327 14.1535 2.00111 13.0281L2.00098 10.9725C2.00284 9.8471 2.00879 9.27672 2.02346 8.78397L2.02981 8.58989C2.03778 8.36564 2.04778 8.14444 2.06028 7.87778C2.10944 6.81278 2.27778 6.08778 2.52528 5.45028C2.77944 4.79194 3.12278 4.23444 3.67861 3.67861C4.23444 3.12278 4.79278 2.78028 5.45028 2.52528C6.08778 2.27778 6.81278 2.11028 7.87778 2.06028C8.14444 2.0484 8.36564 2.03871 8.58989 2.03086L8.78397 2.02457C9.27672 2.00994 9.8471 2.00327 10.9725 2.00111L13.0281 2.00098ZM12.0003 7.00028C9.23738 7.00028 7.00028 9.23981 7.00028 12.0003C7.00028 14.7632 9.23981 17.0003 12.0003 17.0003C14.7632 17.0003 17.0003 14.7607 17.0003 12.0003C17.0003 9.23738 14.7607 7.00028 12.0003 7.00028ZM12.0003 9.00028C13.6572 9.00028 15.0003 10.3429 15.0003 12.0003C15.0003 13.6572 13.6576 15.0003 12.0003 15.0003C10.3434 15.0003 9.00028 13.6576 9.00028 12.0003C9.00028 10.3434 10.3429 9.00028 12.0003 9.00028ZM17.2503 5.50028C16.561 5.50028 16.0003 6.06018 16.0003 6.74943C16.0003 7.43867 16.5602 7.99944 17.2503 7.99944C17.9395 7.99944 18.5003 7.43954 18.5003 6.74943C18.5003 6.06018 17.9386 5.49941 17.2503 5.50028Z"
                  fill="rgba(255,255,255,1)"
                ></path>
              </svg>
            </Link>
            <Link href="">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M22.2125 5.65605C21.4491 5.99375 20.6395 6.21555 19.8106 6.31411C20.6839 5.79132 21.3374 4.9689 21.6493 4.00005C20.8287 4.48761 19.9305 4.83077 18.9938 5.01461C18.2031 4.17106 17.098 3.69303 15.9418 3.69434C13.6326 3.69434 11.7597 5.56661 11.7597 7.87683C11.7597 8.20458 11.7973 8.52242 11.8676 8.82909C8.39047 8.65404 5.31007 6.99005 3.24678 4.45941C2.87529 5.09767 2.68005 5.82318 2.68104 6.56167C2.68104 8.01259 3.4196 9.29324 4.54149 10.043C3.87737 10.022 3.22788 9.84264 2.64718 9.51973C2.64654 9.5373 2.64654 9.55487 2.64654 9.57148C2.64654 11.5984 4.08819 13.2892 6.00199 13.6731C5.6428 13.7703 5.27232 13.8194 4.90022 13.8191C4.62997 13.8191 4.36771 13.7942 4.11279 13.7453C4.64531 15.4065 6.18886 16.6159 8.0196 16.6491C6.53813 17.8118 4.70869 18.4426 2.82543 18.4399C2.49212 18.4402 2.15909 18.4205 1.82812 18.3811C3.74004 19.6102 5.96552 20.2625 8.23842 20.2601C15.9316 20.2601 20.138 13.8875 20.138 8.36111C20.138 8.1803 20.1336 7.99886 20.1256 7.81997C20.9443 7.22845 21.651 6.49567 22.2125 5.65605Z"
                  fill="rgba(255,255,255,1)"
                ></path>
              </svg>
            </Link>

            <Link href="">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"
                  fill="rgba(255,255,255,1)"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
