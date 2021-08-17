import React, { useState, useEffect } from "react";

export default function App() {
  const [user, setUser] = useState("users");
  const [data, setData] = useState([]); // fetch API uchun
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  // useEffect(() => {
  //  console.log('render'  + user)
  // }, [user]) // faqat user state ni render qiladi, state o'zgarsa render ham o'zgaradi. Agar massive bo'sh bo'lsa ren faqat 1 marta ishlaydi, u yo'q bo'lsa qayta-qayta ishlayveradi.

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${user}`)
      .then((response) => response.json())
      .then((json) => setData(json));
    return () => {
      console.log("Clean");
    };
  }, [user]);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    });
  }, []);

  return (
    <div className="container">
      <p>Users: {user} </p>
      <div className="btn-group">
        <button onClick={() => setUser("users")} className="success">
          Web Developer
        </button>
        <button onClick={() => setUser("posts")} className="danger">
          Android Developer
        </button>
        <button onClick={() => setUser("todos")} className="secondary">
          IOS Developer
        </button>
      </div>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <pre>{JSON.stringify(position, null, 2)}</pre>
    </div>
  );
}
