from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Category(models.Model):
    name =models.CharField(max_length=20,unique=True)
    created_at = models.DateField(auto_now_add=True)

class Todo(models.Model):
    name =models.CharField(max_length=20,unique=True)
    isComplete = models.BooleanField(default=False)
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE, null=True)
    created_at = models.DateField(auto_now_add=True)

    # def __str__(self):
    #     return self.task