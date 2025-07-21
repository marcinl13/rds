import { RdsButton, RdsInput, RdsLabel, RdsSelect } from "../../src/components/atoms";
import {
  RdsCard,
  RdsCardContent,
  RdsCardDescription,
  RdsCardFooter,
  RdsCardHeader,
  RdsCardTitle,
  RdsInputNumber,
  RdsSelectSearch,
} from "../../src/components/molecules";

export const Example = () => {
  return (
    <section className="flex flex-wrap gap-4 align-items-start bg-base-200 w-full p-4 mb-20">
      <RdsCard className="flex flex-col gap-3 min-w-100">
        <div>
          <RdsLabel htmlFor="input-example">Text input example</RdsLabel>
          <RdsInput name="input-example" placeholder="text" value="Hello" className="w-full" />
        </div>

        <div>
          <RdsLabel htmlFor="input-example">Disabled input example</RdsLabel>
          <RdsInput name="input-example" value="Disabled" className="w-full" disabled />
        </div>

        <div>
          <RdsLabel htmlFor="input-example">Numerical input example</RdsLabel>
          <RdsInputNumber name="input-example" placeholder="amount" value="12" className="w-full" />
        </div>

        <div>
          <RdsLabel htmlFor="select-example">Select example</RdsLabel>
          <RdsSelect name="select-example" className="w-full">
            <option value="APEX">APEX</option>
            <option value="Multi Cloud">Multi Cloud</option>
            <option value="Cloud Solutions">Cloud Solutions</option>
            <option value="Energy">Energy</option>
          </RdsSelect>
        </div>

        <div>
          <RdsLabel htmlFor="select-example">Disabled Select example</RdsLabel>
          <RdsSelect name="select-example" className="w-full" disabled>
            <option value="APEX">APEX</option>
            <option value="Multi Cloud">Multi Cloud</option>
            <option value="Cloud Solutions">Cloud Solutions</option>
            <option value="Energy">Energy</option>
          </RdsSelect>
        </div>

        <div>
          <RdsLabel htmlFor="select-example">Disabled Select example</RdsLabel>
          <RdsSelectSearch
            name="select-example"
            options={[
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
            ]}
          />
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

      <RdsCard className="min-w-100">
        <RdsCardHeader>
          <RdsCardTitle>Card Title</RdsCardTitle>
          <RdsCardDescription>Brief description or subtitle.</RdsCardDescription>
        </RdsCardHeader>
        <RdsCardContent>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam itaque voluptate soluta id quidem nihil,
            sit deserunt iusto a provident facere harum, eius omnis at similique labore possimus! Reiciendis, saepe.
          </p>
        </RdsCardContent>
        <RdsCardFooter className="flex justify-center">
          <RdsButton>Button</RdsButton>
        </RdsCardFooter>
      </RdsCard>
    </section>
  );
};
