import { type ChangeEvent, type ComponentProps, useState } from "react";
import { RdsInput } from "../RdsInput";

type InputNumberProps = ComponentProps<typeof RdsInput> & {
  value?: number | string;
  onChangeValue?: (value: number | string) => void;
  allowDecimal?: boolean;
  allowNegative?: boolean;
};

export const RdsInputNumber: React.FC<InputNumberProps> = ({
  value = "",
  onChangeValue = () => ({}),
  allowDecimal = true,
  allowNegative = false,
  ...props
}) => {
  const [internalValue, setInternalValue] = useState<string>(String(value ?? ""));

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;

    // Regex rules
    let regex = "^";
    if (allowNegative) regex += "-?";
    regex += "\\d*";
    if (allowDecimal) regex += "(\\.\\d*)?";
    regex += "$";

    const isValid = new RegExp(regex).test(raw);

    if (isValid || raw === "") {
      setInternalValue(raw);
      onChangeValue(raw === "" ? "" : allowDecimal ? Number.parseFloat(raw) : Number.parseInt(raw));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const invalidKeys = ["e", "E", "+"];
    if (!allowNegative) invalidKeys.push("-");

    if (invalidKeys.includes(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <RdsInput
      {...props}
      type="text"
      inputMode="decimal"
      value={internalValue}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
};
