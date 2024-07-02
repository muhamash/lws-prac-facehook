import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import ProfilePage from './pages/ProfilePage';
import RegistrationPage from './pages/RegistrationPage';

function App() {

  return (
    <Routes>
      <Route element={<HomePage/>} path="/" exact/>
      <Route element={<RegistrationPage/> } path="/registration" />
      <Route element={<ProfilePage/> }  path="/profile"/>
      <Route element={<LoginPage/> } path="/login" />
      
      <Route element={<NotFoundPage/> }  path="*"/>
   </Routes>
  )
}

export default App
