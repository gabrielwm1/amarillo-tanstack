export const theme = {
  bg: {
    base: "bg-neutral-1",
    disabled: "disabled:!bg-neutral-1",
  },
  border: {
    base: ["border-solid", "border"].join(" "),
    color: {
      active: [
        "data-[active=true]:border-neutral-8",
        "active:border-neutral-8",
      ].join(" "),
      base: "border-neutral-6",
      disabled: "disabled:!border-neutral-6",
      focus: "focus:border-neutral-8",
      hover: "hover:border-neutral-8",
    },
  },
  disabled: ["disabled:cursor-not-allowed", "disabled:opacity-50"].join(" "),
  duration: "duration-150",
  outline: [
    "focus-visible:outline-2",
    "outline-0",
    "outline-offset-2",
    "outline-neutral-8",
  ].join(" "),
  rounded: "rounded-lg",
  shadow: {
    box: "shadow-md",
    filter: "[filter:drop-shadow(0_1px_rgb(0_0_0_/_0.05))]",
    text: "[text-shadow:0_1px_0px_rgba(0,0,0,0.1),0_-1px_0px_rgba(255,255,255,0.1)]",
  },
};
