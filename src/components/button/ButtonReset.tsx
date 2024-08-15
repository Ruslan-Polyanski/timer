import { memo } from 'react';
import Button from './Button';
import { IButton } from './types';

const ButtonReset: React.FC<IButton> = memo((props) => {
  return <Button {...props} />
});

export default ButtonReset;