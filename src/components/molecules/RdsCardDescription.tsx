import cn from "classnames";

type Props = React.HTMLAttributes<HTMLParagraphElement>;

export const RdsCardDescription: React.FC<Props> = ({ className, children, ...props }) => (
  <p className={cn("text-sm text-base-content/70", className)} {...props}>
    {children}
  </p>
);
