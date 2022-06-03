from django.contrib.auth.models import AbstractUser
from django.db import models
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _


class User(AbstractUser):
    # WARNING!
    """
    Some officially supported features of Crowdbotics Dashboard depend on the initial
    state of this User model (Such as the creation of superusers using the CLI
    or password reset in the dashboard). Changing, extending, or modifying this model
    may lead to unexpected bugs and or behaviors in the automated flows provided
    by Crowdbotics. Change it at your own risk.


    This model represents the User instance of the system, login system and
    everything that relates with an `User` is represented by this model.
    """

    # First Name and Last Name do not cover name patterns
    # around the globe.
    name = models.CharField(_("Name of User"), blank=True, null=True, max_length=255)

    def get_absolute_url(self):
        return reverse("users:detail", kwargs={"username": self.username})

#For StudyID
class StudyId(models.Model):
    study_id = models.CharField(
        _("Study ID"), blank=True, null=True, max_length=255)

    def __str__(self):
        return self.study_id



#For StudyID
class Datalist(models.Model):
    study_id = models.CharField(
        _("Study ID"), blank=True, null=True, max_length=255)

    subject_id = models.CharField(
        _("Study ID"), blank=True, null=True, max_length=255)   

    first_timestamp = models.CharField(
        _("First TimeStamp"), blank=True, null=True, max_length=255)   

    last_timestamp = models.CharField(
        _("Last TimeStamp"), blank=True, null=True, max_length=255) 


    content_title = models.CharField(
        _("Content Title"), blank=True, null=True, max_length=255)           

    def __str__(self):
        return str(self.study_id,self.subject_id,self.content_title)