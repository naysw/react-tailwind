import clsx from "clsx";
import React from "react";

export interface DrawerProps extends React.ComponentProps<"div"> {
  children?: React.ReactNode[] | React.ReactNode;
  component?: keyof React.ReactHTML;
  open: boolean;
  handleClose: () => void;
  anchor?: "left" | "right";
}

const Drawer = React.forwardRef<HTMLElement, DrawerProps>(
  (
    {
      children,
      className,
      component = "aside",
      open,
      anchor = "left",
      handleClose,
      ...others
    },
    ref
  ) => {
    const sidebarRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;
    const contentRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;

    const onKeyDownDrawer = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.code === "Escape") {
        handleClose && handleClose();
      }
    };

    const classes = clsx(
      "fixed overflow-hidden bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out",
      open
        ? "transition-opacity opacity-100 duration-500 -translate-x-0 "
        : " transition-all delay-500 opacity-0 -translate-x-full",
      className
    );

    return React.createElement(
      component,
      {
        ...others,
        ref,
        className: classes,
      },
      <>
        <div
          className={clsx(
            "w-screen max-w-sm left-0 absolute bg-white dark:bg-primary-canvas h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform",
            open ? "-translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="relative w-screen max-w-sm pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
            {children}
          </div>
        </div>

        <section
          className="w-screen h-full cursor-pointer "
          onClick={handleClose}
        ></section>
      </>
    );
  }
);

Drawer.displayName = "Drawer";

export default Drawer;
