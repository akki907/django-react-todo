from django.db import models

# Create your models here.

class Todo(models.Model):
    name =models.CharField(max_length=20,unique=True)
    isComplete = models.BooleanField(default=False)
    created_at = models.DateField(auto_now_add=True)