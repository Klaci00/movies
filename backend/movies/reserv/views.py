from rest_framework.authtoken.views import ObtainAuthToken
from .models import Show,CustomUser,Reservation,Venue
from .serializers import ShowSerializer,UserSerializer,\
                         VenueSerializer,ReservSerializer,\
                            CustomTokenObtainPairSerializer
from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView
from rest_framework import generics, status
from rest_framework_simplejwt.token_blacklist.models import BlacklistedToken, OutstandingToken
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django.views.decorators.csrf import ensure_csrf_cookie
from rest_framework.exceptions import NotFound
from pprint import pprint
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from .seathandler.seathandler import reserv_data_maker,venue_data_dict_maker,\
                                     venue_data_updater2,seat_liberator2,\
                                     seat_maker
from rest_framework_simplejwt.views import TokenObtainPairView

class ShowDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset=Show.objects.all()
    serializer_class=ShowSerializer
    
    
class VenueDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes =[IsAuthenticated]
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
    permission_classes =[IsAuthenticated]
    queryset=Reservation.objects.all()
    serializer_class=ReservSerializer
    def destroy(self, request, *args, **kwargs):
        
            instance = self.get_object()
            # Custom logic before deletion
            
            # Example of custom logic: logging the deletion
            
            venue = Venue.objects.get(id=instance.venueId)
            pprint(venue)

            
            print(f'Venue associated with reservation: {venue.id}')
            
            venue=seat_liberator2(instance,venue)
            venue.save()
            print(f'Deleting reservation: {instance.title}')

            # Perform the deletion
            self.perform_destroy(instance)
            return Response(status=status.HTTP_204_NO_CONTENT)



    def perform_destroy(self, instance):
        instance.delete()

class ReservDetail(generics.ListCreateAPIView):
    permission_classes =[IsAuthenticated]
    queryset = Reservation.objects.all()
    serializer_class = ReservSerializer

    def perform_create(self, serializer):
        data = serializer.validated_data
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
    permission_classes =[IsAuthenticated]
    def get(self, request, owner):
        print(request)
        owner_user = CustomUser.objects.get(username=owner)
        reservations = Reservation.objects.filter(owner=owner_user.id)
        serializer = ReservSerializer(reservations, many=True)
        return Response(serializer.data)
    
class ShowList(generics.ListCreateAPIView):
    queryset=Show.objects.all()
    serializer_class=ShowSerializer
    def list(self, request, *args, **kwargs):
        #print('Request data:', request.data)          # Request body data
        #print('Request headers:', request.headers)    # Request headers
        #print('Request query params:', request.query_params)  # Query parameters
        response = super().list(request, *args, **kwargs)
        return response

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

class ListVenues(generics.ListCreateAPIView):
    permission_classes =[IsAuthenticated]
    queryset=Venue.objects.all()
    serializer_class=VenueSerializer

    def perform_create(self, serializer):
        pprint(self.request.data)
        request_data = self.request.data
        show_id = request_data.get('show_id')

        try:
            show = Show.objects.get(id=show_id)
        except Show.DoesNotExist:
            raise NotFound('Show not found')

        venue = serializer.save(
            title=request_data.get('title'),
            room_name=request_data.get('room_name'),
            showtime=request_data.get('showtime'),
            seats=seat_maker()
        )

        show.venues.add(venue)

class UserCreate(CreateAPIView):
    serializer_class = UserSerializer


class UserDetail(APIView):
    permission_classes =[IsAuthenticated]
    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)

class CheckUsername(APIView):
    def get(self, request, username):
        user_exists = CustomUser.objects.filter(username=username).exists()
        if user_exists:
            return Response({'message': 'Username is taken.'}, status=status.HTTP_200_OK)
        else:
            return Response({'message': 'Username is available.'}, status=status.HTTP_200_OK)

class CheckEmail(APIView):
    def get(self,request,email):
        email_exists=CustomUser.objects.filter(email=email).exists()
        if email_exists:
            return Response({'message':'E-mail is taken.'},status=status.HTTP_200_OK)
        else:
            return Response({'message':'E-mail is available.'},status=status.HTTP_200_OK)

class Logout(APIView):

    def post(self, request):
        try:
            request.user.auth_token.delete()
        except (AttributeError, Token.DoesNotExist):
            return Response(status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_200_OK)

class Logout2(APIView):
    def post(self, request):
        try:
            # Access the refresh token from the cookies
            refresh_token = request.data['refresh']
            print(refresh_token)
            if not refresh_token:
                return Response({'detail': 'Refresh token not provided.'}, status=status.HTTP_400_BAD_REQUEST)
            
            token = RefreshToken(refresh_token)
            outstanding_token = OutstandingToken.objects.filter(token=token).first()
            # Blacklist the token
            if outstanding_token:
                BlacklistedToken.objects.create(token=token)

            # Clear the cookies
            response = Response(status=status.HTTP_200_OK)
            
            return response
        except Exception as e:
            print(f'Logout error: {str(e)}')  # Log the error
            return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)

class CustomObtainAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        token = Token.objects.get(key=response.data['token'])
        user = token.user
        return Response({
            'token': token.key,
            'user_id': user.id,
            'is_staff': user.is_staff,
        })

@ensure_csrf_cookie
def set_csrf_token(request):
    return JsonResponse({'detail': 'CSRF cookie set'})

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        tokens = response.data
        
        response.set_cookie(
            key='access_token',
            value=tokens['access'],
            httponly=True,
            secure=True,
            samesite='Lax',
        )
        response.set_cookie(
            key='refresh_token',
            value=tokens['refresh'],
            httponly=True,
            secure=True,
            samesite='Lax',
        )
        print(response)
        return response

class AuthStatusView(APIView):
    def get(self, request):
        user = request.user
        return Response({
            'user': {
                'username': user.username,
                'is_staff': user.is_staff,
                 }
        })