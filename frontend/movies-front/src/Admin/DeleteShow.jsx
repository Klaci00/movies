import { useEffect, useState } from "react"
import { FetchShowsList } from "../Shows/HTTP/FetchShowsList";
import { BASE_URL } from "../Settings";
import { DestroyShow } from "./HTTP/DestroyShow";
import { DeleteShowApp } from "./Apps/DeleteShowApp";

export const DeleteShow=()=>{
    const [shows,setShows]=useState([]);
    const [selectedShow,setSelectedShow]=useState(0);
    useEffect(()=>{
       FetchShowsList(BASE_URL,setShows);
    },[]);

    const handleDropdownChange=(e)=>{
        setSelectedShow(e.target.value);
        console.log(e.target.value);
    };

    const handleSubmit=async(e)=>{
        e.preventDefault();
        await DestroyShow(selectedShow);
        FetchShowsList(BASE_URL,setShows)
    };

    return(<>
            <DeleteShowApp handleSubmit={handleSubmit} selectedShow={selectedShow} handleDropdownChange={handleDropdownChange} shows={shows}></DeleteShowApp>
    </>)
}