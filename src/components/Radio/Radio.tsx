import clsx from "clsx";

type Size = "small" | "medium" | "large";

interface Props extends React.ComponentProps<"input"> {
  inputSize?: Size;
}

const Radio = ({ inputSize, id, ...others }: Props) => {
  return (
    <div className="flex items-center mb-4">
      <input
        id={id}
        type="radio"
        {...others}
        className={clsx(
          "text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600",
          {
            ["w-4 h-4"]: inputSize === "small",
            ["w-6 h-6"]: inputSize === "medium",
            ["w-10 h-10"]: inputSize === "large",
          }
        )}
      />
      {/* <label
        htmlFor="default-radio-1"
        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Default radio
      </label> */}
    </div>
  );
};

export default Radio;
