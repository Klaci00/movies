from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class Show(models.Model):
    title=models.CharField("Title",max_length=100)
    description=models.CharField("Description",max_length=1000)
    start=models.DateTimeField("Start")
    poster=models.ImageField(verbose_name="Poster",upload_to="posters/")
    seat_a=models.IntegerField(default=0)
    seat_b=models.IntegerField(default=0)
    def __str__(self) -> str:
        return self.title+", "+str(self.start)
    
class Reservation(models.Model):
    name=models.CharField("room",max_length=100)
    owner=models.ForeignKey('reserv.CustomUser', related_name='CustomUser', on_delete=models.CASCADE)
    seat_a=models.IntegerField(default=0,name="seat_a")
    seat_b=models.IntegerField(default=0,name="seat_b")
    seat_count = models.IntegerField(default=0)
    start=models.DateTimeField("Start")


    
        
class CustomUser(AbstractUser):
    pass