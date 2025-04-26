import React from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      <input placeholder="Search" className="w-full p-2 rounded-md" />
      <Button variant="ghost" className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer">
        <Search />
      </Button>
    </div>
  );
}
