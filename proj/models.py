# example_app/models.py

from django.db import models

class Student(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    enrolled_date = models.DateField(auto_now_add=True)
