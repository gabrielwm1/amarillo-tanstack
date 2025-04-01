import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const textStyles = {
  base: [""].join(" "),
  size: {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
    "7xl": "text-7xl",
    "8xl": "text-8xl",
    "9xl": "text-9xl",
  },
  weight: {
    thin: "font-thin",
    extralight: "font-extralight",
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
  },
  scale: {
    brand: "",
    neutral: "",
  },
};

const textVariants = cva(textStyles.base, {
  variants: {
    size: textStyles.size,
    weight: textStyles.weight,
    scale: textStyles.scale,
    accent: {
      true: "",
    },
  },
  compoundVariants: [
    {
      accent: true,
      scale: "brand",
      className: "text-brand-12",
    },
    {
      accent: true,
      scale: "neutral",
      className: "text-neutral-12",
    },
    {
      accent: false,
      scale: "brand",
      className: "text-brand-11",
    },
    {
      accent: false,
      scale: "neutral",
      className: "text-neutral-11",
    },
  ],
  defaultVariants: {
    size: "sm",
    weight: "normal",
    scale: "neutral",
    accent: false,
  },
});

interface TextProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof textVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

const Text: React.FC<TextProps> = ({
  size,
  as = "p",
  weight,
  scale,
  accent,
  children,
  className,
  ...props
}) => {
  const Comp = as;
  return (
    <Comp
      className={cn(textVariants({ size, weight, scale, accent }), className)}
      {...props}
    >
      {children}
    </Comp>
  );
};

export { Text };
