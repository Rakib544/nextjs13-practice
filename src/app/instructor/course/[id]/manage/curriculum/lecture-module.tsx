"use client";
import { CheckCircle2, Plus, X } from "lucide-react";
import * as React from "react";
import Quill from "~/components/shared/quill-editor";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

export function LectureModule() {
  const [currentField, setCurrentField] = React.useState("");
  return (
    <AccordionItem value="item-1" className="rounded-lg border px-3 ">
      <AccordionTrigger>
        <div className="flex items-center justify-between gap-x-2">
          <div className="items-top flex gap-1 text-sm">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0" /> Lecture 1:
            Hello world Hello world Hello world Hello world
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        {currentField === "" ? (
          <div className="relative mt-3 flex flex-col items-center gap-2 lg:flex-row">
            <Button
              variant="outline"
              onClick={() => setCurrentField("content")}
              className="flex items-center gap-0.5"
            >
              <Plus size={16} /> Content
            </Button>
            <Button
              variant="outline"
              onClick={() => setCurrentField("description")}
              className="flex items-center gap-0.5"
            >
              <Plus size={16} /> Description
            </Button>
            <Button
              variant="outline"
              onClick={() => setCurrentField("resources")}
              className="flex items-center gap-0.5"
            >
              <Plus size={16} /> Resources
            </Button>
          </div>
        ) : null}
        <div className="flex justify-end">
          {currentField !== "" ? (
            <Button
              onClick={() => setCurrentField("")}
              variant="outline"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white p-0"
            >
              <X size={16} />
            </Button>
          ) : null}
        </div>
        {currentField === "content" ? <LectureField /> : null}
        {currentField === "description" ? <DescriptionField /> : null}
        {currentField === "resources" ? <ResourceField /> : null}
      </AccordionContent>
    </AccordionItem>
  );
}

function DescriptionField() {
  const [description, setDescription] = React.useState("");
  console.log(description);
  return (
    <div>
      <Quill setEditorValue={setDescription} />
    </div>
  );
}

function LectureField() {
  const [lecture, setLecture] = React.useState<File | null>(null);
  console.log(lecture);
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setLecture(event.target.files[0]);
    }
  };
  return (
    <div>
      <Label htmlFor="lecture">Upload Lecture</Label>
      <Input id="lecture" type="file" onChange={handleImageChange} />
    </div>
  );
}

function ResourceField() {
  const [resource, setResource] = React.useState<File | FileList | null>(null);
  console.log(resource);
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setResource(event.target.files);
    }
  };
  return (
    <div>
      <Label htmlFor="lecture">Upload Resource</Label>
      <Input id="lecture" type="file" onChange={handleImageChange} />
    </div>
  );
}
