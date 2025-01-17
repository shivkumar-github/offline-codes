import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QuestionsContextProvider } from './contexts/QuestionsContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QuestionsContextProvider>
      <App />
      </QuestionsContextProvider>
  </StrictMode>,
)
