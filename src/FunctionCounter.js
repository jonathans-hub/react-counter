import React from "react";
import { useState } from "react";

export default function FunctionCounter () {
  const [count, HandleChange] = useState({number: 0});
  return (
      <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: 30 + 'px'}}>
        <h2>Function Counter</h2>
        <h1>Counter : {count.number}</h1>
        <div>
        <button onClick={() => HandleChange({number:++count.number})}>Increase</button>
        <button onClick={() => HandleChange({number:--count.number})}>Decrease</button>
        </div>
      </div>
  );
}
