import { Heading1 } from "@/components/ui/heading";
import { binders } from "@/data";
import { Separator } from "@/components/ui/separator";

export default async function Binder({
  params,
}: {
  params: Promise<{ binderId: string }>;
}) {
  const binderId = (await params).binderId;
  const binder = binders.find((binder) => binder.binderId === binderId);

  if (!binder) {
    return <div>No such Binder exists!</div>;
  }

  return (
    <div>
      <div className="flex flex-col justify-between gap-4 py-4">
        <Heading1>{binder.title}</Heading1>
        <Separator />
      </div>
      {binder.pages?.map((page) => <div>{page}</div>)}
    </div>
  );
}
