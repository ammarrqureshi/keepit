import BinderWrapper from "@/components/binder-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div>
      <Input placeholder="Start writing..." />
      <div className="flex flex-col gap-4 my-4">
        <div className="flex justify-between items-center ">
          <h2 className="font-bold text-2xl">Binders</h2>
          <Button variant="link">See all</Button>
        </div>
        <Separator />
      </div>
      <div>
        <BinderWrapper />
      </div>
      <div className="flex flex-col gap-4 my-4">
        <h2 className="font-bold text-2xl">Pages</h2>
        <Separator />
      </div>
    </div>
  );
}
