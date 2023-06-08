"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { PlusCircle, Trash } from "lucide-react";
import { useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "~/components/ui/button";
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
import { Separator } from "~/components/ui/separator";
import { cn } from "~/lib/utils";

const goalsFormSchema = z.object({
  objectives: z.array(
    z.object({
      value: z.string().min(1, { message: "This field is required" }),
    })
  ),
  prerequisites: z.array(
    z.object({
      value: z.string().min(1, { message: "This field is required" }),
    })
  ),
  targetAudiences: z.array(
    z.object({
      value: z.string().min(1, { message: "This field is required" }),
    })
  ),
});

type GoalsFormValues = z.infer<typeof goalsFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<GoalsFormValues> = {
  objectives: [
    {
      value:
        "Example: Define the roles and responsibilities of a project manager",
    },
    {
      value: "Example: Identify and manage project risks",
    },
    {
      value: "Example: learn how to analysis the requirements",
    },
    {
      value: "Example: Learn how to setup project for production application",
    },
  ],
  prerequisites: [
    {
      value:
        "Example: No prior programming language is required. You will learn everything from here",
    },
  ],
  targetAudiences: [
    {
      value:
        "Example: Beginner python developer curious about to learn Data Science",
    },
  ],
};

export default function CourseGoals() {
  const form = useForm<GoalsFormValues>({
    resolver: zodResolver(goalsFormSchema),
    defaultValues,
    mode: "onChange",
  });

  const {
    fields: objectivesField,
    append: objectiveAppend,
    remove: removeObjectives,
  } = useFieldArray({
    name: "objectives",
    control: form.control,
  });

  const {
    fields: prerequisitesField,
    append: prerequisitesAppend,
    remove: removePrerequisites,
  } = useFieldArray({
    name: "prerequisites",
    control: form.control,
  });

  const {
    fields: targetAudiencesField,
    append: targetAudiencesAppend,
    remove: removeTargetAudience,
  } = useFieldArray({
    name: "targetAudiences",
    control: form.control,
  });

  function onSubmit(data: GoalsFormValues) {
    console.log(data);
  }
  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-1 text-xl font-medium">Intended learners</h3>
        <p className="text-sm text-muted-foreground">
          The following descriptions will be publicly visible on your Course
          Landing Page and will have a direct impact on your course performance.
          These descriptions will help learners decide if your course is right
          for them.
        </p>
      </div>
      <Separator />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
          <div>
            {objectivesField.map((field, index) => (
              <FormField
                control={form.control}
                key={field.id}
                name={`objectives.${index}.value`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      className={`${cn(index !== 0 && "sr-only")} text-lg`}
                    >
                      What will students learn in your course?
                    </FormLabel>
                    <FormDescription className={cn(index !== 0 && "sr-only")}>
                      You must enter at least 4 learning objectives or outcomes
                      that learners can expect to achieve after completing your
                      course.
                    </FormDescription>
                    <FormControl>
                      <div className="flex items-center gap-1">
                        <Input {...field} />
                        {index >= 4 && (
                          <Button
                            variant="link"
                            onClick={() => removeObjectives(index)}
                            size="sm"
                            type="button"
                          >
                            <Trash size={18} />{" "}
                          </Button>
                        )}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <Button
              type="button"
              variant="link"
              size="sm"
              className="mt-1 flex items-center gap-1"
              onClick={() => objectiveAppend({ value: "" })}
            >
              <PlusCircle size={17} /> Add more to your response
            </Button>
          </div>
          <Separator />
          <div>
            {prerequisitesField.map((field, index) => (
              <FormField
                control={form.control}
                key={field.id}
                name={`prerequisites.${index}.value`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      className={`${cn(index !== 0 && "sr-only")} text-lg`}
                    >
                      What are the requirements or prerequisites for taking your
                      course?
                    </FormLabel>
                    <FormDescription className={cn(index !== 0 && "sr-only")}>
                      List the required skills, experience, tools or equipment
                      learners should have prior to taking your course. If there
                      are no requirements, use this space as an opportunity to
                      lower the barrier for beginners.
                    </FormDescription>
                    <FormControl>
                      <div className="flex items-center gap-1">
                        <Input {...field} />
                        {index >= 2 && (
                          <Button
                            variant="link"
                            onClick={() => removePrerequisites(index)}
                            size="sm"
                            type="button"
                          >
                            <Trash size={18} />{" "}
                          </Button>
                        )}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <Button
              type="button"
              variant="link"
              size="sm"
              className="mt-1 flex items-center gap-1"
              onClick={() => prerequisitesAppend({ value: "" })}
            >
              <PlusCircle size={17} /> Add more to your response
            </Button>
          </div>
          <Separator />
          <div>
            {targetAudiencesField.map((field, index) => (
              <FormField
                control={form.control}
                key={field.id}
                name={`targetAudiences.${index}.value`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      className={`${cn(index !== 0 && "sr-only")} text-lg`}
                    >
                      Who is this course for?
                    </FormLabel>
                    <FormDescription className={cn(index !== 0 && "sr-only")}>
                      Write a clear description of the intended learners for
                      your course who will find your course content valuable.
                      This will help you attract the right learners to your
                      course.
                    </FormDescription>
                    <FormControl>
                      <div className="flex items-center gap-1">
                        <Input {...field} />
                        {index >= 2 && (
                          <Button
                            variant="link"
                            onClick={() => removeTargetAudience(index)}
                            size="sm"
                            type="button"
                          >
                            <Trash size={18} />{" "}
                          </Button>
                        )}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <Button
              type="button"
              variant="link"
              size="sm"
              className="mt-1 flex items-center gap-1"
              onClick={() => targetAudiencesAppend({ value: "" })}
            >
              <PlusCircle size={17} /> Add more to your response
            </Button>
          </div>
          <Button type="submit">Update</Button>
        </form>
      </Form>
    </div>
  );
}
