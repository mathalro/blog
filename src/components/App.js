import 'normalize.css';
import React from "react";
import ArticleList from "./Articles/ArticleList";

const App = () => {
  const appStyle = {
    margin: "10px 200px 10px 200px",
    backgroundColor: "eee",
    fontFamily: "Arial"
  };

  return (
    <div className="content" style={appStyle}>
      <ArticleList />
    </div>
  )
};

export default App;
