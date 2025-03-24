import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './components/UserContext/UserContext';

// Usa createRoot para renderizar la aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
      <UserProvider >
        <App />
      </UserProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

