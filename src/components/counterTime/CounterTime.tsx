
import { memo } from 'react';

const CountTime = memo(({timeUI}: {timeUI: number}) => (<div>Timer: {timeUI}</div>));

export default CountTime;