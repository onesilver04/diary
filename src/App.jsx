import "./App.css";
import MainView from "./components/MainView";
// eslint-disable-next-line no-unused-vars
import HistoryView from "./components/HistoryView";
import { useState } from "react";

function App() {
  const [view, setView] = useState("main");
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
