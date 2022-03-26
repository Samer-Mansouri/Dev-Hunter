from .models import Client, Dev, User
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django_restql.mixins import DynamicFieldsMixin
from django.contrib.auth.models import Group
from rest_framework_simplejwt.settings import api_settings


class FullClientSerializer(DynamicFieldsMixin, serializers.ModelSerializer):

    class ClientSerializer(DynamicFieldsMixin, serializers.ModelSerializer):
                
        class Meta:
                model = Client
                fields = ['phone_number']

       
    client = ClientSerializer()
    password2 = serializers.CharField(style={"input_type": "password"}, write_only=True)
    
    class Meta:
        model = User
        extract_kwargs = {
          'password': {'write_only': True}
        }
        fields = ['id', 'email', 'username', 'first_name', 'last_name',  'password', 'password2', 'client', 'profile_pic']
        read_only_fields = ('id',)

    def save(self):

      client_data = self.validated_data.pop('client')      
      user = User(
        email=self.validated_data["email"],
        username = self.validated_data["username"],
        first_name=self.validated_data["first_name"],
        last_name=self.validated_data["last_name"],        
      )

      password = self.validated_data["password"]
      password2 = self.validated_data["password2"]
      
      if password != password2:
        raise serializers.ValidationError({'password': 'Password Must Match'})
      if password == user.username:
        raise serializers.ValidationError({'password': 'Password must be different of username'})
      if password == user.email:
        raise serializers.ValidationError({'password': 'Password must be different of email'})
      if len(password) < 8:
        raise serializers.ValidationError({'password': 'Password length must be over 8 charachters'})
      
      
      user.set_password(password)
      user.is_client = True
      #clients = Group.objects.get(name='clients') 
      #user.groups.add(clients)
      user.save()
      print(user)
      Client.objects.create(client=user, **client_data)
      return user

    def update(self):
      instance = self.instance
      validated_data = self.validated_data
      client_data = validated_data.pop('client')
      client = instance.client
      instance.first_name = validated_data.get('first_name', instance.first_name)
      instance.last_name = validated_data.get('last_name', instance.last_name)
      instance.username = validated_data.get('username', instance.username)
      instance.email = validated_data.get('email', instance.email)
      instance.save()

     
      client.phone_number = client_data.get('phone_number', client.phone_number)
      client.save()
      return instance
    
    def to_representation(self, obj):
        rep = super(FullClientSerializer, self).to_representation(obj)
        rep.pop('password', None)
        return rep

class ClientUpdateSerializer(serializers.ModelSerializer):

  class ClientSerializer(DynamicFieldsMixin, serializers.ModelSerializer):
                
        
        class Meta:
                model = Client
                fields = ['phone_number']
                
    
  client = ClientSerializer()

  class Meta:
      model = User
      fields = ['email', 'username', 'first_name', 'last_name',  'password', 'client']


class FullDevSerializer(serializers.ModelSerializer):

    class DevSerializer(serializers.ModelSerializer):
                
        
        class Meta:
                model = Dev
                fields = ['phone_number']

    dev = DevSerializer()
    password2 = serializers.CharField(style={"input_type": "password"}, write_only=True)
    
    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'first_name', 'last_name',  'password', 'password2', 'dev', 'profile_pic']
        read_only_fields = ('id', )
        extract_kwargs = {
          'password': {'write_only': True}
        }
    
    def save(self):

      dev_data = self.validated_data.pop('dev')      
      user = User(
        email=self.validated_data["email"],
        username = self.validated_data["username"],
        first_name=self.validated_data["first_name"],
        last_name=self.validated_data["last_name"],        
      )
      password = self.validated_data["password"]
      password2 = self.validated_data["password2"]

      if password != password2:
        raise serializers.ValidationError({'password': 'Password Must Match'})
      if password == user.username:
        raise serializers.ValidationError({'password': 'Password must be different of username'})
      if password == user.email:
        raise serializers.ValidationError({'password': 'Password must be different of email'})
      if len(password) < 8:
        raise serializers.ValidationError({'password': 'Password length must be over 8 charachters'})
      
      
      user.set_password(password)
      user.is_dev = True
      user.save()
      Dev.objects.create(dev=user, **dev_data)
      return user

    
    def to_representation(self, obj):
        rep = super(FullDevSerializer, self).to_representation(obj)
        rep.pop('password', None)
        return rep


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
  
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        #token['name'] = user.first_name + " " + user.last_name
        if user.is_client and not user.is_dev:
            token['role'] = 'client'
        elif user.is_dev and not user.is_client:
            token['role'] = 'dev'
        elif not user.is_client and not user.is_dev:
            token['role'] = 'admin'

        return token

    def validate(self, attrs):
        data = super().validate(attrs)

        refresh = self.get_token(self.user)

        data["refresh"] = str(refresh)
        data["access"] = str(refresh.access_token)
        data['name'] = self.user.first_name + " " + self.user.last_name
        data['id'] = self.user.id
        if self.user.is_client and not self.user.is_dev:
            data['role'] = 'client'
        elif self.user.is_dev and not self.user.is_client:
            data['role'] = 'dev'
        elif not self.user.is_client and not self.user.is_dev:
            data['role'] = 'admin'

        if api_settings.UPDATE_LAST_LOGIN:
            update_last_login(None, self.user)

        return data


