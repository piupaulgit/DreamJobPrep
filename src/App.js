import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Search from "./pages/Search";
import SelectionSort from "./pages/sorting/SelectionSort";
import BubbleSort from "./pages/sorting/BubbleSort";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="ml-64 p-4 w-full">
          <Routes>
            <Route path="/selectionSort" element={<SelectionSort />} />
            <Route path="/bubbleSort" element={<BubbleSort />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
