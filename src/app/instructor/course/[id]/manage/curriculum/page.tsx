import { Accordion } from "~/components/ui/accordion";
import { Card } from "~/components/ui/card";
import CurriculumItemButton from "./curriculum-item-button";
import { LectureModule } from "./lecture-module";
import { QuizModule } from "./quiz-module";

export default function CourseCurriculum() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-1 text-xl font-medium">Curriculum</h3>
        <p className="text-sm text-muted-foreground">
          Start putting together your course by creating sections, lectures and
          practice (quizzes, coding exercises and assignments).
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Start putting together your course by creating sections, lectures and
          practice activities (quizzes, coding exercises and assignments). Use
          your course outline to structure your content and label your sections
          and lectures clearly. If you’re intending to offer your course for
          free, the total length of video content must be less than 2 hours.
        </p>
      </div>
      <div>
        <Card className="px-4 py-6">
          <h3 className="mb-4 font-semibold">Section 1: test</h3>
          <div className="space-y-4">
            <Accordion type="single" collapsible className="w-full space-y-3">
              <LectureModule />
              <QuizModule />
            </Accordion>
          </div>
          <CurriculumItemButton />
        </Card>
      </div>
    </div>
  );
}
