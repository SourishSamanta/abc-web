import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Main from './dashboard/Main.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import RoutesController from './Routes/RoutesController.jsx'
import { dark, neobrutalism } from '@clerk/themes'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/" appearance={{
        baseTheme: [dark]
      }}>
     <RoutesController />
    </ClerkProvider>
    </BrowserRouter>
)
