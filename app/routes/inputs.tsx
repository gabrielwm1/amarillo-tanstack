import { ProfileForm } from "@/components/profile-form";
import { Input } from "@/components/ui/input";
import { createFileRoute } from "@tanstack/react-router";
import { BanIcon, DownloadIcon } from "lucide-react";
export const Route = createFileRoute("/inputs")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-4 max-w-sm mx-auto mt-10">
      <ProfileForm />
      <Input placeholder="name" />
      <Input placeholder="end icon" end={<DownloadIcon size={16} />} />
      <Input
        placeholder="disabled"
        disabled
        start={<BanIcon className="text-neutral-6" size={16} />}
      />
    </div>
  );
}
