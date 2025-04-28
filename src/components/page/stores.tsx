import Image from "next/image";
import SectionTitle from "@/components/ui/sectionTitle";
import PageButton from "@/components/ui/pageButton";

export default function Stores() {
  return (
    <div className="relative w-full max-w-6xl mx-auto flex flex-col justify-center items-center gap-4">
      {/* TODO: 店舗背景 */}
      <div className="bg-red-500 w-full max-w-[720px] h-[480px]">
        <Image
          src="/images/store_1.jpg"
          alt="store background"
          width={720}
          height={480}
          className="w-full h-full object-cover"
        />
      </div>
      <PageButton text="店舗一覧" />
      <SectionTitle text="stores" />
    </div>
  );
}
