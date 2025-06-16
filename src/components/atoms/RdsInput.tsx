import { type VariantProps, cva } from "class-variance-authority";
import cn from "classnames";

const inputVariants = cva(
  "block border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      _variant: {
        primary: "focus:ring-indigo-500 focus:border-indigo-500",
      },
      _size: {
        small: "px-3 py-1 text-sm",
        medium: "px-4 py-2 text-base",
        large: "px-5 py-3 text-lg",
      },
      _radius: {
        small: "rounded-sm",
        medium: "rounded-md",
        large: "rounded-lg",
        full: "rounded-full",
      },
    },

    defaultVariants: {
      _variant: "primary",
      _size: "medium",
      _radius: "medium",
    },
  },
);

type InputVariants = VariantProps<typeof inputVariants>;
type InputProps = React.ComponentProps<"input"> & InputVariants;

export const RdsInput: React.FC<InputProps> = ({
  _variant,
  _size,
  _radius,
  className,
  ...props
}) => (
  <input
    className={cn(
      inputVariants({
        _variant,
        _size,
        _radius,
      }),
      className,
    )}
    {...props}
  />
);
