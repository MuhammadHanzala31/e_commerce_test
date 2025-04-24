import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { ModalContextProvider } from './context/ModalContext.jsx'
import { store } from './reduxStore/store.js'
import 'remixicon/fonts/remixicon.css'
import '@fontsource/inter'; // Not recommended for production due to bundle size


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ModalContextProvider>
       <Provider store={store}>
        <App />
        </Provider>
      </ModalContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
