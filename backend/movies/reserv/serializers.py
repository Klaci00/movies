from .models import Show,Venue,Reservation,CustomUser
from rest_framework import serializers
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth.models import User

class ShowSerializer(serializers.ModelSerializer):
    class Meta:
        model=Show
        fields="__all__"
        depth=2

User=get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=CustomUser
        fields=('id','first_name','last_name','username','password','email','is_staff')
        extra_kwargs={'password': {'write_only':True}}
    
    def create(self,validated_data):
        user=CustomUser.objects.create_user(**validated_data)
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

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):               
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Add custom claims
        token['username'] = user.username
        token['is_staff'] = user.is_staff
        return token