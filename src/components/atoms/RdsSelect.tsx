import { type VariantProps, cva } from "class-variance-authority";
import cn from "classnames";

const selectVariants = cva(
  "block bg-base-100 border border-base-300 text-base-content focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
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
      _size: "medium",
      _radius: "medium",
    },
  },
);

type SelectVariants = VariantProps<typeof selectVariants>;
type SelectProps = React.ComponentProps<"select"> & SelectVariants;

export const RdsSelect: React.FC<SelectProps> = ({ _size, _radius, className, children, ...props }) => {
  return (
    <select
      {...props}
      className={cn(
        selectVariants({
          _size,
          _radius,
        }),
        className,
      )}
    >
      {children}
    </select>
  );
};
