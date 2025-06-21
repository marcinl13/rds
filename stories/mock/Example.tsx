import { RdsButton, RdsInput, RdsLabel, RdsSelect } from "../../src/components/atoms";
import { RdsCard, RdsInputNumber } from "../../src/components/molecules";

export const Example = () => {
  return (
    <section className="flex flex-wrap gap-4 bg-base-200 w-full p-4">
      <RdsCard className="flex flex-col gap-3 min-w-100">
        <div>
          <RdsLabel htmlFor="input-example" children="Text input example" />
          <RdsInput name="input-example" placeholder="text" value="Hello" className="w-full" />
        </div>

        <div>
          <RdsLabel htmlFor="input-example" children="Numerical input example" />
          <RdsInputNumber name="input-example" placeholder="amount" value="12" className="w-full" />
        </div>

        <div>
          <RdsLabel htmlFor="select-example" children="Select example" />
          <RdsSelect name="select-example" className="w-full">
            <option value="APEX">APEX</option>
            <option value="Multi Cloud">Multi Cloud</option>
            <option value="Cloud Solutions">Cloud Solutions</option>
            <option value="Energy">Energy</option>
          </RdsSelect>
        </div>

        <RdsButton>Button</RdsButton>
      </RdsCard>

      <RdsCard className="flex-1 min-w-100 space-y-4 space-x-3">
        <RdsButton _size="large" _variant="primary">
          Button
        </RdsButton>
        <RdsButton _size="medium" _variant="primary">
          Button
        </RdsButton>
        <RdsButton _size="small" _variant="primary">
          Button
        </RdsButton>

        <RdsButton _size="large" _variant="secondary">
          Button
        </RdsButton>
        <RdsButton _size="medium" _variant="secondary">
          Button
        </RdsButton>
        <RdsButton _size="small" _variant="secondary">
          Button
        </RdsButton>

        <RdsButton _size="large" _variant="accent">
          Button
        </RdsButton>
        <RdsButton _size="medium" _variant="accent">
          Button
        </RdsButton>
        <RdsButton _size="small" _variant="accent">
          Button
        </RdsButton>

        <RdsButton _size="large" _variant="neutral">
          Button
        </RdsButton>
        <RdsButton _size="medium" _variant="neutral">
          Button
        </RdsButton>
        <RdsButton _size="small" _variant="neutral">
          Button
        </RdsButton>

        <RdsButton _size="large" _variant="info">
          Button
        </RdsButton>
        <RdsButton _size="medium" _variant="info">
          Button
        </RdsButton>
        <RdsButton _size="small" _variant="info">
          Button
        </RdsButton>

        <RdsButton _size="large" _variant="success">
          Button
        </RdsButton>
        <RdsButton _size="medium" _variant="success">
          Button
        </RdsButton>
        <RdsButton _size="small" _variant="success">
          Button
        </RdsButton>

        <RdsButton _size="large" _variant="warning">
          Button
        </RdsButton>
        <RdsButton _size="medium" _variant="warning">
          Button
        </RdsButton>
        <RdsButton _size="small" _variant="warning">
          Button
        </RdsButton>

        <RdsButton _size="large" _variant="error">
          Button
        </RdsButton>
        <RdsButton _size="medium" _variant="error">
          Button
        </RdsButton>
        <RdsButton _size="small" _variant="error">
          Button
        </RdsButton>
      </RdsCard>
    </section>
  );
};
