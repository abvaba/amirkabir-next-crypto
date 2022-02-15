import _ from './countdown.module.scss'
import {useEffect, useState} from "react";
const Countdown = () => {
  const [time, setTime] = useState(0)
  const [sdf, setSdf] = useState(301);
  let i = 1;
  const initialOffset = 301 / 60;
  console.log(initialOffset);
  useEffect(() => {
    if(time < 60) {
      const timer = setInterval(() => {
        setTime(prevTime => prevTime + 1);
        setSdf(prevItem => prevItem - initialOffset);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [time]);
  return (
    <>
      <div className={_.cContainer}>
        <svg viewBox="0 0 100 100">
          <defs>
            <linearGradient id="ant-progress-gradient-0" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#f2c265"/>
              <stop offset="100%" stopColor="#f7b44f"/>
            </linearGradient>
          </defs>
          <path
            d="M 50,50 m 0,-48 a 48,48 0 1 1 0,96 a 48,48 0 1 1 0,-96"
            stroke="url(#ant-progress-gradient-0)"
            strokeLinecap="square"
            strokeWidth="4"
            opacity="1"
            fillOpacity="0"
            strokeDasharray="301"
            strokeDashoffset={sdf}
          />
        </svg>
        <h2 className={_.cTime}>{time}</h2>
        <p>Net APY</p>
      </div>
    </>
  )
}

export default Countdown;