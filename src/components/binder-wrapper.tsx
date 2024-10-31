import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { FiEdit2, FiPenTool, FiShare } from "react-icons/fi";
import BinderIconButton from "./binder-icon-button";

const binders = [
  {
    title: "My diary",
    description: "Lorepdf ajdf f dfdlj df ",
    color: "cyan",
  },
  {
    title: "My diary",
    description:
      "dfk dflkj dlfj dfkjdskfj dfj dkfj dfdjfj difdj fdkf jdf j dfdfj ddf ",
    color: "zinc",
  },
  {
    title: "My diary",
    description: "Lorepdf ajdf f dfdlj df Lorepdf aj",
    color: "amber",
  },
  {
    title: "My diary",
    description:
      "Lorepdf ajdf f dfdlj df Lorepdf ajdf f dfdlj df Lorepdf ajdf f dfdlj df Lorepdf ajdf f dfdlj df Lorepdf ajdf f dfdlj df Lorepdf ajdf f dfdlj df Lorepdf ajdf f dfdlj df Lorepdf ajdf f dfdlj df Lorepdf ajdf f dfdlj df Lorepdf ajdf f dfdlj df Lorepdf ajdf f dfdlj df Lorepdf ajdf f dfdlj df Lorepdf ajdf f dfdlj df Lorepdf ajdf f dfdlj df Lorepdf ajdf f dfdlj df Lorepdf ajdf f dfdlj df Lorepdf ajdf f dfdlj df Lorepdf ajdf f dfdlj df Lorepdf ajdf f dfdlj df Lorepdf ajdf f dfdlj df ",
    color: "red",
  },
];
export default function BinderWrapper() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full "
    >
      <CarouselContent>
        {binders.map((binder, index) => (
          <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/4 ">
            <div className="p-1 h-full ">
              <Card className="flex flex-col h-64 overflow-hidden relative">
                <span className="h-[5px] bg-transparent border-t-8 border-dashed border-secondary  w-full absolute top-0"></span>
                <CardHeader className="flex-none">
                  <div className="flex gap-2  items-center ">
                    <BinderIconButton icon={FiPenTool} />
                    {binder.title}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow  pb-16 overflow-hidden">
                  <p className="text-xs text-zinc-700 line-clamp-3">
                    {binder.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xs text-zinc-500">20 Feb 2024</p>
                    <div className="flex justify-between gap-2">
                      <Button size="smIcon" variant="outline">
                        <FiShare />
                      </Button>
                      <Button size="smIcon" variant="outline">
                        <FiEdit2 />
                      </Button>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="h-full w-24  absolute top-0 right-0 bg-gradient-to-l from-background"></div>
    </Carousel>
  );
}
