import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {useSeatStates} from './SetseatStates';
const VenueDetail = () => {
  axios.defaults.xsrfCookieName = 'csrftoken';
  axios.defaults.xsrfHeaderName = 'X-CSRFToken';

  const { id, venueId } = useParams();
  const [show, setShow] = useState(null);
  const [venue, setVenue] = useState(null);
  const { seatA, setSeatA, seatB, setSeatB, seatC, setSeatC, seatD, setSeatD, seat001, setSeat001,seat002, setSeat002,seat003, setSeat003,seat004, setSeat004,seat005, setSeat005,seat006, setSeat006,seat007, setSeat007,seat008, setSeat008,seat009, setSeat009,seat010, setSeat010,seat011, setSeat011,seat012, setSeat012,seat013, setSeat013,seat014, setSeat014,seat015, setSeat015,seat016, setSeat016,seat017, setSeat017,seat018, setSeat018,seat019, setSeat019,seat020, setSeat020,seat021, setSeat021,seat022, setSeat022,seat023, setSeat023,seat024, setSeat024,seat025, setSeat025,seat026, setSeat026,seat027, setSeat027,seat028, setSeat028,seat029, setSeat029,seat030, setSeat030,seat031, setSeat031,seat032, setSeat032,seat033, setSeat033,seat034, setSeat034,seat035, setSeat035,seat036, setSeat036,seat037, setSeat037,seat038, setSeat038,seat039, setSeat039,seat040, setSeat040,seat041, setSeat041,seat042, setSeat042,seat043, setSeat043,seat044, setSeat044,seat045, setSeat045,seat046, setSeat046,seat047, setSeat047,seat048, setSeat048,seat049, setSeat049,seat050, setSeat050,seat051, setSeat051,seat052, setSeat052,seat053, setSeat053,seat054, setSeat054,seat055, setSeat055,seat056, setSeat056,seat057, setSeat057,seat058, setSeat058,seat059, setSeat059,seat060, setSeat060,seat061, setSeat061,seat062, setSeat062,seat063, setSeat063,seat064, setSeat064,seat065, setSeat065,seat066, setSeat066,seat067, setSeat067,seat068, setSeat068,seat069, setSeat069,seat070, setSeat070,seat071, setSeat071,seat072, setSeat072,seat073, setSeat073,seat074, setSeat074,seat075, setSeat075,seat076, setSeat076,seat077, setSeat077,seat078, setSeat078,seat079, setSeat079,seat080, setSeat080,seat081, setSeat081,seat082, setSeat082,seat083, setSeat083,seat084, setSeat084,seat085, setSeat085,seat086, setSeat086,seat087, setSeat087,seat088, setSeat088,seat089, setSeat089,seat090, setSeat090,seat091, setSeat091,seat092, setSeat092,seat093, setSeat093,seat094, setSeat094,seat095, setSeat095,seat096, setSeat096,seat097, setSeat097,seat098, setSeat098,seat099, setSeat099,seat100, setSeat100,seat101, setSeat101,seat102, setSeat102,seat103, setSeat103,seat104, setSeat104,seat105, setSeat105,seat106, setSeat106,seat107, setSeat107,seat108, setSeat108,seat109, setSeat109,seat110, setSeat110,seat111, setSeat111,seat112, setSeat112,seat113, setSeat113,seat114, setSeat114,seat115, setSeat115,seat116, setSeat116,seat117, setSeat117,seat118, setSeat118,seat119, setSeat119,seat120, setSeat120,seat121, setSeat121,seat122, setSeat122,seat123, setSeat123,seat124, setSeat124,seat125, setSeat125,seat126, setSeat126,seat127, setSeat127,seat128, setSeat128,seat129, setSeat129,seat130, setSeat130,seat131, setSeat131,seat132, setSeat132,seat133, setSeat133,seat134, setSeat134,seat135, setSeat135,seat136, setSeat136,seat137, setSeat137,seat138, setSeat138,seat139, setSeat139,seat140, setSeat140,seat141, setSeat141,seat142, setSeat142,seat143, setSeat143,seat144, setSeat144,seat145, setSeat145,seat146, setSeat146,seat147, setSeat147,seat148, setSeat148,seat149, setSeat149,seat150, setSeat150,seat151, setSeat151,seat152, setSeat152,seat153, setSeat153,seat154, setSeat154,seat155, setSeat155,seat156, setSeat156,seat157, setSeat157,seat158, setSeat158,seat159, setSeat159,seat160, setSeat160,seat161, setSeat161,seat162, setSeat162,seat163, setSeat163,seat164, setSeat164,seat165, setSeat165,seat166, setSeat166,seat167, setSeat167,seat168, setSeat168,seat169, setSeat169,seat170, setSeat170,seat171, setSeat171,seat172, setSeat172,seat173, setSeat173,seat174, setSeat174,seat175, setSeat175,seat176, setSeat176,seat177, setSeat177,seat178, setSeat178,seat179, setSeat179,seat180, setSeat180, } = useSeatStates();

  const seats = [
    { seat: seatA, setSeat: setSeatA },
    { seat: seatB, setSeat: setSeatB },
    { seat: seatC, setSeat: setSeatC },
    { seat: seatD, setSeat: setSeatD },
  ];
  
  useEffect(() => {
    // Fetch show details
    axios.get(`http://127.0.0.1:8000/${id}`)
      .then(response => {
        setShow(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the show!', error);
      });

    // Fetch venue details
    axios.get(`http://127.0.0.1:8000/venues/${venueId}`)
      .then(response => {
        setVenue(response.data);
        setSeatA(response.data.seat_a);
        setSeatB(response.data.seat_b);
        setSeatC(response.data.seat_c);
        setSeatD(response.data.seat_d);
      })
      .catch(error => {
        console.error('There was an error fetching the venue!', error);
      });
  }, [id, venueId]);

  

  const toggleSeat = (seat, setSeat) => {
    if (seat !== 2) {
      setSeat(prevSeat => (prevSeat === 0 ? 1 : 0));
    }
  };

  // Define the getCSRFToken function
  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}




  // Update the reserveSeats function to use the CSRF token
  const reserveSeats = async () => {
    const userId = localStorage.getItem('userId');
    const csrftoken = getCookie('csrftoken');
    console.log(csrftoken);

    axios.patch(`http://127.0.0.1:8000/venues/${venueId}/`, {
      title: show.title,
      room_name: venue.room_name,
      showtime: venue.showtime,
      seat_a: seatA,
      seat_b: seatB,
      seat_c: seatC,
      seat_d: seatD,
      user_id: userId
    }, {
      headers: {
        'X-CSRFToken': csrftoken
      }
    })
    
    .then(response => {
      alert('Seats reserved successfully!');
      
    })
    .catch(error => {
      console.error('There was an error reserving the seats!', error);
      console.log(show.title)
    });
    
    const seatCount = [seatA, seatB, seatC, seatD].reduce((count, seat) => {
      return count + (seat === 1 ? 1 : 0);},0);
      console.log(seatCount);
    console.log(venue.id);
      axios.post(`http://127.0.0.1:8000/reservations/`, {
        venueId: venue.id,
        title: show.title,
        room_name: venue.room_name,
        showtime: venue.showtime,
        seat_a: seatA,
        seat_b: seatB,
        seat_c: seatC,
        seat_d: seatD,
        seat_count: seatCount
      }, {
        headers: {
          'Authorization': `Token ${localStorage.getItem('token')}` // Assuming the token is stored in localStorage
        }
      }).then(response => {
        window.location.reload();
      }).catch(error => {
        console.error('There was an error making the reservation!', error);
      });
      
  };

  if (!show || !venue) return <div>Loading...</div>;

  return (
    <div>
      <h1>{show.title}</h1>
      <img src={show.poster} alt={show.title} />
      <p>Showtime: {new Date(venue.showtime).toLocaleString()}</p>
      <div>
        {seats.map(({ seat, setSeat }, index) => (
          <div
            key={index}
            onClick={() => toggleSeat(seat, setSeat)}
            style={{
              width: '20px',
              height: '20px',
              backgroundColor: seat === 0 ? 'green' : seat === 1 ? 'red' : 'gray',
              display: 'inline-block',
              margin: '5px',
              cursor: seat !== 2 ? 'pointer' : 'not-allowed',
            }}
          ></div>
        ))}
      </div>
      <button onClick={reserveSeats}>Reserve Seats</button>
    </div>
  );
  
};

export default VenueDetail;
