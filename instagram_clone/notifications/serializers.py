from rest_framework import serializers

from instagram_clone.users import models as user_models
from instagram_clone.users import serializers as user_serializers
from instagram_clone.images import serializers as image_serializers

from . import models


class NotificationSerializer(serializers.ModelSerializer):

    creator = user_serializers.ListUserSerializer()
    image = image_serializers.SmallImageSerializer()

    class Meta:
        model = models.Notification
        fields = '__all__'

