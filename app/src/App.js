import logo from './logo.svg';
import './App.css';
import Homepage from './components/homepage';
import "bootstrap/dist/css/bootstrap.min.css";
// import Signup from './components/signup';
// import LoginForm from './components/login';
import Places from './components/places';
import Bookingform from './components/bookingform';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      {/* <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<LoginForm/>}/> */}
      <Route path="/places" element={<Places/>}/>
      <Route path="/bookingform" element={<Bookingform/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
