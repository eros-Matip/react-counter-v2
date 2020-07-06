import React, { useState } from "react";
import Header from "./components/Header";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [counters, setCounters] = useState([0]);

  return (
    <div>
      <Header />
      <hr />
      <Counter counters={counters} setCounters={setCounters} />
      <Footer application={"React"} from={"Le reacteur"} name={"Éros"} />
    </div>
  );
}

export default App;
