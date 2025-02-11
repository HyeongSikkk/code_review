from django.db import models
from django.contrib.auth import get_user_model
from datetime import datetime

# Create your models here.
class Problem(models.Model) :
    title= models.CharField(max_length=20)
    content= models.TextField()
    
class History(models.Model) :
    user_id= models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    problem_id= models.ForeignKey(Problem, on_delete=models.CASCADE)
    name= models.CharField(max_length=15)
    type= models.SmallIntegerField()
    created_at= models.DateTimeField(default=datetime.now())

class Feedback(models.Model) :
    history_id= models.ForeignKey(History, on_delete=models.CASCADE)
    title= models.CharField(max_length=50)
    content= models.TextField()
    start_line= models.SmallIntegerField()
    end_line= models.SmallIntegerField()
    