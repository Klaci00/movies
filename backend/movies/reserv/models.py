from django.db import models
from django.contrib.auth.models import AbstractUser
from .seathandler.seathandler import seat_maker

class Show(models.Model):
    poster = models.ImageField(verbose_name="Poster", upload_to="posters/")
    rating = models.CharField("Rating", max_length=50)
    playtime = models.IntegerField(default=0)
    title = models.CharField("Title", max_length=100)
    description = models.CharField("Description", max_length=1000)
    venues = models.ManyToManyField('Venue', related_name='shows')

    def __str__(self) -> str:
        return self.title

class Venue(models.Model):
    title=models.CharField("Title",max_length=100)
    room_name = models.CharField("Room name", max_length=100)
    showtime = models.DateTimeField("showtime")
    seats=models.JSONField(default=seat_maker)
    reservations = models.ManyToManyField('Reservation', related_name='venues',blank=True,null=True)
    def __str__(self) -> str:
        return self.title+", "+self.room_name+", "+str(self.showtime)

class Reservation(models.Model):
    venueId=models.IntegerField(default=0)
    title=models.CharField(max_length=100)
    owner = models.ForeignKey('CustomUser', related_name='reservations', on_delete=models.CASCADE)
    room_name = models.CharField("room", max_length=100)
    showtime = models.DateTimeField("showtime")
    seats=models.JSONField(default=seat_maker)
    seat_count = models.IntegerField(default=0)
    def __str__(self) -> str:
        return self.owner.username+', '+', '+self.title+', '+self.room_name

class CustomUser(AbstractUser):
    pass
