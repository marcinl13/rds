import cn from "classnames";

type Props = React.ComponentProps<'div'>;

export const RdsCardContent: React.FC<Props> = ({ className, children, ...props }) => (
  <div className={cn("mb-4", className)} {...props}>
    {children}
  </div>
);
