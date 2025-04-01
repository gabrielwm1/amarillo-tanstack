import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Ban, Check } from "lucide-react";

export const Route = createFileRoute("/buttons")({
  component: RouteComponent,
});

function RouteComponent() {
  console.log("testing where is the server");
  return (
    <div className="flex flex-col gap-4 max-w-xl mx-auto mt-10">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="brand">Brand</Button>
        {/* <Button variant="destructive">Destructive</Button> */}
        <Button variant="ghost">Ghost</Button>
      </div>
      {/* Base */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">Extra Large</Button>
        {/* <Button size="icon">Icon</Button> */}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button size="sm" variant="secondary" disabled>
          Small
        </Button>
        <Button size="md" variant="secondary">
          Medium
        </Button>
        <Button size="lg" variant="secondary">
          Large
        </Button>
        <Button size="xl" variant="secondary">
          Extra Large
        </Button>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button size="sm" variant="brand">
          Small
        </Button>
        <Button size="md" variant="brand">
          Medium
        </Button>
        <Button size="lg" variant="brand">
          Large
        </Button>
        <Button size="xl" variant="brand">
          Extra Large
        </Button>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button size="sm" variant="ghost">
          Small
        </Button>
        <Button size="md" variant="ghost">
          Medium
        </Button>
        <Button size="lg" variant="ghost">
          Large
        </Button>
        <Button size="xl" variant="ghost">
          Extra Large
        </Button>
      </div>

      {/* Leading visual */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button size="sm" start={<ArrowLeft size={16} />}>
          Small
        </Button>
        <Button start={<ArrowLeft size={16} />}>Medium</Button>
        <Button size="lg" start={<ArrowLeft size={16} />}>
          Large
        </Button>
        <Button size="xl" start={<ArrowLeft size={16} />}>
          Extra Large
        </Button>
      </div>

      {/* Trailing visual */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button end={<ArrowRight size={16} />} size="sm">
          Small
        </Button>
        <Button end={<ArrowRight size={16} />}>Medium</Button>
        <Button end={<ArrowRight size={16} />} size="lg">
          Large
        </Button>
        <Button end={<ArrowRight size={16} />} size="xl">
          Extra Large
        </Button>
      </div>

      {/* Leading and trailing visual */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button
          end={<ArrowRight size={16} />}
          size="sm"
          start={<ArrowLeft size={16} />}
        >
          Small
        </Button>
        <Button
          end={<ArrowRight size={16} />}
          size="md"
          start={<ArrowLeft size={16} />}
        >
          Medium
        </Button>
        <Button
          end={<ArrowRight size={16} />}
          size="lg"
          start={<ArrowLeft size={16} />}
        >
          Large
        </Button>
        <Button
          end={<ArrowRight size={16} />}
          size="xl"
          start={<ArrowLeft size={16} />}
        >
          Extra Large
        </Button>
      </div>

      {/* With variants */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button
          end={<ArrowRight size={16} />}
          size="sm"
          start={<ArrowLeft size={16} />}
          variant="secondary"
        >
          Small
        </Button>
        <Button
          end={<ArrowRight size={16} />}
          size="md"
          start={<ArrowLeft size={16} />}
          variant="secondary"
        >
          Medium
        </Button>
        <Button
          end={<ArrowRight size={16} />}
          size="lg"
          start={<ArrowLeft size={16} />}
          variant="secondary"
        >
          Large
        </Button>
        <Button
          end={<ArrowRight size={16} />}
          size="xl"
          start={<ArrowLeft size={16} />}
          variant="secondary"
        >
          Extra Large
        </Button>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button
          end={<ArrowRight size={16} />}
          size="sm"
          start={<ArrowLeft size={16} />}
          variant="brand"
        >
          Small
        </Button>
        <Button
          end={<ArrowRight size={16} />}
          size="md"
          start={<ArrowLeft size={16} />}
          variant="brand"
        >
          Medium
        </Button>
        <Button
          end={<ArrowRight size={16} />}
          size="lg"
          start={<ArrowLeft size={16} />}
          variant="brand"
        >
          Large
        </Button>
        <Button
          end={<ArrowRight size={16} />}
          size="xl"
          start={<ArrowLeft size={16} />}
          variant="brand"
        >
          Extra Large
        </Button>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button
          end={<ArrowRight size={16} />}
          size="sm"
          start={<ArrowLeft size={16} />}
          variant="ghost"
        >
          Small
        </Button>
        <Button
          end={<ArrowRight size={16} />}
          size="md"
          start={<ArrowLeft size={16} />}
          variant="ghost"
        >
          Medium
        </Button>
        <Button
          end={<ArrowRight size={16} />}
          size="lg"
          start={<ArrowLeft size={16} />}
          variant="ghost"
        >
          Large
        </Button>
        <Button
          end={<ArrowRight size={16} />}
          size="xl"
          start={<ArrowLeft size={16} />}
          variant="ghost"
        >
          Extra Large
        </Button>
      </div>

      {/* Disabled */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button disabled size="sm">
          Small
        </Button>
        <Button disabled size="md">
          Medium
        </Button>
        <Button disabled size="lg">
          Large
        </Button>
        <Button disabled size="xl">
          Extra large
        </Button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button disabled size="sm" variant="secondary">
          Small
        </Button>
        <Button disabled size="md" variant="secondary">
          Medium
        </Button>
        <Button disabled size="lg" variant="secondary">
          Large
        </Button>
        <Button disabled size="xl" variant="secondary">
          Extra large
        </Button>
      </div>

      {/* Loading */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button isLoading size="sm">
          Small
        </Button>
        <Button isLoading size="md">
          Medium
        </Button>
        <Button isLoading size="lg">
          Large
        </Button>
        <Button isLoading size="xl">
          Extra large
        </Button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button isLoading size="sm" variant="secondary">
          Small
        </Button>
        <Button isLoading size="md" variant="secondary">
          Medium
        </Button>
        <Button isLoading size="lg" variant="secondary">
          Large
        </Button>
        <Button isLoading size="xl" variant="secondary">
          Extra large
        </Button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button isLoading size="sm" variant="brand">
          Small
        </Button>
        <Button isLoading size="md" variant="brand">
          Medium
        </Button>
        <Button isLoading size="lg" variant="brand">
          Large
        </Button>
        <Button isLoading size="xl" variant="brand">
          Extra large
        </Button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button isLoading size="sm" variant="ghost">
          Small
        </Button>
        <Button isLoading size="md" variant="ghost">
          Medium
        </Button>
        <Button isLoading size="lg" variant="ghost">
          Large
        </Button>
        <Button isLoading size="xl" variant="ghost">
          Extra large
        </Button>
      </div>

      {/* full width */}
      <Button size="lg" fullWidth={true}>
        Full width
      </Button>

      <Button size="lg" variant="secondary" fullWidth={true}>
        Full width
      </Button>
      <Button size="lg" variant="ghost" fullWidth={true}>
        Full width
      </Button>
      <Button size="lg" variant="brand" fullWidth={true}>
        Full width
      </Button>

      {/* semantic variants */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button variant="error" size="sm">
          Delete
        </Button>
        <Button variant="error" size="md">
          Delete
        </Button>
        <Button variant="error" size="lg">
          Delete
        </Button>
        <Button variant="error" size="xl">
          Delete
        </Button>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button variant="error" size="sm" start={<Ban size={16} />}>
          Error
        </Button>
        <Button variant="error" size="md" start={<Ban size={16} />}>
          Error
        </Button>
        <Button variant="error" size="lg" start={<Ban size={16} />}>
          Error
        </Button>
        <Button variant="error" size="xl" start={<Ban size={16} />}>
          Error
        </Button>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button variant="success" size="sm">
          Success
        </Button>
        <Button variant="success" size="md">
          Success
        </Button>
        <Button variant="success" size="lg">
          Success
        </Button>
        <Button variant="success" size="xl">
          Success
        </Button>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button variant="success" size="sm" start={<Check size={16} />}>
          Payment Complete
        </Button>
        <Button variant="success" size="md" start={<Check size={16} />}>
          Payment Complete
        </Button>
        <Button variant="success" size="lg" start={<Check size={16} />}>
          Payment Complete
        </Button>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button variant="warning" size="sm">
          Warning
        </Button>
        <Button variant="warning" size="md">
          Warning
        </Button>
        <Button variant="warning" size="lg">
          Warning
        </Button>
        <Button variant="warning" size="xl">
          Warning
        </Button>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button variant="info" size="sm">
          Info
        </Button>
        <Button variant="info" size="md">
          Info
        </Button>
        <Button variant="info" size="lg">
          Info
        </Button>
        <Button variant="info" size="xl">
          Info
        </Button>
      </div>
    </div>
  );
}
