"""Url patterns for stores app"""

from django.urls import path
from .views import CreateStoreView, ListStoresView

urlpatterns = [
	path('all/', ListStoresView.as_view()),
	path('create/', CreateStoreView.as_view())
]
