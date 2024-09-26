from .seatlist import seatlist

def reserv_data(user, data):
    try:
        reserv_data = {
            'owner': user,
            'title': data['title'],
            'room_name': data['room_name'],
            'showtime': data['showtime'],
        }

        for seat in seatlist:
            if seat in data:
                reserv_data[seat] = data[seat]
            else:
                raise KeyError(f'Seat \'{seat}\' not found in data')

        reserv_data['seat_count'] = data['seat_count']
        
    except KeyError as e:
        print(f'Key error: {e}')
        return None
    except TypeError as e:
        print(f'Type error: {e}')
        return None
    except Exception as e:
        print(f'An unexpected error occurred: {e}')
        return None

    return reserv_data


def venue_data_updater(data):
    try:
        for seat in seatlist:
            if seat in data:
                if data[seat] == 1:
                    data[seat] = 2
            else:
                raise KeyError(f'Seat \'{seat}\' not found in data')
                
    except KeyError as e:
        print(f'Key error: {e}')
        return None
    except TypeError as e:
        print(f'Type error: {e}')
        return None
    except Exception as e:
        print(f'An unexpected error occurred: {e}')
        return None

    return data


def seat_liberator(instance, venue):
    try:
        for seat in seatlist:
            if hasattr(instance, seat) and getattr(instance, seat) == 1:
                setattr(venue, seat, 0)
            elif not hasattr(instance, seat):
                raise AttributeError(f'Attribute \'{seat}\' not found in instance')
                
    except AttributeError as e:
        print(f"Attribute error: {e}")
        return None
    except TypeError as e:
        print(f"Type error: {e}")
        return None
    except Exception as e:
        print(f"An unexpected error occurred: {e}")
        return None

    return venue



def venue_data(venue):
    try:
        venue_data = {
            'id': venue.id,
            'room_name': venue.room_name,
            'showtime': venue.showtime,
        }

        for seat in seatlist:
            if hasattr(venue, seat):
                venue_data[seat] = getattr(venue, seat)
            else:
                raise AttributeError(f'Attribute \'{seat}\' not found in venue')

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
