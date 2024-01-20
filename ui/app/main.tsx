import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './globals.css'
import { ThemeProvider } from './providers/theme.provider'
import AuthProvider from './providers/auth.provider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <App />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
)
