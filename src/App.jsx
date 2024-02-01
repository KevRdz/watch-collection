// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// pages
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import AddWatch from './pages/AddWatch/AddWatch'
import WatchList from './pages/WatchList/WatchList'
import EditWatch from './pages/EditWatch/EditWatch'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as watchService from './services/watchService'

// styles
import './App.css'

function App() {
  const [user, setUser] = useState(authService.getUser())
  const [watches, setWatches] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    const fetchAllWatches = async () => {
      const watchData = await watchService.getAll()
      setWatches(watchData)
    }
    fetchAllWatches()
  }, [])

  const handleAddWatch = async (newWatchData) => {
    const newWatch = await watchService.create(newWatchData)
    setWatches([...watches, newWatch])
  }

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = () => {
    setUser(authService.getUser())
  }

  const handleDeleteWatch = async id => {
    const deleteWatch = await watchService.deleteOne(id)
    setWatches(watches.filter(watch => watch._id !== deleteWatch._id))
  }

  const handleUpdateWatch = async updatedWatchData => {
    const updatedWatch = await watchService.update(updatedWatchData)
    const newWatchArray = watches.map(watch =>
      watch._id === updatedWatch._id ? updatedWatch : watch
    )
    setWatches(newWatchArray)
    navigate('/')
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route
          path="/"
          element={<WatchList watches={watches} handleDeleteWatch={handleDeleteWatch} user={user}/>}
        />
        <Route
          path="/add"
          element={<AddWatch handleAddWatch={handleAddWatch} />}
        />
        <Route
          path="/edit"
          element={<EditWatch handleUpdateWatch={handleUpdateWatch}/>}
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/auth/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
