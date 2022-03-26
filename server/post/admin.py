from django.contrib import admin

# Register your models here.
from .models import Comment, Post, Rating, Message

admin.site.register(Post)
admin.site.register(Comment)
admin.site.register(Rating)
admin.site.register(Message)
