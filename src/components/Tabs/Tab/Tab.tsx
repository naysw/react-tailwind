import clsx from "clsx";
import React from "react";
import Box from "../../Box";
import Typography from "../../Typography";

interface TabProps {
  label: React.ReactNode;
  value?: any;
  icon?: React.ReactElement;
}

const Tab = ({ label, value, icon }: TabProps) => {
  return (
    <Box
      className={clsx(
        "dark:text-zinc-800 text-center rounded p-2 border dark:bg-white w-full flex flex-col items-center"
      )}
    >
      {icon &&
        React.cloneElement(icon, {
          className: "w-8 h-8",
        })}

      <Typography className="font-bold">{label}</Typography>
    </Box>
  );
};

export default Tab;
