import React, { useContext } from "react";
import { AlertContext } from "./App";

export default function Alert() {
    const alert = useContext(AlertContext)
    if (!alert) return null;

  return (
    <div
      style={{
        background: "crimson",
        padding: "20px",
        textAlign: "center",
        color: "#fff",
        margin: "10px 0 ",
      }}
    >
      <h4>This message is very important</h4>
    </div>
  );
}
