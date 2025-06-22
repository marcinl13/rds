import Select from "react-select";

type SelectProps = React.ComponentProps<typeof Select>;

export const RdsSelectSearch: React.FC<SelectProps> = (props) => {
  return <Select {...props} />;
};
