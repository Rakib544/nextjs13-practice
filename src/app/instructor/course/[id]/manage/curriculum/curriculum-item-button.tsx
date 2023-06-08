"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, X } from "lucide-react";
import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Quill from "~/components/shared/quill-editor";
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
  title: z
    .string()
    .min(1, { message: "Title is required" })
    .max(60, { message: "Title must be less than 60 characters" }),
});

export default function CurriculumItemButton() {
  const [showOptions, setShowOptions] = React.useState(false);
  return (
    <div>
      {!showOptions ? (
        <Button
          onClick={() => setShowOptions(true)}
          variant="outline"
          className="mt-4 flex items-center gap-0.5"
        >
          <Plus size={16} /> Curriculum Item
        </Button>
      ) : null}
      {showOptions ? (
        <div className="relative mt-4 flex rounded-lg border border-dashed px-2 py-2">
          <Button
            onClick={() => setShowOptions(false)}
            variant="outline"
            className="absolute -left-4 -top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white p-0"
          >
            <X size={16} />
          </Button>
          <Options />
        </div>
      ) : null}
    </div>
  );
}

function Options() {
  const [currentField, setCurrentField] = React.useState("");
  return (
    <div className="w-full">
      {currentField === "" ? (
        <div className="flex">
          <Button
            variant="link"
            onClick={() => setCurrentField("lecture")}
            className="flex items-center gap-0.5"
          >
            <Plus size={16} /> Lecture
          </Button>
          <Button
            variant="link"
            onClick={() => setCurrentField("quiz")}
            className="flex items-center gap-0.5"
          >
            <Plus size={16} /> Quiz
          </Button>
        </div>
      ) : null}
      <div>
        {currentField === "lecture" ? <LectureForm /> : null}
        {currentField === "quiz" ? <QuizForm /> : null}
      </div>
    </div>
  );
}

function LectureForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Lecture</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter a title" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
}

function QuizForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const [description, setDescription] = React.useState("");

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data, description);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Quiz</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter a title" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <Quill setEditorValue={setDescription} />
        </div>
        <div className="flex justify-end">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
}
