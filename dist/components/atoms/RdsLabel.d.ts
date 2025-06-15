import { type VariantProps } from "class-variance-authority";
declare const labelVariants: (props?: ({
    _intent?: "gray" | null | undefined;
    _size?: "small" | "medium" | "large" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
type LabelVariants = VariantProps<typeof labelVariants>;
type LabelProps = React.ComponentProps<"label"> & LabelVariants;
export declare const RdsLabel: React.FC<LabelProps>;
export {};
