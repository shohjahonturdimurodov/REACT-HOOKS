import React, { useState } from "react";

function randomNumber() {
  console.log("calculate");
  return Math.trunc(Math.random() * 20);
}

export default function App() {
  // const numberState = useState(7) // bu massiv qaytaradi
  // console.log(numberState)
  const [number, setNumber] = useState(() => {
    return randomNumber();
  });

  const [state, setState] = useState({
    text: "Number",
    data: Date.now(),
  });

  function increment() {
    // setNumber((prev) => {
    //   return prev + 1
    // })
    setNumber((prev) => prev + 1);
  }

  function decrement() {
    setNumber((prev) => prev - 1);
  }

  function uploadObject() {
    setState((prev) => {
      return {
        ...prev,
        text: "New Text",
      };
    });
  }

  return (
    <div className="container">
      <p>Number: {number} </p>
      <div className="btn-group">
        <button onClick={increment} className="success">
          Add
        </button>
        <button onClick={decrement} className="danger">
          Delete
        </button>
        {/* Callback funksiya orqali */}
        {/* <button className="secondary" onClick={() => setState({ text: 'New text' })}>Change</button> */}
        {/* funksiya orqali */}
        <button className="secondary" onClick={uploadObject}>
          Change
        </button>
      </div>
      <prev>{JSON.stringify(state, null, 5)}</prev>
    </div>
  );
}
