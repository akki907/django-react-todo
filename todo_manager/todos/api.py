from todos.models import Todo
from rest_framework import viewsets,permissions
from .serializer import TodoSerializer

class TodoViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    # queryset = Todo.objects.all()
    
    serializer_class = TodoSerializer

    def get_queryset(self):
        return self.request.user.todos.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)