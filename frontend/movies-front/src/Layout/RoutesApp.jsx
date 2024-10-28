import { Routes,Route } from "react-router-dom"
import Register from '../Auth/Register';
import Login from '../Auth/Login';
import ShowsList from '../Shows/ShowsList';
import VenueDetail from '../Venues/VenueDetail';
import ListVenues from '../Venues/ListVenues';
import Reservations2 from '../Reservations/Reservations2';
import AddShow from '../Admin/AddShow';
import { AddVenue } from '../Admin/AddVenue';

export const RoutesApp=(props)=>{
    return <Routes className='routes'>
    <Route path='/' element={<ShowsList />} />
    <Route path='/register' element={<Register />} />
    <Route path='/login' element={<Login setAuth={props.setIsAuth} />} />
    <Route path='/:id' element={<ListVenues className='listvenues' />} />
    <Route path=':id/venues/:venueId' element={<VenueDetail />} />
    <Route path='/reservations' element={<Reservations2 username={props.username} />} />
    <Route path='/addshow' element={<AddShow/>} />
    <Route path='/addvenue' element={<AddVenue/>} />
  </Routes>
}