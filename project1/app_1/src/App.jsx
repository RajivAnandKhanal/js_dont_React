import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Count, { Class_Component } from "./pages/Count";

import "./App.css";

function App() {
  return (
    <>
      <Home />
      <Count />
      <Class_Component />
      {/* <Footer /> */}
    </>
  );
}
// this page is to import all the other pages from src/pages and render them here

export default App;
