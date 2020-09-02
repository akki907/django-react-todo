from rest_framework import routers
from .api import TodoViewSet , CategoryViewSet
router = routers.DefaultRouter()
router.register('api/todos',TodoViewSet,'todos')
router.register('api/categories',CategoryViewSet,'categories')

urlpatterns = router.urls