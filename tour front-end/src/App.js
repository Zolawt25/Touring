import "./App.css";
import Register from "./pages/Register";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./pages/Login";
import Tour from "./pages/Tour";
import ToursPage from "./pages/ToursPage";
import Home from "./pages/Home";
import SearchPage from "./pages/searchPage";
import Booked from "./pages/Booked";

function App() {
  return (
    <>
     <Router>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/login' element={<Login />}/>
              <Route path='/register' element={<Register />}/>
              <Route path='/tours' element={<ToursPage />}/>
              <Route path='/tour/:id' element={<Tour />}/>
              <Route path='/search' element={<SearchPage />}/>
              <Route path='/booked' element={<Booked />}/>
            </Routes>
          </Router>
    </>
  )
}

export default App;
