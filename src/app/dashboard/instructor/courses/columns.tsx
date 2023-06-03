"use client";

import { type ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import Image from "next/image";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

export type Course = {
  id: string;
  title: string;
  image: string;
  status: "published" | "drafted";
  createdAt: string;
  duration: string;
  price: string;
  level: string;
};

export const columns: ColumnDef<Course>[] = [
  {
    accessorKey: "",
    header: "Course",
    cell: ({ row }) => {
      const data = row.original;

      return (
        <div className="items-top flex gap-x-2">
          <div className="shrink-0">
            <Image
              src={data.image}
              alt={data.title}
              height={70}
              width={100}
              className="rounded"
            />
          </div>
          <div>
            <h3 className="font-medium">{data.title}</h3>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "duration",
    header: "Duration",
  },
  {
    accessorKey: "price",
    header: "price",
  },
  {
    accessorKey: "level",
    header: "Level",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => {
      const data = row.original;

      return <div>{new Date(data.createdAt).toDateString()}</div>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
