import { RdsCard } from "../../src/components/molecules";

export const MockCard: React.FC<React.ComponentProps<typeof RdsCard>> = ({
  children,
  ...props
}) => (
  <RdsCard {...props}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate corporis
    officia natus debitis illum, dolorem mollitia illo, nihil, eaque praesentium
    iure. Inventore officiis cumque temporibus dolores soluta ab rerum iure.
  </RdsCard>
);
