import React, { useState } from "react";
import "./App.css";
import List from "./components/List";
function App() {
  interface IState {
    people: {
      name: string;
      url: string;
      age: number;
      note?: string;
    }[];
  }
  const [people, setPeople] = useState<IState["people"]>([]);
  // const [people, setPeople] = useState([
  //   {
  //     name: "梁朝伟",
  //     url: "",f
  //     age: 23,
  //     note: "重庆森林",
  //   },
  //   {
  //     name: "吴彦祖",
  //     url: "",
  //     age: 23,
  //   },
  // ]);

  people.map((persen) => {
    console.log(persen.name);
  });

  return (
    <div className="App">
      <h1>人物列表</h1>
      <List></List>
    </div>
  );
}

export default App;
