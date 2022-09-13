import clsx from "clsx";
import React from "react";

type Direction = "row" | "column";

interface Props extends React.HtmlHTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  component?: keyof React.ReactHTML;
  direction?: Direction;
  spacing?: number;
}

const Stack = React.forwardRef<HTMLElement, Props>(
  (
    {
      children,
      className,
      component = "div",
      direction = "column",
      spacing,
      ...others
    },
    ref
  ) => {
    const classes = clsx(
      "flex",
      direction === "column" && `flex-col`,
      className
    );

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

Stack.displayName = "Stack";

export default Stack;
