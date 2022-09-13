import clsx from "clsx";
import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const Checkbox = React.forwardRef<HTMLInputElement, Props>(
  ({ children, className, ...others }, ref) => {
    const classes = clsx("h-5 w-5 cursor-pointer", className);

    return React.createElement("input", {
      type: "checkbox",
      ...others,
      ref,
      className: classes,
    });
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
