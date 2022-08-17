import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import 'animate.css';
import { ThemeContextProvider } from "./components/contexts/themeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
