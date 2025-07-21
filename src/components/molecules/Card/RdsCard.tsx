import cn from "classnames";

type Props = React.ComponentProps<"div">;

export const RdsCard: React.FC<Props> = ({ className, children, ...props }) => {
  return (
    <div
      className={cn("p-4 bg-base-100 border-base-300 border text-base-content rounded-lg shadow-sm", className)}
      {...props}
    >
      {children}
    </div>
  );
};
