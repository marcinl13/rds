import { RdsButton } from "../../src/components/atoms";
import { RdsCard } from "../../src/components/molecules";

export const MockCard: React.FC<React.ComponentProps<typeof RdsCard>> = () => (
  <RdsCard className="min-w-100">
    <RdsCard.Header>
      <RdsCard.Title>Card Title</RdsCard.Title>
      <RdsCard.Description>Brief description or subtitle.</RdsCard.Description>
    </RdsCard.Header>

    <RdsCard.Content>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam itaque
        voluptate soluta id quidem nihil, sit deserunt iusto a provident facere
        harum, eius omnis at similique labore possimus! Reiciendis, saepe.
      </p>
    </RdsCard.Content>

    <RdsCard.Footer className="flex justify-center">
      <RdsButton>Button</RdsButton>
    </RdsCard.Footer>
  </RdsCard>
);
