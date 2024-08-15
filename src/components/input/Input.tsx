
import { memo } from 'react';
import style from './style.module.css';

interface IInput {
  value: number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<IInput> = memo(({value, onChange}) => {
  return (
    <div className={style.inputBox}>
      <div>Add number of seconds:</div>
      <input type="text" value={value} onChange={onChange}/>
    </div>
  )
});

export default Input;