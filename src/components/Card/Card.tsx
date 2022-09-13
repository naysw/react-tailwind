import clsx from "clsx";
import React from "react";
import LinearProgress from "../LinearProgress";

type Variant = "outlined" | "";

interface Props extends React.HtmlHTMLAttributes<HTMLElement> {
  component?: keyof React.ReactHTML;
  variant?: Variant;
  cardLoading?: boolean;
}

const Card = React.forwardRef<HTMLElement, Props>(
  (
    { children, className, variant, cardLoading, component = "div", ...others },
    ref,
  ) => {
    const classes = clsx(
      "relative overflow-hidden rounded-lg bg-white dark:bg-zinc-800",
      {
        ["border dark:border-zinc-600"]: variant === "outlined",
      },
      className,
    );

    return React.createElement(
      component,
      {
        ...others,
        ref,
        className: classes,
      },
      <>
        {cardLoading && <LinearProgress />}

        {cardLoading && (
          <div className="absolute inset-0 bg-gray-600 bg-opacity-20 z-10"></div>
        )}

        {children}
      </>,
    );
  },
);

Card.displayName = "Card";

export default Card;
