import { ButtonBadge } from "@/components/ui/button-badge";
import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";
import { createFileRoute } from "@tanstack/react-router";
import {
  LucideMail,
  LucideBell,
  LucideMessageCircle,
  LucideHeart,
  LucideBookmark,
} from "lucide-react";
import { IconButton } from "@/components/ui/icon-button";

export const Route = createFileRoute("/badge")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-8 max-w-sm mx-auto mt-10 p-6 items-center">
      {/* Default Variant Row */}
      <div className="flex flex-wrap items-center gap-4">
        <ButtonBadge value="9">
          <IconButton size="lg" variant="primary">
            <LucideMail size={16} />
          </IconButton>
        </ButtonBadge>

        <ButtonBadge value="2">
          <IconButton size="lg" variant="secondary">
            <LucideBell size={16} />
          </IconButton>
        </ButtonBadge>

        <ButtonBadge value="5">
          <IconButton size="lg" variant="ghost">
            <LucideMessageCircle size={16} />
          </IconButton>
        </ButtonBadge>

        <ButtonBadge value="5" variant="secondary">
          <IconButton size="lg" variant="brand">
            <LucideMessageCircle size={16} />
          </IconButton>
        </ButtonBadge>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <ButtonBadge value="9">
          <IconButton size="sm" variant="primary">
            <LucideMail size={16} />
          </IconButton>
        </ButtonBadge>

        <ButtonBadge value="2">
          <IconButton size="md" variant="primary">
            <LucideBell size={16} />
          </IconButton>
        </ButtonBadge>

        <ButtonBadge value="5">
          <IconButton size="lg" variant="primary">
            <LucideMessageCircle size={16} />
          </IconButton>
        </ButtonBadge>
        <ButtonBadge value="5">
          <IconButton size="xl" variant="primary">
            <LucideMessageCircle size={16} />
          </IconButton>
        </ButtonBadge>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <ButtonBadge value="9" variant="secondary">
          <IconButton size="sm" variant="secondary">
            <LucideMail size={16} />
          </IconButton>
        </ButtonBadge>

        <ButtonBadge value="2" variant="secondary">
          <IconButton size="md" variant="secondary">
            <LucideBell size={16} />
          </IconButton>
        </ButtonBadge>

        <ButtonBadge value="5" variant="secondary">
          <IconButton size="lg" variant="secondary">
            <LucideMessageCircle size={16} />
          </IconButton>
        </ButtonBadge>
        <ButtonBadge value="5" variant="secondary">
          <IconButton size="xl" variant="secondary">
            <LucideMessageCircle size={16} />
          </IconButton>
        </ButtonBadge>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <ButtonBadge value="9" variant="brand">
          <IconButton size="sm" variant="secondary">
            <LucideMail size={16} />
          </IconButton>
        </ButtonBadge>

        <ButtonBadge value="2" variant="brand">
          <IconButton size="md" variant="secondary">
            <LucideBell size={16} />
          </IconButton>
        </ButtonBadge>

        <ButtonBadge value="5" variant="brand">
          <IconButton size="lg" variant="secondary">
            <LucideMessageCircle size={16} />
          </IconButton>
        </ButtonBadge>
        <ButtonBadge value="5" variant="brand">
          <IconButton size="xl" variant="secondary">
            <LucideMessageCircle size={16} />
          </IconButton>
        </ButtonBadge>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <ButtonBadge value="9" variant="secondary">
          <IconButton size="sm" variant="ghost">
            <LucideMail size={16} />
          </IconButton>
        </ButtonBadge>

        <ButtonBadge value="2" variant="secondary">
          <IconButton size="md" variant="ghost">
            <LucideBell size={16} />
          </IconButton>
        </ButtonBadge>

        <ButtonBadge value="5" variant="secondary">
          <IconButton size="lg" variant="ghost">
            <LucideMessageCircle size={16} />
          </IconButton>
        </ButtonBadge>
        <ButtonBadge value="5" variant="secondary">
          <IconButton size="xl" variant="ghost">
            <LucideMessageCircle size={16} />
          </IconButton>
        </ButtonBadge>
      </div>
      {/* semantic tokens */}

      {/* Secondary Variant Row */}
    </div>
  );
}
