
from django import views
from django.urls import path, include
from . import views

app_name = "user"

urlpatterns = [
    path("register/",views.register, name="register"),
    path("login/", views.login_user, name="login_user"),
    path("logout/", views.logout_user, name="logout_user"),
    path("profile/", views.profile, name="profile"),

]
