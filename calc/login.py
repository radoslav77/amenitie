from django.contrib.auth.signals import user_logged_in
from django.contrib.auth.models import update_last_login


def update_first_login(sender, user, **kwargs):
    if user.last_login is None:
        # First time this user has logged in
        kwargs['request'].session['first_login'] = True
    # Update the last_login value as normal
    update_last_login(sender, user, **kwargs)


user_logged_in.disconnect(update_last_login)
user_logged_in.connect(update_first_login)
