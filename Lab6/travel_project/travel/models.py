from django.db import models

class Destination(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    img = models.CharField(max_length=100)
    price = models.IntegerField()
    offer = models.BooleanField(default=False)

    def __str__(self):
        return self.name