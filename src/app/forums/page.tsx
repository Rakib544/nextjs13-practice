import Image from "next/image";
import Link from "next/link";
import SearchBox from "~/components/search-box";
import { Button } from "~/components/ui/button";

export default function Forums() {
  return (
    <div>
      <div className="relative py-32">
        <div className="container">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 mt-12 lg:col-span-6">
              <h1 className="w-100 text-3xl font-bold md:w-2/3 lg:text-4xl">
                Need help?{" "}
              </h1>
              <h2 className="w-100 text-3xl font-bold md:w-2/3 lg:text-4xl">
                Create topic in forum.
              </h2>
              <p className="my-3 text-muted-foreground">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolorum architecto est sunt perspiciatis ea explicabo, rerum
                magnam dolor assumenda perferendis.
              </p>
              <div className="mt-6">
                <SearchBox />
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-full lg:absolute lg:bottom-0 lg:right-0 lg:z-[-1] lg:block lg:w-[60%]">
          <Image
            src="https://lms.rocket-soft.org/assets/default/img/forum/hero.png"
            alt=""
            height={600}
            width={500}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
      <div className="container mt-0 lg:mt-32">
        <div className="grid grid-cols-12 items-center gap-6 rounded-3xl bg-[#f7fafd] px-4 py-6 md:py-0">
          <div className="order-2 col-span-12 md:col-span-7 lg:order-1">
            <h2 className="w-100 text-2xl font-bold md:w-2/3 lg:text-3xl">
              Have a Question? Ask it in the forum and get the answer
            </h2>
            <p className="mb-4 mt-2 text-muted-foreground">
              Use Ustaze and win club points according to different activities.
              You will be able to use your club points to get free prizes and
              courses. Start using the system now and collect points!
            </p>
            <div className="mt-4 flex gap-x-3">
              <Button asChild>
                <Link href="/forums">Browse Forums</Link>
              </Button>
            </div>
          </div>
          <div className="order-1 col-span-12 md:col-span-5 lg:order-2">
            <div className="relative mt-[-93px]">
              <Image
                height={400}
                className="w-full"
                width={350}
                src="https://lms.rocket-soft.org/assets/default/img/forum/question-section.png"
                alt="win club points"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
