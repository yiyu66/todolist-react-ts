import React, { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";
function App() {
  interface IState {
    people: {
      name: string;
      img: string;
      age: number;
      note?: string;
    }[];
  }
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "詹姆斯",
      img: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      age: 35,
      note: "Allegeric to staying on the same team",
    },
    {
      name: "科比",
      img: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      age: 42,
    },
  ]);

  return (
    <div className="App">
      <h1>人物列表</h1>
      <List people={people}></List>
    </div>
  );
}

export default App;
