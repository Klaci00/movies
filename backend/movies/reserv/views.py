from rest_framework.authtoken.views import ObtainAuthToken
from .models import Show,CustomUser,Reservation,Venue
from .serializers import ShowSerializer,UserSerializer,\
                         VenueSerializer,ReservSerializer
from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django.views.decorators.csrf import ensure_csrf_cookie
from pprint import pprint
from .seathandler.seathandler import reserv_data_maker,venue_data_dict_maker,\
                                     venue_data_updater2,seat_liberator2

class ShowDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset=Show.objects.all()
    serializer_class=ShowSerializer
    
    
class VenueDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset=Venue.objects.all()
    serializer_class=VenueSerializer
    def partial_update(
            self,
            request,
            *args,
            **kwargs
            ):
        instance=self.get_object()
        data=request.data
        #Update seats with my imported function!
        serializer = self.get_serializer(
                                        instance,
                                        data=venue_data_updater2(data),
                                        partial=True
                                        )
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        return Response(serializer.data, status=status.HTTP_200_OK)

class ReservDestroy(generics.DestroyAPIView):
    queryset=Reservation.objects.all()
    serializer_class=ReservSerializer

    def destroy(self, request, *args, **kwargs):
        
            instance = self.get_object()
            # Custom logic before deletion
            
            # Example of custom logic: logging the deletion
            
            venue = Venue.objects.get(id=instance.venueId)
            pprint(venue)

            
            print(f"Venue associated with reservation: {venue.id}")
            
            venue=seat_liberator2(instance,venue)
            venue.save()
            print(f"Deleting reservation: {instance.title}")

            # Perform the deletion
            self.perform_destroy(instance)
            return Response(status=status.HTTP_204_NO_CONTENT)



    def perform_destroy(self, instance):
        instance.delete()

class ReservDetail(generics.ListCreateAPIView):
    queryset = Reservation.objects.all()
    serializer_class = ReservSerializer

    def perform_create(self, serializer):
        data = serializer.validated_data
        pprint(data)
        print(self.request.user.id)
        try:
            user = CustomUser.objects.get(id=self.request.user.id)
        except CustomUser.DoesNotExist:
            return Response(
                {'error': 'User not found'},
                status=status.HTTP_404_NOT_FOUND
                            )
        reservation_data = reserv_data_maker(user,data)

        
        # Create the reservation using the serializer
        serializer.save(**reservation_data)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

class ReservationListView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, owner):
        print(owner)
        owner_user = CustomUser.objects.get(username=owner)
        reservations = Reservation.objects.filter(owner=owner_user.id)
        serializer = ReservSerializer(reservations, many=True)
        return Response(serializer.data)
    
class ShowList(generics.ListAPIView):
    queryset=Show.objects.all()
    serializer_class=ShowSerializer

def show_venues(request, show_id):
    show = get_object_or_404(Show, id=show_id)
    venues = show.venues.all()
    venues_data = [venue_data_dict_maker(venue) for venue in venues]   
    #Inline serialization is possible in Python,
    #but it returns a JSON string, which is a security issue.
    #That's why I implemented a custom function that returns
    #a dictionary. (Klaci)
    return JsonResponse({'venues': venues_data})

def venue_detail(request, show_id, venue_id):
    venue_data = venue_data(venue = get_object_or_404(Venue, id=venue_id, shows__id=show_id))
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
            'user_id': token.user_id,
        })
@ensure_csrf_cookie
def set_csrf_token(request):
    return JsonResponse({'detail': 'CSRF cookie set'})
