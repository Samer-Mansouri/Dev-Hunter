from django.contrib import admin

# Register your models here.
from .models import User, Dev, Client

admin.site.register(User)
admin.site.register(Dev)
admin.site.register(Client)