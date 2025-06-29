import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "../../compact/classMerge";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
  {
    variants: {
      _variant: {
        primary: "bg-primary text-primary-content hover:bg-primary-hover",
        secondary: "bg-secondary text-secondary-content hover:bg-secondary-hover",
        accent: "bg-accent text-accent-content hover:bg-accent-hover",
        neutral: "bg-neutral text-neutral-content hover:bg-neutral-hover",
        info: "bg-info text-info-content hover:bg-info-hover",
        success: "bg-success text-success-content hover:bg-success-hover",
        warning: "bg-warning text-warning-content hover:bg-warning-hover",
        error: "bg-error text-error-content hover:bg-error-hover",
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

export const RdsButton: React.FC<ButtonProps> = ({ _variant, _size, _radius, className, ...props }) => {
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
