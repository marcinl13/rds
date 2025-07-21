import { RdsButton } from "../../src/components/atoms";
import {
  RdsCard,
  RdsCardContent,
  RdsCardDescription,
  RdsCardFooter,
  RdsCardHeader,
  RdsCardTitle,
} from "../../src/components/molecules/Card";

export const MockCard: React.FC<React.ComponentProps<typeof RdsCard>> = () => (
  <RdsCard className="min-w-100 max-w-sm">
    <RdsCardHeader>
      <RdsCardTitle>Card Title</RdsCardTitle>
      <RdsCardDescription>Brief description or subtitle.</RdsCardDescription>
    </RdsCardHeader>

    <RdsCardContent>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam itaque voluptate soluta id quidem nihil, sit
        deserunt iusto a provident facere harum, eius omnis at similique labore possimus! Reiciendis, saepe.
      </p>
    </RdsCardContent>

    <RdsCardFooter className="flex justify-center">
      <RdsButton>Button</RdsButton>
    </RdsCardFooter>
  </RdsCard>
);
