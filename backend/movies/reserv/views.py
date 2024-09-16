from rest_framework.authtoken.views import ObtainAuthToken
from .models import Show,CustomUser,Reservation,Venue
from .serializers import ShowSerializer,UserSerializer
from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django.views.decorators.csrf import ensure_csrf_cookie

# Create your views here.

class ShowDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset=Show.objects.all()
    serializer_class=ShowSerializer
    def partial_update(self, request, *args, **kwargs):
        instance = self.get_object()
        data = request.data
                # Fetch the CustomUser instance
        try:
            user = CustomUser.objects.get(id=data['user_id'])
        except CustomUser.DoesNotExist:
            return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

        print(instance.seat_a)
        print(instance.seat_b)
        # Create a new Reservation instance
        reservation_data = {
            'room_name': instance.title,
            'owner': user,
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

def show_venues(request, show_id):
    show = get_object_or_404(Show, id=show_id)
    venues = show.venues.all()
    venues_data = [{'id': venue.id, 'room_name': venue.room_name, 'showtime': venue.showtime, 'seat_a':venue.seat_a,'seat_b':venue.seat_b,'seat_c':venue.seat_c,'seat_d':venue.seat_d,} for venue in venues]
    return JsonResponse({'venues': venues_data})

def venue_detail(request, show_id, venue_id):
    venue = get_object_or_404(Venue, id=venue_id, shows__id=show_id)
    venue_data = {
        'id': venue.id,
        'room_name': venue.room_name,
        'showtime': venue.showtime,
        'seat_a': venue.seat_a,
        'seat_b': venue.seat_b,
        'seat_c': venue.seat_c,
        'seat_d': venue.seat_d
    }
    return JsonResponse(venue_data)

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


class CustomObtainAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        token = Token.objects.get(key=response.data['token'])
        return Response({
            'token': token.key,
            'user_id': token.user_id
        })
@ensure_csrf_cookie
def set_csrf_token(request):
    return JsonResponse({'detail': 'CSRF cookie set'})
