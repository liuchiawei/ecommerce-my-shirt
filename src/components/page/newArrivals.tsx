import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SectionTitle from "@/components/ui/sectionTitle";
import PageButton from "../ui/pageButton";

interface NewArrivalsItemProps {
  id: number;
  image: string;
  name: string;
  price: number;
}

const newArrivalsItems: NewArrivalsItemProps[] = [
  {
    id: 1,
    image: "/images/product_1.jpg",
    name: "ダブルブレストスーツ",
    price: 248000,
  },
  {
    id: 2,
    image: "/images/product_2.jpg",
    name: "シングルブレストスーツ",
    price: 262000,
  },
  {
    id: 3,
    image: "/images/product_3.jpg",
    name: "ワイドTシャツ",
    price: 4800,
  },
  {
    id: 4,
    image: "/images/product_4.jpg",
    name: "ストライプネクタイ",
    price: 3600,
  },
  {
    id: 5,
    image: "/images/product_5.jpg",
    name: "レディースニットタートルネック",
    price: 8800,
  },
];

export default function NewArrivals() {
  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <SectionTitle text="new arrivals" />
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="pl-0 md:pl-20">
          {newArrivalsItems.map((item) => (
            <CarouselItem
              key={item.id}
              className="basis-1/2 md:basis-1/3 lg:basis-1/4 cursor-grab active:cursor-grabbing"
            >
              <div className="p-1">
                <Card className="cursor-pointer">
                  <CardContent className="flex aspect-square items-center justify-center bg-stone-200 dark:bg-stone-300 overflow-hidden p-6">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={600}
                      height={600}
                      className="h-full w-full object-contain hover:scale-110 hover:brightness-105 transition-all duration-300"
                    />
                  </CardContent>
                  <CardFooter>
                    <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                    <h3 className="text-sm text-foreground/50">
                      ￥ {item.price} (税込)
                    </h3>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="cursor-pointer" />
        <CarouselNext className="cursor-pointer" />
      </Carousel>
      <PageButton text="view all" />
    </div>
  );
}
