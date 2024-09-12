from django.shortcuts import render
from .models import Show,CustomUser,Reservation
from .serializers import ShowSerializer,UserSerializer
from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated

# Create your views here.

class ShowDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset=Show.objects.all()
    serializer_class=ShowSerializer
    def partial_update(self, request, *args, **kwargs):
        instance = self.get_object()
        data = request.data
        user=CustomUser.objects.get(pk=self.user)
        # Create a new Reservation instance
        reservation_data = {
            'name': instance.title,
            'owner': data.user,
            'seat_a': instance.seat_a if instance.seat_a == 1 else 0,
            'seat_b': instance.seat_b if instance.seat_b == 1 else 0,
            'seat_count': sum([1 for seat in [instance.seat_a, instance.seat_b] if seat == 1]),
            'start': instance.start
        }
        reservation = Reservation.objects.create(**reservation_data)
        # Update seat values from 1 to 2
        if 'seat_a' in data and data['seat_a'] == 1:
            data['seat_a'] = 2
        if 'seat_b' in data and data['seat_b'] == 1:
            data['seat_b'] = 2

        serializer = self.get_serializer(instance, data=data, partial=True)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        return Response(serializer.data, status=status.HTTP_200_OK)
    

class ShowList(generics.ListAPIView):
    queryset=Show.objects.all()
    serializer_class=ShowSerializer


class UserCreate(CreateAPIView):
    serializer_class = UserSerializer


class UserDetail(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)


class Logout(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            request.user.auth_token.delete()
        except (AttributeError, Token.DoesNotExist):
            return Response(status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_200_OK)
    