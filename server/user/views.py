from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.generics import CreateAPIView
from .serializers import FullDevSerializer, FullClientSerializer, MyTokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveUpdateDestroyAPIView
from .models import User
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.pagination import PageNumberPagination
from django.http import Http404
from rest_framework_simplejwt.tokens import RefreshToken




class ClientRegistrationView(CreateAPIView):
  serializer_class = FullClientSerializer

  def post(self, request, format=None):
    serializer = self.get_serializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    client = serializer.save()
    data = {
      "Response": "User registred successfully",
      "email": client.email,
      "username": client.username
    }
    return Response(data)

  def get_serializer(self, *args, **kwargs):
        serializer_class = self.get_serializer_class()
        kwargs['context'] = self.get_serializer_context()
        return serializer_class(*args, **kwargs)

class DevRegistrationView(CreateAPIView):
  serializer_class = FullDevSerializer

  def post(self, request, format=None):
    serializer = self.get_serializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    dev = serializer.save()
    data = {
      "Response": "User registred successfully",
      "email": dev.email,
      "username": dev.username
    }
    return Response(data)

  def get_serializer(self, *args, **kwargs):
        serializer_class = self.get_serializer_class()
        kwargs['context'] = self.get_serializer_context()
        return serializer_class(*args, **kwargs)
    
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class GetDev(APIView):


  def get_object(self, pk): 
    try: 
      return User.objects.get(pk=pk) 
    except User.DoesNotExist: 
      raise Http404
  
  def get(self, request, pk, format=None):
    dev = self.get_object(pk) 
    serializer = FullDevSerializer(dev) 
    return Response(serializer.data) 
  


class LogoutAPIView(APIView):
    permission_classes = (IsAuthenticated,)
    authentication_classes = (JWTAuthentication, )

    

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()

            return Response({"success":"logged out successfully"},status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response({"error":"something went wrong"},status=status.HTTP_400_BAD_REQUEST)
