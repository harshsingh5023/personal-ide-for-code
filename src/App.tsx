import React from 'react';
import GlobalStyles from './styles/globals'; 
import HomeScreen from './screens/Homescreen';
import ModalProvider from './context/ModalContext';

function App() {
  return (
    <ModalProvider>
      <GlobalStyles />
      <HomeScreen />
    </ModalProvider>
  );
}

export default App;
