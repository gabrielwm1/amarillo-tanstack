import { ButtonLink } from "@/components/ui/button-link";
import { IconButtonLink } from "@/components/ui/icon-button-link";
import { createFileRoute } from "@tanstack/react-router";
import { Home, LucideArrowRight } from "lucide-react";

export const Route = createFileRoute("/link-buttons")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-4 max-w-xl mx-auto mt-10">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <ButtonLink
          variant="primary"
          size="md"
          to="/"
          params={{ test: "baz" }}
          search={(prev: Record<string, string>) => ({ ...prev, foo: "bar" })}
        >
          Home
        </ButtonLink>
        <ButtonLink
          variant="secondary"
          size="md"
          to="/"
          params={{ test: "baz" }}
          //    search={(prev: Record<string, string>) => ({ ...prev, foo: "bar" })}
        >
          Home
        </ButtonLink>
        <ButtonLink
          variant="brand"
          size="md"
          to="/"
          params={{ test: "baz" }}
          //    search={(prev: Record<string, string>) => ({ ...prev, foo: "bar" })}
        >
          Home
        </ButtonLink>
        <ButtonLink
          variant="ghost"
          size="md"
          to="/"
          params={{ test: "baz" }}
          search={(prev: Record<string, string>) => ({ ...prev, foo: "bar" })}
        >
          Home
        </ButtonLink>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <ButtonLink
          variant="primary"
          size="sm"
          to="/"
          params={{ test: "baz" }}
          //                search={(prev: Record<string, string>) => ({ ...prev, foo: "bar" })}
        >
          Home
        </ButtonLink>
        <ButtonLink
          variant="primary"
          size="md"
          to="/"
          params={{ test: "baz" }}
          search={(prev: Record<string, string>) => ({ ...prev, foo: "bar" })}
        >
          Home
        </ButtonLink>
        <ButtonLink
          variant="primary"
          size="lg"
          to="/"
          params={{ test: "baz" }}
          search={(prev: Record<string, string>) => ({ ...prev, foo: "bar" })}
        >
          Home
        </ButtonLink>
        <ButtonLink
          variant="primary"
          size="xl"
          to="/"
          params={{ test: "baz" }}
          search={(prev: Record<string, string>) => ({ ...prev, foo: "bar" })}
        >
          Home
        </ButtonLink>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <ButtonLink
          variant="brand"
          size="sm"
          to="/"
          params={{ test: "baz" }}
          search={(prev: Record<string, string>) => ({ ...prev, foo: "bar" })}
        >
          Home
        </ButtonLink>
        <ButtonLink
          variant="brand"
          size="md"
          to="/"
          params={{ test: "baz" }}
          search={(prev: Record<string, string>) => ({ ...prev, foo: "bar" })}
        >
          Home
        </ButtonLink>
        <ButtonLink
          variant="brand"
          size="lg"
          to="/"
          params={{ test: "baz" }}
          //   search={(prev: Record<string, string>) => ({ ...prev, foo: "bar" })}
        >
          Home
        </ButtonLink>
        <ButtonLink
          variant="brand"
          size="xl"
          to="/"
          params={{ test: "baz" }}
          //   search={(prev: Record<string, string>) => ({ ...prev, foo: "bar" })}
        >
          Home
        </ButtonLink>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        <ButtonLink
          variant="secondary"
          size="sm"
          to="/"
          params={{ test: "baz" }}
          search={(prev: Record<string, string>) => ({ ...prev, foo: "bar" })}
        >
          Home
        </ButtonLink>
        <ButtonLink
          variant="secondary"
          size="md"
          to="/"
          params={{ test: "baz" }}
          search={(prev: Record<string, string>) => ({ ...prev, foo: "bar" })}
        >
          Home
        </ButtonLink>
        <ButtonLink
          variant="secondary"
          size="lg"
          to="/"
          params={{ test: "baz" }}
          search={(prev: Record<string, string>) => ({ ...prev, foo: "bar" })}
        >
          Home
        </ButtonLink>
        <ButtonLink
          variant="secondary"
          size="xl"
          to="/"
          params={{ test: "baz" }}
          search={(prev: Record<string, string>) => ({ ...prev, foo: "bar" })}
        >
          Home
        </ButtonLink>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        <ButtonLink
          variant="secondary"
          size="sm"
          to="/"
          params={{ test: "baz" }}
          //   search={(prev: Record<string, string>) => ({ ...prev, foo: "bar" })}
          end={<LucideArrowRight size={16} />}
        >
          Home
        </ButtonLink>
        <ButtonLink
          variant="secondary"
          size="md"
          to="/"
          params={{ test: "baz" }}
          //   search={(prev: Record<string, string>) => ({ ...prev, foo: "bar" })}
          end={<LucideArrowRight size={16} />}
        >
          Home
        </ButtonLink>
        <ButtonLink
          variant="secondary"
          size="lg"
          to="/"
          params={{ test: "baz" }}
          //   search={(prev: Record<string, string>) => ({ ...prev, foo: "bar" })}
          end={<LucideArrowRight size={16} />}
        >
          Home
        </ButtonLink>
        <ButtonLink
          variant="secondary"
          size="xl"
          to="/"
          params={{ test: "baz" }}
          search={(prev: Record<string, string>) => ({ ...prev, foo: "bar" })}
          end={<LucideArrowRight size={16} />}
        >
          Home
        </ButtonLink>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <IconButtonLink variant="primary" size="sm" to="/">
          <Home size={16} />
        </IconButtonLink>
        <IconButtonLink variant="primary" size="md" to="/">
          <Home size={16} />
        </IconButtonLink>
        <IconButtonLink variant="primary" size="lg" to="/">
          <Home size={16} />
        </IconButtonLink>
        <IconButtonLink variant="primary" size="xl" to="/">
          <Home size={16} />
        </IconButtonLink>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <IconButtonLink variant="brand" size="sm" to="/">
          <Home size={16} />
        </IconButtonLink>
        <IconButtonLink variant="brand" size="md" to="/">
          <Home size={16} />
        </IconButtonLink>
        <IconButtonLink variant="brand" size="lg" to="/">
          <Home size={16} />
        </IconButtonLink>
        <IconButtonLink variant="brand" size="xl" to="/">
          <Home size={16} />
        </IconButtonLink>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <IconButtonLink variant="secondary" size="sm" to="/">
          <Home size={16} />
        </IconButtonLink>
        <IconButtonLink variant="secondary" size="md" to="/">
          <Home size={16} />
        </IconButtonLink>
        <IconButtonLink variant="secondary" size="lg" to="/">
          <Home size={16} />
        </IconButtonLink>
        <IconButtonLink variant="secondary" size="xl" to="/">
          <Home size={16} />
        </IconButtonLink>
      </div>
    </div>
  );
}
