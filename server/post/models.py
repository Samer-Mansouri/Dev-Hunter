from django.db import models
from user.models import Dev, Client, User
# Create your models here.

class Post(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(blank=True, max_length=200)
    description = models.TextField()
    github_url = models.CharField(blank=True, max_length=255)
    project_pic = models.ImageField(upload_to='images/', blank=True, null=True)
    created_on = models.DateTimeField(auto_now_add=True)


class Rating(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    rate = models.IntegerField(null=True)


class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    comment = models.CharField(blank=True, max_length=255)
    created_on = models.DateTimeField(auto_now_add=True)

class Message(models.Model):

    sender = models.ForeignKey(User, on_delete=models.CASCADE, related_name='sender')
    receiver = models.ForeignKey(User, on_delete=models.CASCADE, related_name='receiver')
    subject = models.CharField(blank=True, max_length=255)
    message = models.TextField()


