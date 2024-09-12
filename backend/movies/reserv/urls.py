from django.urls import path
from .views import ShowDetail,ShowList,UserCreate,Logout,UserDetail
from rest_framework.authtoken.views import ObtainAuthToken
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.authtoken import views

urlpatterns = [
    path("",ShowList.as_view()),
    path("<int:pk>/",ShowDetail.as_view()),
    path('register/',UserCreate.as_view(),name='register'),
    path('login/', ObtainAuthToken.as_view(), name='login'),
    path('logout/', Logout.as_view(), name='logout'),
    path('user/', UserDetail.as_view(), name='user-detail'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += [
    path('api-token-auth/', views.obtain_auth_token)
]
