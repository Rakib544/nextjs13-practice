import { Search } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";

export function SearchModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="rounded-full">
          <Search className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <div className="grid gap-4 py-4">
          <div>
            <Input
              id="search"
              value="Search course here..."
              type="search"
              className="!border-b"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
