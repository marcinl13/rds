import cn from "classnames";

type Props = React.ComponentProps<'div'>;

export const RdsCardFooter: React.FC<Props> = ({ className, children, ...props }) => (
  <div className={cn("pt-4 border-t border-base-content/70", className)} {...props}>
    {children}
  </div>
);
