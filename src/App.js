import React, { useState, useEffect, useMemo } from "react";

// useMemo - render bo'ladigan compenentlarni ajratib olish u-n ish-di.

function complete(num) {
  console.log("CompleteCompute");
  let i = 0;
  while (i < 10000000) i++;
  return num * 2;
}

export default function App() {
  const [number, setNumber] = useState(8);
  const [colored, setColor] = useState(false);

  const styles = useMemo(() => {
    return {
      color: colored ? "crimson" : "white",
    };
  }, [colored]);

  const computed = useMemo(() => {
    return complete(number);
  }, [number]);

  useEffect(() => {
    console.log("Styles was changed");
  }, [styles]);

  return (
    <div className="container">
      <p style={styles}>Amount: {computed}</p>
      <button className="success" onClick={() => setNumber((prev) => prev + 1)}>
        Add
      </button>
      <button className="danger" onClick={() => setNumber((prev) => prev - 1)}>
        Delete
      </button>
      <button className="secondary" onClick={() => setColor((prev) => !prev)}>
        Edit
      </button>
    </div>
  );
}
