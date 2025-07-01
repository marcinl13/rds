import cn from "classnames";

type Props = React.HTMLAttributes<HTMLHeadingElement>;

export const RdsCardTitle: React.FC<Props> = ({ className, children, ...props }) => (
  <h3 className={cn("text-lg font-semibold", className)} {...props}>
    {children}
  </h3>
);
