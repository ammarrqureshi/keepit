import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function BindersWrapper() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full "
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
              <Card className="px-6 py-4 bg-amber-300">
                <h1>Binder 1</h1>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="h-full w-24  absolute top-0 right-0 bg-gradient-to-l from-white"></div>
    </Carousel>
  );
}
