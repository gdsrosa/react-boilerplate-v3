import React, { MouseEvent } from 'react';

import './styles.scss';

enum ButtonColors {
  primary = 'primary',
  secondary = 'secondary',
}
type ButtonProps = {
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick(event: MouseEvent<HTMLElement>): void;
};

const Button: React.FC<ButtonProps> = ({ children, type, onClick }) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
