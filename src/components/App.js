import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Nav from "./Nav";
import Home from "../pages/Home";
import About from "../pages/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
