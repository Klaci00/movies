from django.urls import path
from .views import ShowDetail,ShowList,UserCreate,Logout,UserDetail,\
        CustomObtainAuthToken,show_venues,set_csrf_token,VenueDetail,\
        ReservDetail,ReservationListView,ReservDestroy,ListVenues
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.authtoken import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path("",ShowList.as_view()),
    path("<int:pk>/",ShowDetail.as_view()),
    path('<int:show_id>/venues/', show_venues, name='show-venues'),
    path('<int:show_id>/venues/<int:venue_id>/', VenueDetail.as_view(), name='venue-detail'),
    path('venues/<int:pk>/', VenueDetail.as_view(), name='venue-detail2'),
    path('admin-venues',ListVenues.as_view(),name='admin-venues'),
    path('reservdestroy/<int:pk>/',ReservDestroy.as_view(),name='reserv-destroy'),
    path('reservations/', ReservDetail.as_view(), name='reserv-detail'),
    path('reservations/<str:owner>/', ReservationListView.as_view(), name='reserv-list'),
    path('register/',UserCreate.as_view(),name='register'),
    path('login/', CustomObtainAuthToken.as_view(), name='login'),
    path('logout/', Logout.as_view(), name='logout'),
    path('user/', UserDetail.as_view(), name='user-detail'),
    path('set_csrf_token/',set_csrf_token,name='set_csrf_token'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),


] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += [
    path('api-token-auth/', views.obtain_auth_token),
    
]
