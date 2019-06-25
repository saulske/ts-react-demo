import React, {FunctionComponent} from 'react';

interface IButton {
  text: string;
  disabled?: boolean;
  onClick: () => void;
}

const SubmitButton: FunctionComponent<IButton> = ({
  text,
  disabled = false,
  onClick
}) => <button disabled={disabled} onClick={onClick}>{text}</button>;

export default SubmitButton;
