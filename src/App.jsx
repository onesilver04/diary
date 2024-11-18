import "./App.css";
import MainView from "./components/MainView";
// eslint-disable-next-line no-unused-vars
import HistoryView from "./components/HistoryView";
import { useEffect, useState } from "react";

function App() {
  const [view, setView] = useState("main");

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/hackurity01/simple-diary/main/src/questions.json"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div className="container">
      {view === "main" ? (
        <MainView setView={setView} />
      ) : (
        <HistoryView setView={setView} />
      )}
    </div>
  );
}

export default App;
