import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      <Input placeholder="Search" className="w-full" />
      <Button variant="ghost" className="absolute right-0 top-0 cursor-pointer">
        <Search />
      </Button>
    </div>
  );
}
