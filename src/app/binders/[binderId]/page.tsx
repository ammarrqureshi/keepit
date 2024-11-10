import { Heading1 } from "@/components/ui/heading";
import { binders } from "@/data";
import { Separator } from "@/components/ui/separator";
import BinderIconButton from "@/components/binder-icon-button";
import { FiPenTool, FiPlus, FiTrash } from "react-icons/fi";
import { Button } from "@/components/ui/button";

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
        <BinderIconButton
          variant="secondary"
          className="p-8"
          icon={FiPenTool}
          iconStyle="scale-[2]"
        />
        <div className="flex justify-between items-center ">
          <Heading1>{binder.title}</Heading1>
          <div className="flex justify-between items-center gap-4">
            <Button variant="ghost" size="smIcon">
              <FiTrash />
            </Button>
            <Button variant="default" size="smIcon">
              <FiPlus />
            </Button>
          </div>
        </div>
        <Separator />
      </div>
      {binder.pages?.map((page) => <div>{page}</div>)}
    </div>
  );
}
