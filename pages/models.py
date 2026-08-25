from django.db import models
from django.conf import settings

Offline_Categories = (
    ("Bible","ΑΓΙΑ ΓΡΑΦΗ"),
    ("Cons","ΣΥΝΩΜΟΣΙΑ"),
    ("Mov-Ser","ΤΑΙΝΙΕΣ/ΣΕΙΡΕΣ")
)

Shorts_Offline_Categories = (
    ("15MINCITIES","ΠΟΛΕΙΣ 15 ΛΕΠΤΩΝ"),
    ("SYNAGOGUEANDANTICHRIST","ΣΥΝΑΓΩΓΗ ΤΟΥ ΣΑΤΑΝΑ ΚΑΙ Ο ΑΝΤΙΧΡΙΣΤΟΣ"),
    ("CHIPS","ΤΣΙΠΑΚΙΑ"),
    ("CONTROL","ΕΛΕΓΧΟΣ"),
    ("Covid","ΚΟΡΩΝΟΪΟΣ"),
    ("COVIDPROGRAMMING","ΚΟΡΩΝΟΪΟΣ ΠΡΟΓΝΩΣΤΙΚΟΣ ΠΡΟΓΡΑΜΜΑΤΙΣΜΟΣ"),
    ("ELITESRELIGION","Η ΠΡΑΓΜΑΤΙΚΗ ΘΡΗΣΚΕΙΑ ΤΩΝ 'ΠΕΤΥΧΗΜΕΝΩΝ'"),
    ("FAKEALIENINVATION","ΨΕΥΤΙΚΗ ΕΞΩΓΗΙΝΗ ΕΙΣΒΟΛΗ"),
    ("OVERPOPULATION","ΜΕΙΩΣΗ ΤΟΥ ΠΛΗΘΥΣΜΟΥ"),
    ("EXTRA","ΕΠΙΠΛΕΟΝ"),
    ("NOSOURCE","ΧΩΡΙΣ ΠΗΓΗ"),
)

class QuotesModel(models.Model):
    category = models.CharField(max_length=1000, choices=(Offline_Categories))
    author = models.CharField(max_length=1000)
    description = models.CharField(max_length=10000)
    source = models.CharField(max_length=1000)
    
class ShortsModel(models.Model):
    thumbnail = models.CharField(max_length=1000)
    category = models.CharField(max_length=1000, choices=(Shorts_Offline_Categories))
    link = models.CharField(max_length=1000)
    source = models.CharField(max_length=1000)
    
class VideosModel(models.Model):
    title = models.CharField(max_length=1000)
    thumbnail = models.CharField(max_length=1000)
    link = models.CharField(max_length=1000)
    sources = models.JSONField()
    
class LevelsModel(models.Model):
    question = models.CharField(max_length=1000)
    type = models.IntegerField(default=0)
    images = models.JSONField(blank=True, null=True, default=dict)
    answers = models.JSONField(blank=True, null=True, default=dict)
    answer = models.CharField(max_length=1000, blank=True)
    answernumber = models.IntegerField(blank=True, null=True)
    hint = models.CharField(max_length=1000, blank=True)
    solution = models.IntegerField(default=0)
    aftertext = models.CharField(max_length=1000, blank=True)
    
class LevelsList(models.Model):
    book = models.IntegerField(default=0)
    title = models.CharField(max_length=1000, default="")
    image = models.CharField(max_length=1000, default="")
    groups = models.ManyToManyField(LevelsModel)
    
class ProphecyLessonsModel(models.Model):
    day = models.IntegerField()
    part = models.IntegerField(default=0)
    videourl = models.CharField(max_length=1000)
    sources = models.JSONField()
    
class UnlearnModel(models.Model):
    videourl = models.CharField(max_length=1000)
    sources = models.JSONField()
    
class PrepModel(models.Model):
    videourl = models.CharField(max_length=1000)
    sources = models.JSONField()

class NotificationsModel(models.Model):
    title = models.CharField(max_length=1000)
    description = models.CharField(max_length=1000)
    quotesource = models.ForeignKey(QuotesModel, on_delete=models.CASCADE)
    type = models.IntegerField()
    
    @property
    def source(self):
        return self.quotesource.source
        
Importance_Categories = (
    ("MUSTHAVE","MUSTHAVE"),
    ("SECONDARY","SECONDARY"),
	("THIRD","THIRD"),
)

General_Categories = (
	("Αποθηκευτικός χώρος","Αποθηκευτικός χώρος"),
	("Νερό","Νερό"),
	("Εργαλεία","Εργαλεία"),
	("Καταφύγιο","Καταφύγιο"),
	("Φωτιά","Φωτιά"),
	("Ηλεκτρονικά","Ηλεκτρονικά"),
	("Ύπνος","Ύπνος"),
	("Ενδυμασία","Ενδυμασία"),
	("Ψάρεμα","Ψάρεμα"),
	("Καθημερινότητα","Καθημερινότητα"),
)

class ItemModel(models.Model):
    title = models.CharField(max_length=1000)
    store = models.CharField(max_length=1000)
    description = models.CharField(max_length=10000)
    source = models.CharField(max_length=1000)
    price = models.IntegerField()
    alternatives = models.CharField(max_length=1000)
    importance = models.CharField(max_length=1000, choices=(Importance_Categories))
    category = models.CharField(max_length=1000, choices=(General_Categories))
    image = models.CharField(max_length=1000)
    
class BookModel(models.Model):
    title = models.CharField(max_length=1000)
    description = models.CharField(max_length=10000)
    source = models.CharField(max_length=1000)
    image = models.CharField(max_length=1000)
