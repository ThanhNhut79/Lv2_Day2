import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import BodyContent from "./Components/BodyContent";
import Footer2 from "./Components/Footer2";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app">
        <Header />
        <Banner />
        <Content />
        <BodyContent />
        <Footer />
        <Footer2 />
      </div>
    </>
  );
}

export default App;
