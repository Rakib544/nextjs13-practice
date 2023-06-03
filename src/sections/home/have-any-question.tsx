import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function HaveAnyQuestion() {
  return (
    <div className="my-20">
      <div className="grid grid-cols-2 items-center gap-4">
        <div className="order-1 col-span-2 md:col-span-1">
          <div className="relative">
            <Image
              src="https://lms-course.netlify.app/static/media/become_instructor_banner.2888ca953ff4e54a8667.jpg"
              width={320}
              height={550}
              alt="become an instructor"
              className="md:max-w-100 max-h-72 w-full max-w-[500px] rounded-bl rounded-br-2xl rounded-tl-2xl rounded-tr md:max-h-[750px] lg:w-[400px]"
            />
            <Image
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAACqCAYAAAA9dtSCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkM2FiNDQ3Ni00OGJlLWJiNDEtYjYxYS00NGIxZjMzOTQ2MDIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDBBNTNGNDZBMEI3MTFFQkFDREU4RjE2OEM2NkI0RkMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDBBNTNGNDVBMEI3MTFFQkFDREU4RjE2OEM2NkI0RkMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjIgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OWVkMmFlNjktYjczMC1hNDQzLTgzZDEtNjMwNDUzMDdkZmU5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmQzYWI0NDc2LTQ4YmUtYmI0MS1iNjFhLTQ0YjFmMzM5NDYwMiIvPiA8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"
              width={150}
              height={150}
              alt="become an instructor"
              className="absolute -top-12 right-10"
              style={{ zIndex: "-1" }}
            />
          </div>
        </div>
        <div className="order-2 col-span-2 md:col-span-1">
          <h2 className="text-2xl font-bold">
            Have a Question? Ask it in forum and get answer
          </h2>
          <p className="mb-8 mt-2 text-slate-600">
            Our forums helps you to create your questions on different subjects
            and communicate with other forum users. Our users will help you to
            get the best answer!
          </p>
          <div
            className="mt-12 flex gap-3"
            style={{ marginTop: "15px", gap: "10px" }}
          >
            <div>
              <Button asChild>
                <Link href="">Create a new Topic</Link>
              </Button>
            </div>
            <div>
              <Button asChild variant="outline">
                <Link href="">Browse Forums</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
