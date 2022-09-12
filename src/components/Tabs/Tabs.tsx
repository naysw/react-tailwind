import clsx from "clsx";
import React from "react";
import { TabsContext } from "./Context";

interface Props extends React.HtmlHTMLAttributes<HTMLElement> {
  component?: keyof React.ReactHTML;
}

const Tabs = React.forwardRef<HTMLElement, Props>(
  ({ children, className, component = "div", ...others }, ref) => {
    const [activeTab, setActiveTab] = React.useState(0);

    const classes = clsx(className);

    return (
      <TabsContext.Provider value={null}>
        {React.createElement(
          component,
          {
            ...others,
            ref,
            className: classes,
          },
          children
        )}
      </TabsContext.Provider>
    );
  }
);

Tabs.displayName = "Tabs";

export default Tabs;
