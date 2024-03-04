import { useState } from "react";

import "./App.css";
import { Nav } from "./components/Nav";
import { Home } from "./components/Pages/home";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Nav></Nav>
        <Home></Home>

        <footer class="bg-gray-800 text-white p-4 text-center">
          <p>&copy; 2024 Your Company</p>
        </footer>
      </div>
    </>
  );
}

export default App;
