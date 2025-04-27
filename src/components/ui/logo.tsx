import Link from "next/link";

export default function Logo() {
  return (
    <div className="absolute top-5 left-1/2 -translate-x-1/2 z-50 w-full md:w-[240px] text-white md:text-foreground font-normal text-3xl text-center select-none">
      <Link href="/">
        not
        <span className="font-black"> shirt</span>
      </Link>
    </div>
  );
}
