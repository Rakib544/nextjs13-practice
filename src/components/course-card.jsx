import { H3, Paragraph } from "./typography";

function CourseCard() {
  return (
    <Link
      to="/course/1"
      className="block cursor-pointer rounded-xl shadow-card transition duration-500 hover:-translate-y-3"
    >
      <div className="relative h-64">
        <img
          src={courseImg}
          loading="lazy"
          alt="The Future of Energy"
          className="h-full w-full rounded-t-xl object-cover object-center"
        />
        <div className="absolute top-0 ml-2 mt-2 rounded-br-xl rounded-tl-xl bg-secondary px-4 py-2 text-sm text-white">
          In Progress
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-1">
          <div className="h-10 w-10 rounded-full">
            <img
              src={courseCreatorImage}
              alt="course creator"
              className="h-full w-full overflow-hidden rounded-full object-cover object-center"
            />
          </div>
          <Paragraph>Serena Williams</Paragraph>
        </div>
        <H3 className="mt-3 text-lg">New Update Features</H3>
        <Paragraph className="mt-5">
          in{" "}
          <Link className="underline " to="/">
            Science
          </Link>
        </Paragraph>
        <div className="flex items-center gap-2">
          <Rating />
          <span className="bg-green rounded-md px-3 py-1 text-xs font-medium text-white">
            3.00
          </span>
        </div>
        <div className="my-3 grid grid-cols-5 divide-x-2 md:grid-cols-6">
          <div className="col-span-2 flex items-center gap-1 md:col-span-3">
            <ClockIcon />{" "}
            <span className="text-sm text-secondary">1:30 Hours</span>
          </div>
          <div className="col-span-3 flex justify-end md:col-span-3">
            <div className="flex items-center gap-1">
              <CalenderIcon />
              <span className="text-sm text-secondary">30 January 2022</span>
            </div>
          </div>
        </div>
        <span className="text-green mt-3 text-2xl">$10</span>
      </div>
    </Link>
  );
}

export default CourseCard;
