import BindersWrapper from "@/components/binders-wrapper";
import { Input } from "@/components/ui/input";
export default function Home() {
  return (
    <div>
      <div>
        <Input placeholder="Start writing..." />
      </div>
      <div>
        <BindersWrapper />
      </div>
    </div>
  );
}
