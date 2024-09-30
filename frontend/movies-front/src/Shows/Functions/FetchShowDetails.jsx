import axios from 'axios';

export const FetchShowDetails = (setShow,id) =>{

 const getShow = axios.get(`http://127.0.0.1:8000/${id}`)
      .then(response => {
        setShow(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the show!', error);
      });};