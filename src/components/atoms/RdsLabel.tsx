import { type VariantProps, cva } from "class-variance-authority";
import cn from "classnames";

const labelVariants = cva("block text-base-content", {
  variants: {
    _size: {
      small: "py-1 text-sm",
      medium: "py-2 text-base",
      large: "py-3 text-lg",
    },
  },

  defaultVariants: {
    _size: "medium",
  },
});

type LabelVariants = VariantProps<typeof labelVariants>;
type LabelProps = React.ComponentProps<"label"> & LabelVariants;

export const RdsLabel: React.FC<LabelProps> = ({
  _size,
  className,
  children,
  ...props
}) => (
  <label
    className={cn(
      labelVariants({
        _size,
      }),
      className
    )}
    {...props}
  >
    {children}
  </label>
);
