import './Button.css';
import { ReactElement } from 'react';

interface ButtonProps {
  children: ReactElement | string;
}
const Button = ({ children }: ButtonProps) => {
  return <button className="button">{children}</button>;
};

export default Button;
