import './App.css';
import { Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import Missions from './components/Missions'
import Rockets from './components/Rockets'
import Profile from './components/Profile'
import store from './Redux/Store';


const App = () => {
  return (
    <>
      <Navbar />
      <Provider store={store}>
        <Routes>
          <Route path='/Rockets' element={<Rockets />} />
          <Route path='/Missions' element={<Missions />} />
          <Route path='/Profile' element={<Profile />} />
        </Routes>
      </Provider>
    </>
  )
}

export default App