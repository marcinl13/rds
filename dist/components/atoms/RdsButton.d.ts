import { type VariantProps } from "class-variance-authority";
declare const buttonVariants: (props?: ({
    _variant?: "primary" | "secondary" | "accent" | "neutral" | "info" | "success" | "warning" | "error" | null | undefined;
    _size?: "small" | "medium" | "large" | null | undefined;
    _radius?: "small" | "medium" | "large" | "none" | "full" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
type ButtonVariants = VariantProps<typeof buttonVariants>;
type ButtonProps = React.ComponentProps<"button"> & ButtonVariants;
export declare const RdsButton: React.FC<ButtonProps>;
export {};
