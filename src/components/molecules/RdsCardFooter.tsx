import cn from "classnames";

type Props = React.HTMLAttributes<HTMLDivElement>;

export const RdsCardFooter: React.FC<Props> = ({ className, children, ...props }) => (
  <div className={cn("pt-4 border-t border-base-content/70", className)} {...props}>
    {children}
  </div>
);
