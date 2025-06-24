import { RdsSelectSearch } from "../../src/components/molecules";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export const SelectSearch: React.FC = () => {
  return (
    <section className="h-80 w-80">
      <RdsSelectSearch options={options} />
    </section>
  );
};
