
for i in range(1,181):
    if i<10:
        print("'seat_00"+str(i)+"': venue.seat_00"+str(i)+",")
    elif i<100:
        print("'seat_0"+str(i)+"': venue.seat_0"+str(i)+",")
    else: 
        print("'seat_"+str(i)+"': venue.seat_"+str(i)+",")
