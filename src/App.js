import './App.css';
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Missions from './components/pages/Missions'
import Rockets from './components/pages/Rockets'
import Profile from './components/pages/Profile'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/Rockets' element={<Rockets />} />
        <Route path='/Missions' element={<Missions />} />
        <Route path='/Profile' element={<Profile />} />
      </Routes>
    </>
  )
}

export default App