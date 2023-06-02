"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
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
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export default function Signin() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: true,
      callbackUrl: "/",
    });
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
            <h1 className="mb-8 text-xl font-bold">Log in to your account</h1>
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
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </form>
            </Form>
            <div className="mt-12 text-center">
              <Link
                href="/auth/forget-password"
                className="inline-block hover:underline"
              >
                Forgot your password?
              </Link>
              <span className="mt-3 block">
                Don&apos;t have an account?{" "}
                <Link href="/auth/singup" className="hover:underline">
                  {" "}
                  SignUp
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
