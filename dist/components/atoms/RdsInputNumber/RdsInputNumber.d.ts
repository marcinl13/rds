import { type ComponentProps } from "react";
import { RdsInput } from "../RdsInput";
type InputNumberProps = ComponentProps<typeof RdsInput> & {
    value?: number | string;
    onChangeValue?: (value: number | string) => void;
    allowDecimal?: boolean;
    allowNegative?: boolean;
};
export declare const RdsInputNumber: React.FC<InputNumberProps>;
export {};
