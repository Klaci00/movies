def reserv_data_maker(user:object, data:dict):
    '''
    This function takes the two dictionaries,
    and build one dict from them, which is going 
    to be the reservation data.

    Parameters
    ----------
    user : object
        The CustomUser who will own the reservation.
    data : dict
        The already existing state on the backend.
    
    Returns
    -------
    dict
        The reservation data dict.
    '''
    try:
        reserv_data = {
            'owner': user,
            'title': data['title'],
            'room_name': data['room_name'],
            'showtime': data['showtime'],
            'seats': data['seats'],
            'seat_count': data['seat_count'],
            'seatnames': data['seatnames']
                            }
        
    except KeyError as e:
        print(f'Key error occurred in reserv_data maker: {e}')
        return None
    except TypeError as e:
        print(f'Type error occurred in reserv_data maker: {e}')
        return None
    except Exception as e:
        print(f'An unexpected error occurred in reserv_data maker: {e}')
        return None

    return reserv_data


def venue_data_updater2(data: dict):
    '''
    Iterates through the \'seats\' dict within the request data dict,
    changing the \'prebooked\' seats with a value of 1 to \'booked\'
    with a value of 2. 

    Parameters:
    -----------
    data: dict
        The request data from the HTTP Post request. Also the Venue
        instance data.
    
    Returns:
    --------
    dict
        The updated request/Venue instance data.
    '''
    try:
        seats=data['seats']
        for key,value in seats.items():
            if value==1:
                seats[key]=2
    except KeyError as e:
        print(f'Key error in venue_data_updater2: {e}')
        return None
    except TypeError as e:
        print(f'Type error in venue_data_updater2: {e}')
        return None
    except Exception as e:
        print(f'An unexpected error occurred in venue_data_updater2: {e}')
        return None
    return data


def seat_liberator2(instance: object, venue: object):
    '''
    This function takes the reservation and Venue
    instances and iterates through their \'seats\' dict,
    freeing them up once again.
    This is an important step before finally deleting
    the reservation.
    
    Parameters
    ----------
    instance: object
        The Reservation model instance.
    venue: object
        The Venue model instance.
    
    Returns
    -------
    object
        The Venue instance with the liberated seats.
    '''  
    instance_seats: dict = instance.seats
    venue_seats: dict =  venue.seats
    try:
            for key,value in instance_seats.items():
                if value==1:
                    seat=venue_seats.get(key)
                    if seat:
                        venue.seats[key]=0
                    elif venue_seats[key]==None:
                        raise AttributeError(f'Attribute \'{key}\' not found in venue')
    except AttributeError as e:
        print(f"Attribute error in seat_liberator2: {e}")
        return None
    except TypeError as e:
        print(f"Type error in seat_liberator2: {e}")
        return None
    except Exception as e:
        print(f"An unexpected error occurred in seat_liberator2: {e}")
        return None
    return venue


def venue_data_dict_maker(venue: object):
    '''
    This function takes a Venue instance and returns a customized
    and simplified dictionary for the frontend.

    Parameters
    -----------
    venue: object
        A Venue instance.
    
    Returns
    -------
    dict
        The simplified data form the Venue instance.
    '''
    try:
        venue_data = {
            'id': venue.id,
            'room_name': venue.room_name,
            'showtime': venue.showtime,
        }
        #seat values can be omitted here (Klaci)

    except AttributeError as e:
        print(f'Attribute error: {e}')
        return None
    except TypeError as e:
        print(f'Type error: {e}')
        return None
    except Exception as e:
        print(f'An unexpected error occurred: {e}')
        return None

    return venue_data

def validate(request_seats:dict,instance_seats:dict):
    '''
    This function compares the two dictionaries,
    and returns false if a prebooked seat is already
    reserved, therefore prevents conflicting reservations.

    Parameters
    ----------
    request_seats : dict
        The seats sent by frontend.
    instance_seats : dict
        The already existing state on the backend.
    
    Returns
    -------
    bool
        Whether the reservation is valid, or conflicting.
    '''
    is_valid=True
    for key,value in request_seats.items():
        if value==1 and instance_seats.get(key)==2:
            print('CORRUPTED DATA!')
            is_valid=False
            break
    return is_valid     