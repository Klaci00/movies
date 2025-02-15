import { useEffect, useState } from "react"
import { FetchShowsList } from "../Shows/HTTP/FetchShowsList";
import { BASE_URL } from "../Settings";
import { DestroyVenue } from "./HTTP/DestroyVenue";
import { DeleteVenueApp } from "./Apps/DeleteVenueApp";
import { FetchVenues } from "./HTTP/FetchVenues";
export const DeleteVenue=(props)=>{
    const [shows,setShows]=useState([]);
    const [selectedShow,setSelectedShow]=useState('');
    const [venues,setVenues]=useState([]);
    const [selectedVenue,setSelectedVenue]=useState('');
    useEffect(()=>{
        FetchShowsList(BASE_URL,setShows);
    },[]);

    const handleDropdownChange=async(e)=>{ //Selecting the show
        const showId=e.target.value
        setVenues([]);
        setSelectedShow(showId)
        await FetchVenues(showId,setVenues);
        console.log(venues);
    };

    const handleDropdownChange2=(e)=>{ //Selecting the venue
        setSelectedVenue(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const confirmDelete=window.confirm('Are you sure you want to delete this venue?');
        if(confirmDelete){
        await DestroyVenue(selectedVenue);
        await FetchVenues(selectedShow,setVenues);}
    };

    return(<>
        <DeleteVenueApp 
        handleSubmit={handleSubmit}
        selectedShow={selectedShow}
        handleDropdownChange={handleDropdownChange}
        shows={shows}
        selectedVenue={selectedVenue}
        handleDropdownChange2={handleDropdownChange2}
        venues={venues}
        darkMode={props.darkMode}
        ></DeleteVenueApp>
    </>)
}