
from django import views
from django.urls import path, include
from . import views

app_name = "calc"

urlpatterns = [
    path('', views.index, name='index'),
    path('update', views.update, name='update' ),
    path('upload', views.upload_csv, name='upload_csv'),
    path('media', views.media_file, name='media_file'),
    path('today', views.update_daily, name='update_daily'),
    path('tomorrow', views.tomorrow_amenities, name='tomorrow_amenities'),
    path('longstay', views.longstay, name='longstay'),
    path('special', views.special, name='special'),
    path('day-after',views.day_after, name='day_after'),
    path('months/<str:month>', views.month, name='month'),
    path('delete-CSV/<int:id>', views.delete_media, name='delete_media'),
    path('daily-addson', views.update, name='update'),
    path('total/<str:month>', views.total, name='total'),
    path('delete-entry/<int:id>', views.delete_entry, name='delete_entry'),
   

    # API
    path('code_API', views.code_API, name='code_API'),


]
