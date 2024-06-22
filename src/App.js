import React from 'react';

// import aos
// import aos css
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import CarDetails from './components/CarDetails';
import CarsList from './components/CarsList';
import AddCars from './components/AddCars';
import Booking from './components/Booking';
import Update from './components/Update';
import Reservation from './components/Reservation';
import Addacc from './components/Addacc';
import ListAcc from './components/ListAcc';
import Main from './components/Main';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import Legalnotice from './components/legalnotice';
import Cookies from './components/Cookies';
import Dataprotection from './components/dataprotection';
import Termes from './components/Termes';
import ListOfCars from './components/ListOfCars';
import Login from './components/Login';
import ProtectedComponent from './components/ProtectedComponent';
import Eauth from './components/Eauth';
import ProtectedRoute from './ProtectedRoute';


const App = () => {
  // initialize aos
  return (   
    
          <BrowserRouter>
          <div>
          <Routes>
          <Route path="/admin/list_acc" element={<ProtectedRoute component={ListAcc} />} />
          <Route path="/admin/update/:carId" element={<ProtectedRoute component={Update} />} />
          <Route path="/admin/book" element={<ProtectedRoute component={Reservation} />} />
          <Route path="/admin/car/add" element={<ProtectedRoute component={AddCars} />} />
          <Route path="/admin/acc/add" element={<ProtectedRoute component={Addacc} />} />
          <Route path="/admin/home" element={<ProtectedRoute component={Main} />} />
          <Route path="/admin/login" element={<Login />} />
            <Route path="/"  element={<Home/>} />
            <Route path="/car/:carId" element={<CarDetails />} />
            <Route path="/cars" element={<CarsList />} />
            <Route path="/list_cars" element={<ListOfCars />} />
            <Route path="/booking" element={<Booking/>} />
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/About" element={<AboutUs/>} />
            <Route path="/legal-notice" element={<Legalnotice/>} />
            <Route path="/cokies" element={<Cookies/>} />
            <Route path="/data-protection" element={<Dataprotection/>} />
            <Route path="/Termes" element={<Termes/>} />
            {/* Add other routes as needed */}
          </Routes>

          </div>
        </BrowserRouter>


   
 



  );
};

export default App;