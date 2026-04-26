import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { ShopProvider } from "./context/shopcontext";


// const root = ReactDOM.createRoot(document.getElementById('root')!);

// root.render(
//   <React.StrictMode>
//     <ShopProvider>
//       <App />
//     </ShopProvider>
//   </React.StrictMode>,
// )
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ShopProvider>
    <App />
    </ShopProvider>
  </StrictMode>,
);
