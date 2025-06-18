import { type ComponentProps } from "react";
import { RdsInput } from "../atoms";
type InputNumberProps = ComponentProps<typeof RdsInput> & {
    value: number | string;
    onChange?: (value: number | string) => void;
    allowDecimal?: boolean;
    allowNegative?: boolean;
};
export declare const RdsInputNumber: React.FC<InputNumberProps>;
export {};
