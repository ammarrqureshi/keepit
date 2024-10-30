import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { FiPenTool } from "react-icons/fi";

export default function BinderWrapper() {
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
              <Card>
                <CardHeader>
                  <div>
                    <div className="flex gap-2  items-center ">
                      <Button size="icon" variant="destructive">
                        <FiPenTool />
                      </Button>
                      My Diary
                    </div>
                  </div>
                </CardHeader>
                <CardContent>hre is na lorem ipsum noe etc et</CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="h-full w-24  absolute top-0 right-0 bg-gradient-to-l from-white"></div>
    </Carousel>
  );
}
