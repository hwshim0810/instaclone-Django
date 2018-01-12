from django.db import models
from django.utils.encoding import python_2_unicode_compatible

from instagram_clone.users import models as user_models
from instagram_clone.images import models as image_models


@python_2_unicode_compatible
class Notification(image_models.TimeStampedModel):

    TYPE_CHOICES = (
        # (DB data, Admin View)
        ('like', 'Like'),
        ('comment', 'Comment'),
        ('follow', 'Follow')
    )

    creator = models.ForeignKey(user_models.User, related_name='creator')
    to = models.ForeignKey(user_models.User, related_name='to')
    notification_type = models.CharField(max_length=20, choices=TYPE_CHOICES)
    image = models.ForeignKey(image_models.Image, blank=True, null=True)