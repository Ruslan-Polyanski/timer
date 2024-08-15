import { memo } from 'react';
import Button from './Button';
import { IButton } from './types';

const ButtonStart: React.FC<IButton> = memo((props) => {
  return <Button {...props} />;
});

export default ButtonStart;