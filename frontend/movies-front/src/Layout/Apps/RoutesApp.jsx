import { Routes,Route } from "react-router-dom"
import Register from '../../Auth/Register';
import ShowsList from '../../Shows/ShowsList';
import VenueDetail from '../../Venues/VenueDetail';
import ListVenues from '../../Venues/ListVenues';
import Reservations2 from '../../Reservations/Reservations2';
import AddShow from '../../Admin/AddShow';
import { AddVenue } from '../../Admin/AddVenue';
import Login2 from "../../Auth/Login2";
import { ContactsApp } from "./ContactsApp";

export const RoutesApp=({username,setUsername,setisStaff,isAuth,setIsAuth,handleLoginSuccess})=>{
  
    return <Routes className='routes'>
    <Route path='/' element={<ShowsList />} />
    <Route path='/register' element={<Register onloginSuccess={handleLoginSuccess} setAuth={setIsAuth} setUsernameGlobal={setUsername} setisStaff={setisStaff} />} />
    <Route path='/:id' element={<ListVenues className='listvenues' isAuth={isAuth} />} />
    <Route path=':id/venues/:venueId' element={<VenueDetail />} />
    <Route path='/reservations' element={<Reservations2 username={username} />} />
    <Route path='/addshow' element={<AddShow/>} />
    <Route path='/addvenue' element={<AddVenue/>} />
    <Route path="/login2" element={<Login2 onLoginSuccess={handleLoginSuccess} setAuth={setIsAuth} setisStaff={setisStaff} setUsernameGlobal={setUsername} />}/>
    <Route path='/contact'element={<ContactsApp/>} ></Route>
  </Routes>
}