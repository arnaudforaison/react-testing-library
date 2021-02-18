import { HTMLProps } from "react";

type Props = Omit<HTMLProps<HTMLButtonElement>, 'type'>;
const Button = ({ children, ...props }: Props) => (
  <button type="button" {...props}>{children}</button>
);
export default Button;
