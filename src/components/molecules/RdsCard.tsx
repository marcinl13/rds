import cn from "classnames";

type CardProps = React.ComponentProps<"div">;

export const RdsCard: React.FC<CardProps> = ({ className, children, ...props }) => {
  return (
    <div
      className={cn("max-w-sm p-6 bg-base-100 card-border border-base-300 border rounded-lg shadow-sm", className)}
      {...props}
    >
      {children}
    </div>
  );
};
