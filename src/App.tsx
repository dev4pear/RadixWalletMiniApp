import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const data = (window as any).Telegram.WebApp.initData;
  const platform = (window as any).Telegram.WebApp.platform;

  return platform === "tdesktop" ? (
    <div className="App">This is telegram desktop</div>
  ) : (
    <div className="App">This is telegram mobile</div>
  );
}

export default App;
