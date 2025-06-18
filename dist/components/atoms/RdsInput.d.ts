import { type VariantProps } from "class-variance-authority";
declare const inputVariants: (props?: ({
    _size?: "small" | "medium" | "large" | null | undefined;
    _radius?: "small" | "medium" | "large" | "full" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
type InputVariants = VariantProps<typeof inputVariants>;
type InputProps = React.ComponentProps<"input"> & InputVariants;
export declare const RdsInput: React.FC<InputProps>;
export {};
