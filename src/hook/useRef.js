import React, { useState, useEffect, useRef } from "react";

// useRef - bu yordamida component nechi marta render bo'lgamini bilib olishimiz mn

// let renderCount = 1;

export default function App() {
  // const [renderCount, setRenderCount] = useState(1);
  const [value, setValue] = useState("default");
  const renderCount = useRef(1);
  const inputRef = useRef(null);
  const prevValue = useRef("");

  console.log(renderCount);

  useEffect(() => {
    // setRenderCount(prev => prev + 1) // useState yordamida
    renderCount.current++;
    console.log(inputRef.current.value);
  });

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  const focus = () => inputRef.current.focus();

  return (
    <div className="container">
      <p>Amount of rendering : {renderCount.current}</p>
      <p>Last value: {prevValue.current}</p>
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button className="success" onClick={focus}>
        Click Me
      </button>
    </div>
  );
}
