import BinderWrapper from "@/components/binder-wrapper";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
export default function Home() {
  return (
    <div>
      <Input placeholder="Start writing..." />
      <div className="flex flex-col gap-4 my-4">
        <h2 className="font-bold text-2xl">Binders</h2>
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
