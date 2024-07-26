import './App.css'
import { AppRoutes } from './routes/Routes'
import { Header } from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { UserProvider } from './contexts/UserContext'
import { UserLocationProvider } from './contexts/UserLocationContext'


function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <UserLocationProvider>
          <ThemeProvider>
            <Header/>
            <AppRoutes/>
          </ThemeProvider>
        </UserLocationProvider>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
