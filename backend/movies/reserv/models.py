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

class Show(models.Model):
    poster = models.ImageField(verbose_name='Poszter',
                               upload_to='images/posters/')
    rating = models.CharField('Korhatár',
                              choices=RATINGS,
                              max_length=50)
    playtime = models.IntegerField('Műsoridő',default=0)
    title = models.CharField('Cím', max_length=100)
    description = models.CharField('Leírás', max_length=1000)
    venues = models.ManyToManyField('Venue', related_name='shows',verbose_name='Vetítések')

    def __str__(self) -> str:
        return self.title
    class Meta:
        verbose_name='Film'
        verbose_name_plural='Filmek'
        

class Venue(models.Model):
    title=models.CharField('Title',max_length=100)
    room_name = models.CharField('Room name',
                                 choices=ROOM_NAMES,
                                 max_length=100)
    showtime = models.DateTimeField('showtime')
    seats=models.JSONField(default=dict, blank=True,null=True)
    room_style=models.ManyToManyField('RoomStyleDict',related_name='venues')
    reservations = models.ManyToManyField('Reservation',
                                          related_name='venues',
                                          blank=True,
                                          null=True)
    def __str__(self) -> str:
        return self.title+', '+self.room_name+', '+str(self.showtime)
    class Meta:
        verbose_name='Vetítés'
        verbose_name_plural='Vetítések'


class Reservation(models.Model):
    venueId=models.IntegerField(default=0)
    title=models.CharField('Cím',max_length=100)
    owner = models.ForeignKey('CustomUser',
                              related_name='reservations',
                              on_delete=models.CASCADE,verbose_name='Tulajdonos')
    room_name = models.CharField('Terem neve', max_length=100)
    showtime = models.DateTimeField('Vetítési időpont')
    seats=models.JSONField(default=dict)
    seat_count = models.IntegerField('Foglalt székek száma',default=0)
    seatnames=models.CharField('Foglalt helyek',max_length=1000,default=' ')
    def __str__(self) -> str:
        return self.owner.username+', '+', '+self.title+', '+self.room_name
    class Meta:
        verbose_name='Foglalás'
        verbose_name_plural='Foglalások'

class CustomUser(AbstractUser):
    first_name = models.CharField('Keresztnév',max_length=30, blank=False, null=False)
    last_name = models.CharField('Vezetéknév',max_length=30, blank=False, null=False)
    def __str__(self):
        return self.username
    class Meta:
        verbose_name='Felhasználó'
        verbose_name_plural='Felhasználók'


class RoomStyleDict(models.Model):
    room_name=models.CharField('Terem neve',max_length=100)
    capacity=models.IntegerField('Férőhelyek száma',default=0)
    inner_text=models.JSONField(default=dict)
    style_dict=models.JSONField(default=dict)
    def __str__(self):
        return self.room_name
    class Meta:
        verbose_name='Teremterv'
        verbose_name_plural='Teremtervek'
