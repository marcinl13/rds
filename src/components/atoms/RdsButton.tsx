import { type VariantProps, cva } from "class-variance-authority";
import cn from "classnames";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
  {
    variants: {
      _variant: {
        primary: "bg-gray-600 text-white hover:bg-gray-700",
      },
      _size: {
        small: "px-3 py-1 text-sm",
        medium: "px-4 py-2 text-base",
        large: "px-5 py-3 text-lg",
      },
      _radius: {
        none: "rounded-none",
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

type ButtonVariants = VariantProps<typeof buttonVariants>;
type ButtonProps = React.ComponentProps<"button"> & ButtonVariants;

export const RdsButton: React.FC<ButtonProps> = ({
  _variant,
  _size,
  _radius,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        buttonVariants({
          _variant,
          _size,
          _radius,
        }),
        className,
      )}
      {...props}
    />
  );
};
