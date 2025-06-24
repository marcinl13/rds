import Select from "react-select";

type SelectProps = React.ComponentProps<typeof Select>;

export const RdsSelectSearch: React.FC<SelectProps> = (props) => {
  return (
    <Select
      className="react-select-container"
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          background: "var(--color-input)",
          color: "var(--color-input-content)",
          border: "1px solid var(--color-input-border)",
          borderColor: "var(--color-input-border)",
          borderRadius: "var(--radius-md)",
          paddingBlock: "calc(var(--spacing) * .4)",
          paddingLeft: "calc(var(--spacing) * 4)",
          boxShadow: "none",
          ":hover": {
            borderColor: "var(--color-input-border)",
            boxShadow: "none",
          },
          ":focus": {
            borderColor: "var(--color-input-border)",
            boxShadow: "none",
          },
        }),
        input: (baseStyles) => ({
          ...baseStyles,
          padding: 0,
          fontSize: "var(--text-base)",
        }),
        singleValue: (baseStyles) => ({
          ...baseStyles,
          color: "var(--color-input-content)",
        }),
        menu: (baseStyles) => ({
          ...baseStyles,
          backgroundColor: "var(--color-input)",
          color: "var(--color-input-content)",
          border: "1px solid var(--color-input-border)",
          borderColor: "var(--color-input-border)",
        }),
        option: (baseStyles) => ({
          ...baseStyles,
          backgroundColor: "var(--color-input)",
          ":hover": {
            backgroundColor: "gray",
            color: "white",
          },
          ":active": {
            backgroundColor: "gray",
            color: "white",
          },
          ":first-of-type": {
            backgroundColor: "gray",
            color: "white",
          },
        }),
        valueContainer: (baseStyles) => ({
          ...baseStyles,
          padding: 1,
        }),
      }}
      {...props}
    />
  );
};
