import React from "react";
import ModalProvider from "./context/ModalContext";
import PlaygroundProvider from "./context/PlaygroundContext";
import HomeScreen from "./screens/HomeScreen/index";
import Playground from "./screens/Playground/index";
import GlobalStyles from "./styles/globals";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Page404 from "./screens/Page404/index";


function App() {
  return (
    <PlaygroundProvider>
      <ModalProvider>
        <GlobalStyles />
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
  );
}

export default App;