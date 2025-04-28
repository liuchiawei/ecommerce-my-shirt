import SectionTitle from "@/components/ui/sectionTitle";
import FeatureCarousel, { CarouselItem } from "@/components/FeatureCarousel";

// TODO: 画像を追加
const featuredItems: CarouselItem[] = [
  {
    id: 1,
    title: "シンプルなデザイン",
    description: "シンプルなデザインです。",
    image: "/images/feature_1.jpg",
    link: "/featured-1",
  },
  {
    id: 2,
    title: "舒適性が高い",
    description: "シンプルなデザインです。",
    image: "/images/feature_2.jpg",
    link: "/featured-2",
  },
  {
    id: 3,
    title: "高品質な素材",
    description: "100%の綿で作られています。",
    image: "/images/feature_3.jpg",
    link: "/featured-3",
  },
];

export default function Featured() {
  return (
    <div className="relative w-full max-w-6xl mx-auto flex flex-col md:flex-row">
      <SectionTitle text="featured" />
      <FeatureCarousel items={featuredItems} />
    </div>
  );
}
