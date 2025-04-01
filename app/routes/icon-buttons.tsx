import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";
import { createFileRoute } from "@tanstack/react-router";
import {
  Check,
  CheckCheck,
  Download,
  Info,
  Trash,
  TriangleAlert,
} from "lucide-react";

export const Route = createFileRoute("/icon-buttons")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-4 max-w-xl mx-auto mt-10">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <IconButton variant="primary">
          <Download size={16} />
        </IconButton>
        <IconButton variant="secondary">
          <Download size={16} />
        </IconButton>
        <IconButton variant="brand">
          <Download size={16} />
        </IconButton>
        <IconButton variant="ghost">
          <Download size={16} />
        </IconButton>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <IconButton variant="primary" size="sm">
          <Download size={16} />
        </IconButton>
        <IconButton variant="primary" size="md">
          <Download size={16} />
        </IconButton>
        <IconButton variant="primary" size="lg">
          <Download size={16} />
        </IconButton>
        <IconButton variant="primary" size="xl">
          <Download size={16} />
        </IconButton>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <IconButton variant="secondary" size="sm">
          <Download size={16} />
        </IconButton>
        <IconButton variant="secondary" size="md">
          <Download size={16} />
        </IconButton>
        <IconButton variant="secondary" size="lg">
          <Download size={16} />
        </IconButton>
        <IconButton variant="secondary" size="xl">
          <Download size={16} />
        </IconButton>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <IconButton variant="brand" size="sm">
          <Download size={16} />
        </IconButton>
        <IconButton variant="brand" size="md">
          <Download size={16} />
        </IconButton>
        <IconButton variant="brand" size="lg">
          <Download size={16} />
        </IconButton>
        <IconButton variant="brand" size="xl">
          <Download size={16} />
        </IconButton>
      </div>
      {/* disabled */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <IconButton variant="primary" size="sm" disabled>
          <Download size={16} />
        </IconButton>
        <IconButton variant="primary" size="md" disabled>
          <Download size={16} />
        </IconButton>
        <IconButton variant="primary" size="lg" disabled>
          <Download size={16} />
        </IconButton>
        <IconButton variant="primary" size="xl" disabled>
          <Download size={16} />
        </IconButton>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <IconButton variant="secondary" size="sm" disabled>
          <Download size={16} />
        </IconButton>
        <IconButton variant="secondary" size="md" disabled>
          <Download size={16} />
        </IconButton>
        <IconButton variant="secondary" size="lg" disabled>
          <Download size={16} />
        </IconButton>
        <IconButton variant="secondary" size="xl" disabled>
          <Download size={16} />
        </IconButton>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <IconButton variant="brand" size="sm" disabled>
          <Download size={16} />
        </IconButton>
        <IconButton variant="brand" size="md" disabled>
          <Download size={16} />
        </IconButton>
        <IconButton variant="brand" size="lg" disabled>
          <Download size={16} />
        </IconButton>
        <IconButton variant="brand" size="xl" disabled>
          <Download size={16} />
        </IconButton>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <IconButton variant="ghost" size="sm" disabled>
          <Download size={16} />
        </IconButton>
        <IconButton variant="ghost" size="md" disabled>
          <Download size={16} />
        </IconButton>
        <IconButton variant="ghost" size="lg" disabled>
          <Download size={16} />
        </IconButton>
        <IconButton variant="ghost" size="xl" disabled>
          <Download size={16} />
        </IconButton>
      </div>
      {/* loading  */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <IconButton variant="primary" size="sm" isLoading>
          <Download size={16} />
        </IconButton>
        <IconButton variant="primary" size="md" isLoading>
          <Download size={16} />
        </IconButton>
        <IconButton variant="primary" size="lg" isLoading>
          <Download size={16} />
        </IconButton>
        <IconButton variant="primary" size="xl" isLoading>
          <Download size={16} />
        </IconButton>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <IconButton variant="secondary" size="sm" isLoading>
          <Download size={16} />
        </IconButton>
        <IconButton variant="secondary" size="md" isLoading>
          <Download size={16} />
        </IconButton>
        <IconButton variant="secondary" size="lg" isLoading>
          <Download size={16} />
        </IconButton>
        <IconButton variant="secondary" size="xl" isLoading>
          <Download size={16} />
        </IconButton>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <IconButton variant="ghost" size="sm" isLoading>
          <Download size={16} />
        </IconButton>
        <IconButton variant="ghost" size="md" isLoading>
          <Download size={16} />
        </IconButton>
        <IconButton variant="ghost" size="lg" isLoading>
          <Download size={16} />
        </IconButton>
        <IconButton variant="ghost" size="xl" isLoading>
          <Download size={16} />
        </IconButton>
      </div>
      {/* semantic variants */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <IconButton variant="error" size="sm">
          <Trash size={16} />
        </IconButton>
        <IconButton variant="error" size="md">
          <Trash size={16} />
        </IconButton>
        <IconButton variant="error" size="lg">
          <Trash size={16} />
        </IconButton>
        <IconButton variant="error" size="xl">
          <Trash size={16} />
        </IconButton>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <IconButton variant="success" size="sm">
          <Check size={16} />
        </IconButton>
        <IconButton variant="success" size="md">
          <Check size={16} />
        </IconButton>
        <IconButton variant="success" size="lg">
          <Check size={16} />
        </IconButton>
        <IconButton variant="success" size="xl">
          <Check size={16} />
        </IconButton>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <IconButton variant="warning" size="sm">
          <TriangleAlert size={16} />
        </IconButton>
        <IconButton variant="warning" size="md">
          <TriangleAlert size={16} />
        </IconButton>
        <IconButton variant="warning" size="lg">
          <TriangleAlert size={16} />
        </IconButton>
        <IconButton variant="warning" size="xl">
          <TriangleAlert size={16} />
        </IconButton>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <IconButton variant="info" size="sm">
          <Info size={16} />
        </IconButton>
        <IconButton variant="info" size="md">
          <Info size={16} />
        </IconButton>
        <IconButton variant="info" size="lg">
          <Info size={16} />
        </IconButton>
        <IconButton variant="info" size="xl">
          <Info size={16} />
        </IconButton>
      </div>
    </div>
  );
}
