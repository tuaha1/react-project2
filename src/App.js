import React from "react";
import "./App.css";
import Nav from "./Navigation";
import Shop from "./Shop";
import About from "./About";
import Item from "./ItemDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<Item />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      {<Shop />}
    </div>
  );
};

export default App;
