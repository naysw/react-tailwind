import clsx from "clsx";
import React from "react";

type Color =
  | "default"
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "success"
  | "warning"
  | string;
type Size = "small" | "medium" | string;

interface Props extends React.ComponentProps<"div"> {
  children?: React.ReactNode[] | React.ReactNode;
  component?: keyof React.ReactHTML;
  chipColor?: Color;
}

const Chip = React.forwardRef<HTMLElement, Props>(
  ({ children, className, component = "div", chipColor, ...others }, ref) => {
    const classes = clsx(
      "px-1 py-0.5 rounded font-semibold inline-block text-sm",
      {
        ["bg-red-600 text-white"]: chipColor === "error",
        ["bg-yellow-600 text-white"]: chipColor === "warning",
        ["bg-green-600 text-white"]: chipColor === "success",
      },
      className
    );

    return React.createElement(
      component,
      {
        ...others,
        ref,
        className: classes,
      },
      <span>{children}</span>
    );
  }
);

Chip.displayName = "Chip";

export default Chip;
