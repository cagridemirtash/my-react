import "./App.css";
import ListUser from "./components/ListUser/ListUser";
import Profile from "./components/Profile";
import ButtonCounter from "./components/Button/ButtonCounter";
import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="App">
      <Profile />
      <ListUser />
      <ButtonCounter counter={counter} handleClick={handleClick} />
      <ButtonCounter counter={counter} handleClick={handleClick} />
      <ButtonCounter counter={counter} handleClick={handleClick} />
    </div>
  );
}

export default App;
