import SectionTitle from "@/components/ui/sectionTitle";
import HomeCarousel, { CarouselItem } from "@/components/FeatureCarousel";

// TODO: 画像を追加
const featuredItems: CarouselItem[] = [
  {
    id: 1,
    title: "Featured Item 1",
    description: "This is the first featured item",
    image: "/images/featured-1.jpg",
    link: "/featured-1",
  },
  {
    id: 2,
    title: "Featured Item 2",
    description: "This is the second featured item",
    image: "/images/featured-2.jpg",
    link: "/featured-2",
  },
  {
    id: 3,
    title: "Featured Item 3",
    description: "This is the third featured item",
    image: "/images/featured-3.jpg",
    link: "/featured-3",
  },
];

export default function Featured() {
  return (
    <div className="relative w-full max-w-6xl mx-auto flex flex-col md:flex-row">
      <SectionTitle text="featured" />
      <HomeCarousel items={featuredItems} />
    </div>
  );
}
