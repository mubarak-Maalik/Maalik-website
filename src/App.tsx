import { LanguageProvider } from './contexts/LanguageContext'
import Home from './pages/Home'

function App() {
  return (
    <LanguageProvider>
      <Home />
    </LanguageProvider>
  )
}

export default App
