from django.db import models
from django.contrib.auth.models import AbstractUser

ROOM_NAMES={'Kisterem':'Kisterem',
            'Nagyterem': 'Nagyterem',
            'Közepes terem':'Közepes terem'}

RATINGS={'Korhatárra való tekintet nélkül megtekinthető': 
         'Korhatárra való tekintet nélkül megtekinthető',
         '6 éven felülieknek': '6 éven felülieknek',
         '12 éven felülieknek': '12 éven felülieknek',
         '16 éven felülieknek': '16 éven felülieknek',
         '18 éven felülieknek': '18 éven felülieknek'}

ROOM_SIZES={'Kisterem':80,
            'Nagyterem': 120,
            'Közepes terem':180}

class Show(models.Model):
    poster = models.ImageField(verbose_name="Poster",
                               upload_to="posters/")
    rating = models.CharField("Rating",
                              choices=RATINGS,
                              max_length=50)
    playtime = models.IntegerField(default=0)
    title = models.CharField("Title", max_length=100)
    description = models.CharField("Description", max_length=1000)
    venues = models.ManyToManyField('Venue', related_name='shows')

    def __str__(self) -> str:
        return self.title

class Venue(models.Model):
    title=models.CharField("Title",max_length=100)
    room_name = models.CharField("Room name",
                                 choices=ROOM_NAMES,
                                 max_length=100)
    showtime = models.DateTimeField("showtime")
    seats=models.JSONField(default=dict, blank=True,null=True)
    capacity=models.IntegerField('Férőhelyek',default=0)
    room_style=models.ManyToManyField('RoomStyleDict',related_name='venues')
    reservations = models.ManyToManyField('Reservation',
                                          related_name='venues',
                                          blank=True,
                                          null=True)
    def __str__(self) -> str:
        return self.title+", "+self.room_name+", "+str(self.showtime)

class Reservation(models.Model):
    venueId=models.IntegerField(default=0)
    title=models.CharField(max_length=100)
    owner = models.ForeignKey('CustomUser',
                              related_name='reservations',
                              on_delete=models.CASCADE)
    room_name = models.CharField("room", max_length=100)
    showtime = models.DateTimeField("showtime")
    seats=models.JSONField(default=dict)
    seat_count = models.IntegerField(default=0)
    seatnames=models.CharField(max_length=1000,default=" ")
    def __str__(self) -> str:
        return self.owner.username+', '+', '+self.title+', '+self.room_name

class CustomUser(AbstractUser):
    first_name = models.CharField(max_length=30, blank=False, null=False)
    last_name = models.CharField(max_length=30, blank=False, null=False)
    def __str__(self):
        return self.username

class RoomStyleDict(models.Model):
    room_name=models.CharField(max_length=100)
    
    style_dict=models.CharField(default={      
        'screen':{  'backgroundColor': 'rgb(58, 170, 170)',
                    'width': '30vw',
                    'fontSize': 'x-large'
                    },
        'corridor': {
            'height': '5vw'
        },
        'seats_and_entrance': {
            'display': 'flex',
            'width': '45vw',
            'justifyContent': 'center'
        },
        'gap_upper_left':{
            'width': '5vw',
            'height': '14.3vh'
        },
        'gap_upper': {
            'height': '14.3vh'
        },
        'entrance': {
            'backgroundColor': 'greenyellow',
            'width': '5vw',
            'height': '5.5vh',
            'justifyContent': 'center',
            'alignContent': 'center'
        },
        'back_corridor': {
            'height': '5.5vh',
            'width': '10vw'
        },
        'seats_container': {
            'display': 'grid',
            'height': '35vh',
            'gridTemplateColumns': 'repeat(8,1fr)',
            'gridTemplateRows': 'repeat(4,1fr)',
            'gap': '7px',
            'justifyContent': 'center',
            'alignContent': 'center'

        }},max_length=2048)
    def __str__(self):
        return self.room_name
    '''
gap_upper_left
gap_upper
entrance
back corridor
seats_container

    })'''