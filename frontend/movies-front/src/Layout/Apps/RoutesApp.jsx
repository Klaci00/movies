import { Routes, Route } from "react-router-dom"
import Register from '../../Auth/Register';
import ShowsList from '../../Shows/ShowsList';
import VenueDetail from '../../Venues/VenueDetail';
import ListVenues from '../../Venues/ListVenues';
import Reservations2 from '../../Reservations/Reservations2';
import AddShow from '../../Admin/AddShow';
import { AddVenue } from '../../Admin/AddVenue';
import Login2 from "../../Auth/Login2";
import { ContactsApp } from "./ContactsApp";
import { AdminInterface } from "../../Admin/Apps/AdminInterface";
import { DeleteShow } from "../../Admin/DeleteShow";
import { DeleteVenue } from "../../Admin/DeleteVenue";
import { jwtDecode as decode } from "jwt-decode";
import { getCookie } from "../../Auth/Functions/CookieHandler";
import ShowsSlideshow from "../../Shows/ShowsSlideShow";
import { Index } from "../Index";

export const RoutesApp = ({ username, setUsername, setisStaff, isAuth, setIsAuth,darkMode }) => {


  return <Routes className='routes'>
    <Route path='/' element={<Index darkMode={darkMode}/>} />
    <Route path='/:id' element={<ListVenues className='listvenues' isAuth={isAuth} />} />
    <Route path=':id/venues/:venueId' element={<VenueDetail />} />
    <Route path='/reservations' element={<Reservations2 username={username} darkMode={darkMode} />} />
    <Route path="/login2" element={<Login2 
      setAuth={setIsAuth}
      setisStaff={setisStaff}
      setUsernameGlobal={setUsername} />} />
    <Route path='/register' element={<Register 
      setAuth={setIsAuth}
      setUsernameGlobal={setUsername}
      setisStaff={setisStaff} />} />
    <Route path='/administration' element={<AdminInterface />} ></Route>
    <Route path='/addshow' element={<AddShow />} />
    <Route path='/addvenue' element={<AddVenue />} />
    <Route path='/deleteshow' element={<DeleteShow />} ></Route>
    <Route path='/deletevenue' element={<DeleteVenue />}></Route>
    <Route path='/contact' element={<ContactsApp />} ></Route>
  </Routes>
}