from django.urls import path
from .views import (
  ClientRegistrationView,
  DevRegistrationView,
  LogoutAPIView,
  MyTokenObtainPairView,
  GetDev,
)
from rest_framework_simplejwt import views as jwt_views





app_name = "user"

urlpatterns = [
  path('client-register', ClientRegistrationView.as_view(), name="client-register"),
  path('dev-register', DevRegistrationView.as_view(), name="dev-register"),
  path('login', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
  path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
  path('token/verify/', jwt_views.TokenVerifyView.as_view(), name='token_verify'),
  path('logout', LogoutAPIView.as_view(), name="logout"),
  path('dev/<int:pk>', GetDev.as_view(), name="dev")
]
