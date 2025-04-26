import React from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      <input placeholder="Search" className="py-2 px-4 rounded-full border border-foreground/20" />
      <Button variant="ghost" className="absolute right-1 top-1/2 -translate-y-1/2 cursor-pointer rounded-full">
        <Search />
      </Button>
    </div>
  );
}
