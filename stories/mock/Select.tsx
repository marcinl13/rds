import { RdsSelect } from "../../src/components/atoms";

export const RoleSelect: React.FC<React.ComponentProps<typeof RdsSelect>> = ({ children, ...props }) => (
  <RdsSelect {...props}>
    <option value="">None</option>
    <option value="APEX">APEX</option>
    <option value="Multi Cloud">Multi Cloud</option>
    <option value="Cloud Solutions">Cloud Solutions</option>
    <option value="Energy">Energy</option>
  </RdsSelect>
);
