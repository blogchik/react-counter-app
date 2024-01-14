import React, { useEffect } from 'react';
import './App.css';
import Cookies from 'js-cookie';
import { SpeedInsights } from "@vercel/speed-insights/next"

function App() {

  const [count, setCount] = React.useState(0);

  useEffect(() => {

    const savedCount = Cookies.get('count');

    if (savedCount !== undefined) {
      setCount(parseInt(savedCount, 10));
    }
  }, []);

  const onPlus = () => {
    const newCount = count + 1;
    setCount(newCount);

    Cookies.set('count', newCount);
  };

  const onMinus = () => {
    const newCount = count - 1;
    setCount(newCount);

    Cookies.set('count', newCount);
  };

  const onReset = () => {
    setCount(0);

    Cookies.set('count', 0);
  };

  return (
    <div className="App">
      
      <h1>React Counter App</h1>

      <div className={'counter'}>
        <p className={'count'}>{count}</p>
        <div className={'btns'}>
          <span onClick={onMinus} className={'btn minus'}><i class="fi fi-rr-minus-small"></i></span>
          <span onClick={onReset} className='reset'>Reset</span>
          <span onClick={onPlus} className={'btn plus'}><i class="fi fi-rr-plus-small"></i></span>
        </div>
      </div>

      <SpeedInsights/>

    </div>
  );

}

export default App;