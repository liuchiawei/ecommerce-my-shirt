import ThemeToggle from "./ThemeToggle";
import SearchBar from "./ui/searchBar";

export default function NavToolSet() {
  return (
    <div className="flex gap-2">
      <SearchBar />
      <ThemeToggle />
    </div>
  );
}
