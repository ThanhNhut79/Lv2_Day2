import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Content from "./Components/Content";
import Footer from "./Components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app">
        <Header />
        <Banner />
        <Content />
        <Footer />
      </div>
    </>
  );
}

export default App;
