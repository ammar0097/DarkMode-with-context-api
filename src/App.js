import { Container } from "@chakra-ui/react";
import { useContext } from "react";
import "./App.css";
import { ThemeContext } from "./components/contexts/themeContext";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";

function App() {
  const {darkMode} = useContext(ThemeContext);
  return (

    <div className={darkMode ? "App-dark" : "App"}>
      <Container>
        <Navbar/>
        <Home />
      </Container>
    </div>
  );
}

export default App;
