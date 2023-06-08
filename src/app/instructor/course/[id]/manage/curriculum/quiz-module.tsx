"use client";
import { CheckCircle2, Plus, X } from "lucide-react";
import * as React from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Button } from "~/components/ui/button";
import QuestionCreateForm from "./question-create-form";

export function QuizModule() {
  const [showQuestionCreateField, setShowQuestionCreateField] =
    React.useState(false);
  return (
    <AccordionItem value="item-2" className="rounded-lg border px-3">
      <AccordionTrigger>
        <div className="flex items-center justify-between gap-x-2">
          <div className="items-top flex gap-1 text-sm">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0" /> Quiz 1: Hello
            world Hello world Hello world Hello world
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <div className="mt-3">
          {!showQuestionCreateField ? (
            <Button
              onClick={() => setShowQuestionCreateField(true)}
              variant="outline"
              className="flex items-center gap-0.5"
            >
              <Plus size={16} /> Questions
            </Button>
          ) : null}
          <div className="flex justify-end">
            {showQuestionCreateField ? (
              <Button
                onClick={() => setShowQuestionCreateField(false)}
                variant="outline"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white p-0"
              >
                <X size={16} />
              </Button>
            ) : null}
          </div>
          {showQuestionCreateField ? <QuestionCreateForm /> : null}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
