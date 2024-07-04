import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme.tsx";
import GlobalState from "./context/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <GlobalState>
    <ChakraProvider theme={theme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChakraProvider>
  </GlobalState>
);
