from django.shortcuts import render
from .models import Show,CustomUser
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

class ShowList(generics.ListAPIView):
    queryset=Show.objects.all()
    serializer_class=ShowSerializer


class UserCreate(CreateAPIView):
    serializer_class = UserSerializer

class Logout(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            request.user.auth_token.delete()
        except (AttributeError, Token.DoesNotExist):
            return Response(status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_200_OK)