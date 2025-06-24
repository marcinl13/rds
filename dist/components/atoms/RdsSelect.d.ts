import { type VariantProps } from "class-variance-authority";
declare const selectVariants: (props?: ({
    _size?: "small" | "medium" | "large" | null | undefined;
    _radius?: "none" | "small" | "medium" | "large" | "full" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
type SelectVariants = VariantProps<typeof selectVariants>;
type SelectProps = React.ComponentProps<"select"> & SelectVariants;
export declare const RdsSelect: React.FC<SelectProps>;
export {};
