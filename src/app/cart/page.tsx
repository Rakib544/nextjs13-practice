import Image from "next/image";
import CustomRating from "~/components/rating";
import { Button } from "~/components/ui/button";

const courseData = [
  {
    id: 1,
    thumbnail: "	https://img-c.udemycdn.com/course/480x270/705264_caa9_13.jpg",
    title: "Modern React with Redux",
    price: 10,
    instructor: "Rakib",
    ratings: 4.9,
    duration: "130.5 total hours",
    level: "All Level",
  },
  {
    id: 2,
    thumbnail: "	https://img-c.udemycdn.com/course/480x270/705264_caa9_13.jpg",
    title: "Modern React with Redux (2023)",
    price: 10,
    instructor: "Rakib",
    ratings: 4.9,
    duration: "130.5 total hours",
    level: "All Level",
  },
];

export default function ShoppingCart() {
  return (
    <div>
      <div className="container my-32">
        <h1 className="mt-4 text-xl font-bold lg:text-2xl">Shopping Cart</h1>
        <div className="my-5">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 lg:col-span-8">
              <p
                className="border-b border-gray-400 pb-3 text-base font-semibold"
                color="text-slate-700"
              >
                {courseData.length} Course in cart
              </p>
              <div className="mt-6 flex flex-col gap-y-6">
                {courseData.map((course) => (
                  <div key={course.id} className="grid grid-cols-12 gap-3">
                    <div className="col-span-12 lg:col-span-3">
                      <Image
                        src={course.thumbnail}
                        alt={course.title}
                        height={300}
                        width={400}
                        className="rounded"
                      />
                    </div>
                    <div className="col-span-12 lg:col-span-5">
                      <h3 className="text-xl font-bold lg:text-lg">
                        {course.title}
                      </h3>
                      <p className="mt-1 text-sm font-medium">
                        By {course.instructor}
                      </p>
                      <div className="mt-2 flex items-center gap-2 font-bold">
                        <span>{course.ratings}</span>
                        <CustomRating value={course.ratings} />
                      </div>

                      <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{course.duration}</span>
                        <span>- {course.level}</span>
                      </div>
                    </div>
                    <div className="col-span-6 lg:col-span-2">
                      <Button variant="link" className="text-red-500">
                        Remove
                      </Button>
                    </div>
                    <div className="col-span-6 lg:col-span-2">
                      <p className="text-lg font-bold">${course.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-12 lg:col-span-3">
              <p className="font-bold" color="text-slate-700">
                Total:
              </p>
              <h2 className="mt-2 text-4xl font-bold" color="text-slate-800">
                $10
              </h2>
              <div className="mt-3">
                <Button className="w-full">Checkout</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
