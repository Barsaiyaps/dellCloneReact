import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider as UIProvider } from "./components/ui/provider"
import { BrowserRouter } from "react-router";


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
  <UIProvider>
      <App />
  </UIProvider>
    </BrowserRouter>
)
