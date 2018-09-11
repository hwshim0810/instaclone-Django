from urllib.request import urlopen
from io import BytesIO

from django.dispatch import receiver
from django.core.files import File
from allauth.account.signals import user_signed_up


@receiver(user_signed_up)
def user_signed_up(request, user, **kwargs):
    if len(user.socialaccount_set.all()) > 0:
        social_account = user.socialaccount_set.all()[0]
        
        uid = social_account.uid
        
        user.gender = social_account.extra_data.get('gender', None)
        
        avatar = social_account.get_avatar_url()
        avatar_image = urlopen(avatar)
        io = BytesIO(avatar_image.read())

        user.profile_image.save('{}.jpg'.format(uid), File(io))
        user.name = user.get_full_name()

    user.save()
