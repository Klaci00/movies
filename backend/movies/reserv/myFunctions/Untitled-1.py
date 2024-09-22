def seatMaker():
    seatList=[]
    for i in range(1,181):
        if i<10: seatList.append(f'seat_00{i}')
        elif i<100: seatList.append(f'seat_0{i}')
        else: seatList.append(f'seat_{i}')
    return seatList

human={'name': "Adam", 'height': 184}
keyword='height'
print(human[f'{keyword}'])
print(seatMaker())
'''def dataMocker():
    data={}
    for i in range(1,181):
        if i<10:
            data.update({f'seat_00{str(i)}': i,})
        elif i<100:
            data.update({f'seat_0{str(i)}': i,})        
        else: 
            data.update({f'seat_{str(i)}': i,})    
    return data
def seatMaker():
    seatDictList=[]
    for i in range(1,181):
        if i<10:
            seatDictList.append("{'seat_00"+str(i)+"': data['seat_00"+str(i)+"'],}")
        elif i<100:
            seatDictList.append("{seat_0"+str(i)+"': data['seat_0"+str(i)+"'],}")
        else: 
            seatDictList.append("{'seat_"+str(i)+"': data['seat_"+str(i)+"'],}")

    return seatDictList
data={'title': 'Titanic',
            'room_name': 'Nagyterem',
            'showtime': 'xy',}
data.update(dataMocker())
def reservData3(user,data):
    dict1={
            'owner': user,
            'title': data['title'],
            'room_name': data['room_name'],
            'showtime': data['showtime'],}
        
    dict1.update(data)
    print(dict1)
    return''

reservData3(user=1,data=data)
''''''
data={}
data.update(dataMocker())

'''
'''
dict1={
    'owner': 'user',
    'title': 'Titanic,'
}
dict2={
    'seat1': 'seat1',
}

dict3={
    'seat_count': 'seat_count'
}

complete = dict1 | dict2 | dict3

print(complete)
'''