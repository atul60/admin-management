import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import Header from './components/header/Header';
import { useSelector } from 'react-redux';

function App() {
  console.log("calling app");
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/home' element={<ProtectedRoute component={HomePage} />} />
        {/* <Route path='/home' element={<HomePage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
