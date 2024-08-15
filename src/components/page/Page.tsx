import { useCallback, useEffect, useRef, useState } from "react";
import ButtonStart from '../button/ButtonStart';
import ButtonReset from '../button/ButtonReset';
import Input from '../input/Input';
import CountTime from '../counterTime/CounterTime';
import style from './style.module.css';

const Page: React.FC = () => {
  const [textInput, setTextInput] = useState(0);
  const [timeUI, setTimeUI] = useState(0);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    const result = +event.target.value;

    if(!Number.isNaN(result) && result < Number.MAX_SAFE_INTEGER) {
      setTextInput(() => result)
    }
  }, [textInput])

  const refStart = useRef<() => void>();
  const refReset = useRef<() => void>();

  const handleResetClick = useCallback(() => {
    if(refReset.current !== undefined){
      refReset.current()
    }
  }, [])

  const handleStartButton = useCallback(() => {
    if(refStart.current !== undefined){
      refStart.current()
    }
  }, [])

  useEffect(() => {
    refStart.current = () => {
      if(textInput !== 0) {
        setTimeUI(textInput)
        setTextInput(0)
      }
    }

    refReset.current = () => {
      if(timeUI !== 0) {
        setTimeUI(0)
      }
    }
  })


  useEffect(() => {
    let timerId: NodeJS.Timeout;
    if(timeUI > 0) {
      timerId = setInterval(() => {
        setTimeUI(timeUI - 1)
      }, 1000)
    }
    return () => {
      clearInterval(timerId)
    }
  }, [timeUI])

  return (
    <div className={style.main}>
      <CountTime timeUI={timeUI} />
      <Input value={textInput} onChange={handleChange} />
      <div className={style.buttonBox}>
        <div className={style.button__left}>
          <ButtonStart disabled={textInput ? false : true} onClick={handleStartButton}>Start</ButtonStart>
        </div>
        <div className={style.button_right}>
          <ButtonReset disabled={timeUI ? false : true} onClick={handleResetClick}>Reset</ButtonReset>
        </div>
      </div>
    </div>
  )
}

export default Page;
