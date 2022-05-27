  
  import {useState} from 'react';
  import React from 'react'
  
  export const Assage=()=>{ 
        // const ainabToggle = () => {
        //     setTogggle((Count) => !Count);
        //     setCount((Count) => Count + 1)
        // };
        // const [Toggle, setTogggle] = useState(false);
        // const [Count, setCount] = useState(0);

        const [counter,setcounter]=useState(0)

        const addCount=()=>setcounter(prevcounter=>prevcounter+1)
        const resetCount=()=>setcounter(0)
 
      return(
          <div className="container">
              <div className='bdr'>
                  <h1 className='counter' >
                      {counter}
                  </h1>
                  <button className='reset-btn' onClick={resetCount}>Reset</button>
                  <button className='counter-btn' onClick={addCount}>Count</button>
              </div>
          </div>
      )
  }