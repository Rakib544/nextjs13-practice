import { zodResolver } from "@hookform/resolvers/zod";
import { PlusCircle } from "lucide-react";
import * as React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import Quill from "~/components/shared/quill-editor";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { Textarea } from "~/components/ui/textarea";

const goalsFormSchema = z.object({
  test: z.string(),
  targetAudiences: z.array(
    z.object({
      answer: z.string().min(1, { message: "This field is required" }),
      description: z.string().min(1, { message: "This field is required" }),
      correctAnswer: z.string(),
    })
  ),
});

type GoalsFormValues = z.infer<typeof goalsFormSchema>;

const defaultValues: Partial<GoalsFormValues> = {
  targetAudiences: [
    {
      answer: "",
      description: "",
      correctAnswer: "",
    },
  ],
};

export default function QuestionCreateForm() {
  const [question, setQuestion] = React.useState("");
  const form = useForm<GoalsFormValues>({
    resolver: zodResolver(goalsFormSchema),
    defaultValues,
    mode: "onChange",
  });

  console.log(question);
  const { fields: targetAudiencesField, append: targetAudiencesAppend } =
    useFieldArray({
      name: "targetAudiences",
      control: form.control,
    });

  function onSubmit(data: GoalsFormValues) {
    console.log(data);
  }
  return (
    <div>
      <Label>Question</Label>
      <Quill setEditorValue={setQuestion} />
      <Label className="mt-4 inline-block">Answers</Label>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="test"
            render={({ field }) => (
              <FormItem className="w-full space-y-3">
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormItem className="flex w-full items-center space-x-3 space-y-0">
                      <div className="w-full space-y-6">
                        {targetAudiencesField.map((field, index) => (
                          <div key={field.id} className="w-full space-y-2">
                            <div className="flex w-full gap-1">
                              <FormField
                                control={form.control}
                                name={`targetAudiences.${index}.correctAnswer`}
                                render={() => (
                                  <FormItem className="shrink-0">
                                    <FormControl>
                                      <div className="shrink-0">
                                        <RadioGroupItem value={`${index}`} />
                                      </div>
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name={`targetAudiences.${index}.answer`}
                                render={({ field }) => (
                                  <FormItem className="w-full">
                                    <FormControl>
                                      <div className="flex w-full flex-col items-center gap-1">
                                        <Textarea
                                          {...field}
                                          placeholder="Add an Answer"
                                        />
                                      </div>
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>

                            <FormField
                              control={form.control}
                              key={field.id}
                              name={`targetAudiences.${index}.description`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <div className="ml-5 flex flex-col items-center gap-1">
                                      <Input
                                        {...field}
                                        placeholder="Explain why this is or is not the best answer"
                                      />
                                    </div>
                                  </FormControl>
                                  <FormMessage className="ml-5" />
                                </FormItem>
                              )}
                            />
                          </div>
                        ))}
                        <Button
                          type="button"
                          variant="link"
                          size="sm"
                          className="mt-1 flex items-center gap-1"
                          onClick={() =>
                            targetAudiencesAppend({
                              answer: "",
                              description: "",
                              correctAnswer: "",
                            })
                          }
                        >
                          <PlusCircle size={17} /> Add more options
                        </Button>
                      </div>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end">
            <Button type="submit">Update</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
