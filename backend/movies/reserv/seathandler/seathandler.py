def seat_maker():
    seats={}
    for i in range(1000):
        seat = 'seat_' + str(i).zfill(3)
        seats[seat] = 0
    return seats

def reserv_data_maker(user, data):
    try:
        reserv_data = {
            'owner': user,
            'title': data['title'],
            'room_name': data['room_name'],
            'showtime': data['showtime'],
            'seats': data['seats'],
            'seat_count': data['seat_count'],
            'seatnames': data.get('seatnames', '')
        }
        
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


def venue_data_updater2(data):
    try:
        for i in range(1000):
            seat = 'seat_' + str(i).zfill(3)
            if seat in data['seats']:
                if data['seats'][seat] == 1:
                    data['seats'][seat] = 2
            else: break
                #raise KeyError(f'Seat \'{seat}\' not found in data')
                # raising the above keyerror would be counterproductive,
                # since the seat fields are nullable, to satisfy the
                # need for different room sizes !!!
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

def seat_liberator2(instance, venue):
    try:
            if hasattr(instance, 'seats') and hasattr(venue,'seats'):
                for i in range(1000):
                    seat = 'seat_' + str(i).zfill(3)
                    if seat in instance.seats and instance.seats[seat]==1:
                        venue.seats[seat]=0
                
            elif not hasattr(instance, 'seats'):
                raise AttributeError(f'Attribute \'{seat}\' not found in instance')
            elif not hasattr(venue, 'seats'):
                raise AttributeError(f'Attribute \'{seat}\' not found in venue')
                
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


def reserv_data(user, data):
    try:
        reserv_data = {
            'owner': user,
            'title': data['title'],
            'room_name': data['room_name'],
            'showtime': data['showtime'],
        }

        for i in range(1,181):
            seat = 'seat_' + str(i).zfill(3)
            if seat in data:
                reserv_data[seat] = data[seat]
            else: break
                #raise KeyError(f'Seat \'{seat}\' not found in data')
                # raising the above keyerror would be counterproductive,
                # since the seat fields are nullable, to satisfy the
                # need for different room sizes !!!
        reserv_data['seat_count'] = data['seat_count']
        reserv_data['seatnames']= data.get('seatnames', '')

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
        for i in range(1,181):
            seat = 'seat_' + str(i).zfill(3)
            if seat in data:
                if data[seat] == 1:
                    data[seat] = 2
            else: break
                #raise KeyError(f'Seat \'{seat}\' not found in data')
                # raising the above keyerror would be counterproductive,
                # since the seat fields are nullable, to satisfy the
                # need for different room sizes !!!
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
        for i in range(1,181):
            seat = 'seat_' + str(i).zfill(3)
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



def venue_data_dict_maker(venue):
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
