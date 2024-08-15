
import { IButton } from './types';
import style from './button.module.css';

const Button: React.FC<IButton> = ({onClick, children, disabled}) => {
  return <button className={style.button} disabled={disabled} onClick={onClick}>{children}</button>
}

export default Button;