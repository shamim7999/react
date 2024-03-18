import React from "react";
import Card from "../components/Card";
import Data from "../jsons/data.json";

const App = () => {
  let items = Data.map((item, index) => {
    return (
      <span key={index}>
        <Card titleText={item.title} descText={item.desc} />
        <br />
      </span>
    );
  });

  return (
    <div>
      <h1 className="headingStyle">TODO APP</h1>
      {items}
    </div>
  );
};

export default App;
