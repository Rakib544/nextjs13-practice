"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsUpDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Quill from "~/components/shared/quill-editor";
import { AspectRatio } from "~/components/ui/aspect-ratio";
import { Button } from "~/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "~/components/ui/command";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { cn } from "~/lib/utils";

const languages = [
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Spanish", value: "es" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
  { label: "Chinese", value: "zh" },
] as const;

const levels = [
  { label: "Beginner Level", value: "beginner" },
  { label: "Intermediate Level", value: "intermediate" },
  { label: "Expert Level", value: "expert" },
  { label: "All Level", value: "all" },
] as const;

const categories = [
  { label: "Development", value: "Development" },
  { label: "Business", value: "Business" },
  { label: "Finance & Banking", value: "Finance & Banking" },
  { label: "IT & Software", value: "IT & Software" },
  { label: "Personal Development", value: "Personal Development" },
  { label: "Design", value: "Design" },
  { label: "Marketing", value: "Marketing" },
  { label: "Lifestyle", value: "Lifestyle" },
  { label: "Photography & Video", value: "Photography & Video" },
  { label: "Health & Fitness", value: "Health & Fitness" },
  { label: "Music", value: "Music" },
  { label: "Teaching & Academic", value: "Teaching & Academic" },
] as const;

const FormSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Title is required" })
    .max(60, { message: "Title must be less then 60 characters" }),
  subtitle: z
    .string()
    .min(1, { message: "Subtitle is required" })
    .max(45, { message: "Subtitle must be less then 45 characters" }),
  language: z.string({
    required_error: "Please select a language.",
  }),
  level: z.string({
    required_error: "Please select a level.",
  }),
  category: z.string({
    required_error: "Please select a category.",
  }),
});

export default function CourseBasics() {
  const [description, setDescription] = useState<string>("");
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  console.log(description);

  return (
    <div className="space-y-10">
      <div>
        <h3 className="mb-1 text-xl font-medium">Course landing page</h3>
        <p className="text-sm text-muted-foreground">
          Your course landing page is crucial to your success on Ushtaze. If
          it’s done right, it can also help you gain visibility in search
          engines like Google. As you complete this section, think about
          creating a compelling Course Landing Page that demonstrates why
          someone would want to enroll in your course. Learn more about creating
          your course landing page and course title standards.
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          If you intend to offer your course for free, the total length of video
          content must be less than 2 hours.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Course Title</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Insert you course title" />
                </FormControl>
                <FormDescription>
                  Your title should be a mix of attention-grabbing, informative,
                  and optimized for search
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subtitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Course Subtitle</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Insert you course subtitle" />
                </FormControl>
                <FormDescription>
                  Use 1 or 2 related keywords, and mention 3-4 of the most
                  important areas that you&apos;ve covered during your course.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <FormLabel>Description</FormLabel>
            <div className="my-1">
              <Quill
                setEditorValue={setDescription}
                placeholder="Insert your course description"
              />
            </div>
            <FormDescription>
              Description should have minimum 200 words.
            </FormDescription>
          </div>
          <div>
            <FormLabel>Basic Info</FormLabel>
            <div className="my-1 grid grid-cols-12 gap-4">
              <div className="col-span-12 lg:col-span-4">
                <FormField
                  control={form.control}
                  name="language"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              role="combobox"
                              className={cn(
                                "w-full justify-between",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value
                                ? languages.find(
                                    (language) => language.value === field.value
                                  )?.label
                                : "Select language"}
                              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                          <Command>
                            <CommandInput placeholder="Search language..." />
                            <CommandEmpty>No language found.</CommandEmpty>
                            <CommandGroup>
                              {languages.map((language) => (
                                <CommandItem
                                  value={language.value}
                                  key={language.value}
                                  onSelect={(value) => {
                                    form.setValue("language", value);
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4",
                                      language.value === field.value
                                        ? "opacity-100"
                                        : "opacity-0"
                                    )}
                                  />
                                  {language.label}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </Command>
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-12 lg:col-span-4">
                <FormField
                  control={form.control}
                  name="level"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              role="combobox"
                              className={cn(
                                "w-full justify-between",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value
                                ? levels.find(
                                    (level) => level.value === field.value
                                  )?.label
                                : "Select Level"}
                              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                          <Command>
                            <CommandInput placeholder="Search level..." />
                            <CommandEmpty>No Level found.</CommandEmpty>
                            <CommandGroup>
                              {levels.map((level) => (
                                <CommandItem
                                  value={level.value}
                                  key={level.value}
                                  onSelect={(value) => {
                                    form.setValue("level", value);
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4",
                                      level.value === field.value
                                        ? "opacity-100"
                                        : "opacity-0"
                                    )}
                                  />
                                  {level.label}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </Command>
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-12 lg:col-span-4">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              role="combobox"
                              className={cn(
                                "w-full justify-between",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value
                                ? categories.find(
                                    (category) => category.value === field.value
                                  )?.label
                                : "Select category"}
                              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                          <Command>
                            <CommandInput placeholder="Search category..." />
                            <CommandEmpty>No category found.</CommandEmpty>
                            <CommandGroup>
                              {categories.map((category) => (
                                <CommandItem
                                  value={category.value}
                                  key={category.value}
                                  onSelect={(value) => {
                                    form.setValue("category", value);
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4",
                                      category.value === field.value
                                        ? "opacity-100"
                                        : "opacity-0"
                                    )}
                                  />
                                  {category.label}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </Command>
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
          <div>
            <FormLabel>Course Image</FormLabel>
            <div className="item my-1 grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-6 lg:col-span-6">
                <AspectRatio ratio={16 / 9} className="border bg-muted">
                  <Image
                    src="https://s.udemycdn.com/course/750x422/placeholder.jpg"
                    alt="Photo by Drew Beamer"
                    fill
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-6">
                <p className="mb-3 text-sm text-muted-foreground">
                  Upload your course image here. It must meet our course image
                  quality standards to be accepted. Important guidelines:
                  750x422 pixels; .jpg, .jpeg,. gif, or .png. no text on the
                  image.
                </p>
                <Input id="picture" type="file" />
              </div>
            </div>
          </div>
          <Button type="submit">Update</Button>
        </form>
      </Form>
    </div>
  );
}
