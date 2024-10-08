from .models import Show,Venue,Reservation
from rest_framework import serializers
from django.contrib.auth import get_user_model

class ShowSerializer(serializers.ModelSerializer):
    class Meta:
        model=Show
        fields="__all__"
        depth=2

User=get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=('id','username','password','email','is_staff')
        extra_kwargs={'password': {'write_only':True}}
    
    def create(self,validated_data):
        user=User.objects.create_user(**validated_data)
        return user
    
class VenueSerializer(serializers.ModelSerializer):
    class Meta:
        model=Venue
        fields="__all__"
        depth=1
    
class ReservSerializer(serializers.ModelSerializer):
    class Meta:
        model=Reservation
        fields="__all__"
        depth=1