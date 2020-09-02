from todos.models import Todo, Category
from rest_framework import viewsets, permissions
from .serializer import TodoSerializer ,CategorySerializer
from rest_framework.response import Response


class TodoViewSet(viewsets.ModelViewSet):

    serializer_class = TodoSerializer
    queryset = Todo.objects.all()


class CategoryViewSet(viewsets.ModelViewSet):

    serializer_class = CategorySerializer
    queryset = Category.objects.all()