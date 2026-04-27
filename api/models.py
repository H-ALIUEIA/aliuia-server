from django.db import models

class ArticleModel(models.Model):
    body = models.TextField()

class ArtListModel(models.Model):
    title = models.CharField(max_length=1000)
    image = models.CharField(max_length=1000)
    bodyref = models.ForeignKey(ArticleModel, on_delete=models.CASCADE)
    
    @property
    def source(self):
        return self.bodyref.body
