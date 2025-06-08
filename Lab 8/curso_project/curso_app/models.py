from django.db import models

class Materia(models.Model):
    nombre = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre

class Estudiante(models.Model):
    nombre = models.CharField(max_length=100)
    materias = models.ManyToManyField(Materia)

    def __str__(self):
        return self.nombre