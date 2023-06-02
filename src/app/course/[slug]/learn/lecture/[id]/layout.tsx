import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Button } from "~/components/ui/button";
import { ScrollArea } from "~/components/ui/scroll-area";
import { moduleData } from "~/data/module-data";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container z-10 my-20">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-8">
          <p className=" mb-3 mt-2 text-2xl font-bold">
            83-9 Starting of a new Journey with special message
          </p>
          {children}
          <div className="mt-3 flex justify-end">
            <div className="flex gap-4">
              <Button>Previous</Button>
              <Button>Next</Button>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <div className="mt-4 flex flex-col gap-y-3 p-1">
            <div className="flex items-center justify-between gap-3">
              <p className="shrink-0 font-bold">Course Content</p>
              <div className="h-2 w-full rounded-full bg-gray-300" />
            </div>
            <div className="mt-4 rounded-lg bg-gray-100 p-2">
              <input
                type="search"
                placeholder="Search here"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 font-medium placeholder:text-sm"
              />
            </div>
            <ScrollArea className="h-96 w-full rounded-md p-2">
              {moduleData.data.map((module) => (
                <div key={module._id} className="mb-3 text-left">
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full text-left"
                  >
                    <AccordionItem value={module.name} className="border-none">
                      <AccordionTrigger className="rounded-md  bg-gray-100 px-4  text-left">
                        {module.name}
                      </AccordionTrigger>
                      <AccordionContent>
                        {module.modules.map((data) => (
                          <Accordion
                            type="single"
                            collapsible
                            className="w-full text-left"
                            key={data._id}
                          >
                            <AccordionItem
                              value={data.name}
                              className="border-none"
                            >
                              <AccordionTrigger className="px-4 text-left">
                                {data.name}
                              </AccordionTrigger>
                              <AccordionContent className="px-4">
                                Yes. It adheres to the WAI-ARIA design pattern.
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              ))}
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  );
}
