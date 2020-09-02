from rest_framework import serializers
from todos.models import Todo , Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class TodoSerializer(serializers.ModelSerializer):
    category_name = serializers.ReadOnlyField(source='category.name')
    # category = CategorySerializer()
    class Meta:
        model = Todo
        fields = '__all__'