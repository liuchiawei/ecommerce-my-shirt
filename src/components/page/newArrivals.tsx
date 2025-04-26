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
          {Array.from({ length: 6 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 md:basis-1/3 lg:basis-1/4 cursor-grab active:cursor-grabbing"
            >
              <div className="p-1">
                <Card className="cursor-pointer">
                  <CardContent className="flex aspect-square items-center justify-center bg-red-500">
                    <span className="text-5xl font-semibold">{index + 1}</span>
                  </CardContent>
                  <CardFooter>
                    <h2 className="text-xl font-bold">
                      {index + 1}
                    </h2>
                    <h3 className="text-sm text-foreground/50">
                      ￥ {index + 1} (税込)
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
