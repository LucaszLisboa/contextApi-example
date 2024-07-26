import './App.css'
import { AppRoutes } from './routes/Routes'
import { Header } from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { UserProvider } from './contexts/UserContext'


function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <ThemeProvider>
          <Header/>
          <AppRoutes/>
        </ThemeProvider>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
