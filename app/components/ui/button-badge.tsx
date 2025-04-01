import type { ComponentProps, JSX } from "react";
import { Badge } from "./badge";

export interface ButtonBadgeProps extends ComponentProps<"div"> {
  value?: string;
  variant?: "brand" | "secondary" | "error";
}

export function ButtonBadge(props: ButtonBadgeProps): JSX.Element {
  const { children, value = "", variant = "brand", ...rest } = props;

  return (
    <div className="relative" {...rest}>
      {value && (
        <Badge
          variant={variant}
          className="z-10 pointer-events-none absolute -top-2 -right-2 px-1 select-none aspect-square"
        >
          {value}
        </Badge>
      )}
      {children}
    </div>
  );
}
