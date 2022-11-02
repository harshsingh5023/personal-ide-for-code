import React from "react";
import ModalProvider from "./context/ModalContext";
import PlaygroundProvider from "./context/PlaygroundContext";
import HomeScreen from "./screens/HomeScreen";
import Playground from "./screens/Playground";
import GlobalStyles from "./styles/globals";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Page404 from "./screens/Page404";
import DarkLightMode from "./components/DarkLightMode";
import { ThemeContextProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeContextProvider>
    <PlaygroundProvider>
      <ModalProvider>
        <GlobalStyles />
            <DarkLightMode/>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomeScreen />} />

            <Route
              path='/code/:folderId/:playgroundId'
              element={<Playground />}
            />

            {/* For undefined paths - 404 page */}
            <Route path='*' element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      </ModalProvider>
    </PlaygroundProvider>
    </ThemeContextProvider>
  );
}

export default App;