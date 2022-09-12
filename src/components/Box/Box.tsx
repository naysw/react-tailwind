import clsx from "clsx";
import React from "react";

interface Props extends React.HtmlHTMLAttributes<HTMLElement> {
  component?: keyof React.ReactHTML;
}

const Box = React.forwardRef<HTMLElement, Props>(
  ({ children, className, component = "div", ...others }, ref) => {
    const classes = clsx(className);

    return React.createElement(
      component,
      {
        ...others,
        ref,
        className: classes,
      },
      children
    );
  }
);

Box.displayName = "Box";

export default Box;
