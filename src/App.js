import { useContext } from "react";
import { ThemeContext } from "./themeContext";
import Header from "./components/Header";
import Main from "./components/Main";
import ModeToggler from "./components/ModeToggler";

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme}-theme`}>
      <Header />
      <ModeToggler />
      <Main />
    </div>
  );
};

export default App;
