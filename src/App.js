import "./App.css";
import { useState, useEffect } from "react";

 function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then((data) => data.json())
      .then((json) => setData(json.quotes));
  }, []);
  console.log(data);
  return (
    <div className="App">
      {data.map((element) => (
        <div style={{ backgroundColor: "beige" }}>
          <h1>{element.quote}</h1>
        </div>
      ))}
    </div>
  );
}
export default App;