import { useEffect, useState } from "react"
import { FetchShowsList } from "../Shows/HTTP/FetchShowsList";
import { BASE_URL } from "../Settings";
import { DestroyShow } from "./HTTP/DestroyShow";
import { DeleteShowApp } from "./Apps/DeleteShowApp";

export const DeleteShow = (props) => {
    const [shows, setShows] = useState([]);
    const [selectedShow, setSelectedShow] = useState(0);
    useEffect(() => {
        FetchShowsList(BASE_URL, setShows);
    }, []);

    const handleDropdownChange = (e) => {
        setSelectedShow(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const confirmDelete = window.confirm('Are you sure you want to delete this venue?');
        if (confirmDelete) {
            await DestroyShow(selectedShow);
            FetchShowsList(BASE_URL, setShows);
        };
    };

    return (<>
        <DeleteShowApp handleSubmit={handleSubmit} selectedShow={selectedShow} handleDropdownChange={handleDropdownChange} shows={shows} darkMode={props.darkMode}></DeleteShowApp>
    </>)
}