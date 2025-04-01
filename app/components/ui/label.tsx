"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const labelStyles = {
  base: [
    "text-neutral-9",
    "leading-none",
    "peer-disabled:cursor-not-allowed",
    "peer-disabled:opacity-70",
  ].join(" "),
  size: {
    sm: "text-sm",
    md: "text-md",
  },
};
const labelVariants = cva(labelStyles.base, {
  variants: {
    size: labelStyles.size,
  },
  defaultVariants: {
    size: "sm",
  },
});

const Label = ({
  className,
  size,
  ref,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root> &
  VariantProps<typeof labelVariants>) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants({ size }), className)}
    {...props}
  />
);
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
