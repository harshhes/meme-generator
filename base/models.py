from django.db import models

class MemeImage(models.Model):
    image = models.ImageField(upload_to='memes/')
    caption1 = models.CharField(max_length=200, blank=True, null=True)
    caption2 = models.CharField(max_length=200, blank=True, null=True)
    caption3 = models.CharField(max_length=200, blank=True, null=True)

    def __str__(self):
        return self.id