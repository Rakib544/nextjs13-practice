"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsUpDown } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
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
  FormField,
  FormItem,
  FormMessage,
} from "~/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { priceList } from "~/data/price-data";
import { cn } from "~/lib/utils";

const coursePrices = [{ label: "Free", value: "0" }, ...priceList] as const;

const FormSchema = z.object({
  price: z.string({
    required_error: "Please select a price.",
  }),
});

export default function CoursePricing() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <div className="space-y-10">
      <div>
        <h3 className="mb-1 text-xl font-medium">Course Price Tier</h3>
        <p className="text-sm text-muted-foreground">
          Please select the price tier for your course below and click
          &lsquo;Save&lsquo;. The list price that students will see in other
          currencies is determined using the price tier matrix.
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          If you intend to offer your course for free, the total length of video
          content must be less than 2 hours.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex">
            <Button className="rounded-br-none rounded-tr-none">$</Button>
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            "w-[200px] justify-between rounded-bl-none rounded-tl-none",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value
                            ? coursePrices.find(
                                (price) => price.value === field.value
                              )?.label
                            : "Select Price"}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput placeholder="Search price..." />
                        <CommandEmpty>No price found.</CommandEmpty>
                        <CommandGroup>
                          {coursePrices.map((price) => (
                            <CommandItem
                              value={price.value}
                              key={price.value}
                              onSelect={(value) => {
                                form.setValue("price", value);
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  price.value === field.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {price.label}
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
          <Button type="submit">Save</Button>
        </form>
      </Form>
    </div>
  );
}
