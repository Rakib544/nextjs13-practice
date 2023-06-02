"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";

const FormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("This is not a valid email"),
});

export default function ForgetPassword() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <div className="container z-10 my-32">
      <div className="grid grid-cols-2 items-center gap-2 rounded-xl border">
        <div className="col-span-2 md:col-span-1">
          <Image
            src="https://lms-course.netlify.app/static/media/front_login.3af98aba0e8ec2a0680e.jpg"
            alt="login"
            width={500}
            height={900}
            className="h-full w-full rounded-bl-xl rounded-tl-xl"
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="p-4 md:p-16">
            <h1 className="mb-8 text-xl font-bold">Password Recovery</h1>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="max-w-lg space-y-4"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Reset Password
                </Button>
              </form>
            </Form>
            <div className="mt-4 text-center">
              <div className="flex justify-center">
                <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
                  or
                </span>
              </div>
              <Button onClick={() => signIn()} variant="link">
                Singin
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
