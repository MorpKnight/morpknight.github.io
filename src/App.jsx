import { useEffect, useState } from "react";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Work from "./components/Work";
import Project from "./components/Project";
import Contact from "./components/Contact";
import TechSkill from "./components/TechSkill";

function App() {
  const [count, setCount] = useState(
    parseInt(localStorage.getItem('visitCount')) || 0
  );

  useEffect(() => {
    localStorage.setItem('visitCount', count.toString());
  }, [count]);

  useEffect(() => {
    setCount(count + 1);
  }, []);

  return (
    <div className="App">
      <Sidenav />
      <Main />
      <Work />
      <TechSkill />
      <Project />
      <Contact />
      {
        console.log(count)
      }
    </div>
  );
}

export default App;
