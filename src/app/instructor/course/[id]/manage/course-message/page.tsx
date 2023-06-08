"use client";

import { useState } from "react";
import Quill from "~/components/shared/quill-editor";
import { Button } from "~/components/ui/button";

export default function CoursePricing() {
  const [welcomeMessage, setWelcomeMessage] = useState<string>("");
  const [congratulationMessage, setCongratulationMessage] =
    useState<string>("");

  console.log(welcomeMessage, congratulationMessage);

  return (
    <div className="space-y-4">
      <div>
        <h3 className="mb-1 text-xl font-medium">Course messages</h3>
        <p className="text-sm text-muted-foreground">
          Write messages to your students (optional) that will be sent
          automatically when they join or complete your course to encourage
          students to engage with course content. If you do not wish to send a
          welcome or congratulations message, leave the text box blank.
        </p>
      </div>
      <div>
        <p className="text-sm font-medium">Welcome Message</p>
        <div className="my-1">
          <Quill setEditorValue={setWelcomeMessage} />
        </div>
      </div>
      <div>
        <p className="text-sm font-medium">Congratulations Message</p>
        <div className="my-1">
          <Quill setEditorValue={setCongratulationMessage} />
        </div>
      </div>
      <Button>Update</Button>
    </div>
  );
}
