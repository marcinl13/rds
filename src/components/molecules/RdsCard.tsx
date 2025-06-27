import cn from "classnames";

type CardProps = React.ComponentProps<"div">;

export const RdsCard: React.FC<CardProps> & {
  Header: React.FC<CardProps>;
  Title: React.FC<CardProps>;
  Description: React.FC<CardProps>;
  Content: React.FC<CardProps>;
  Footer: React.FC<CardProps>;
} = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        "max-w-sm p-4 bg-base-100 border-base-300 border text-base-content rounded-lg shadow-sm",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

RdsCard.Header = ({ className, children, ...props }) => (
  <div className={cn("mb-4", className)} {...props}>
    {children}
  </div>
);

RdsCard.Title = ({ className, children, ...props }) => (
  <h3 className={cn("text-lg font-semibold", className)} {...props}>
    {children}
  </h3>
);

RdsCard.Description = ({ className, children, ...props }) => (
  <p className={cn("text-sm text-base-content/70", className)} {...props}>
    {children}
  </p>
);

RdsCard.Content = ({ className, children, ...props }) => (
  <div className={cn("mb-4", className)} {...props}>
    {children}
  </div>
);

RdsCard.Footer = ({ className, children, ...props }) => (
  <div className={cn("pt-4 border-t border-base-content/70", className)} {...props}>
    {children}
  </div>
);
