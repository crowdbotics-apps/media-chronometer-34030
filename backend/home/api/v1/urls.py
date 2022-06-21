from django.urls import path, include
from rest_framework.routers import DefaultRouter

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
    StudyViewSet,
    DataListView,
    AdminLoginViewSet,
    AdminStudyViewSet,
    AdminSubjectViewSet
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register("adminlogin", AdminLoginViewSet, basename="adminlogin")
router.register("studyid", StudyViewSet, basename="studyviewset")
router.register("datalist", DataListView, basename="datalist")
router.register("admin_study_id", AdminStudyViewSet, basename="admin_study_id")
router.register("admin_subject_id", AdminSubjectViewSet, basename="admin_subject_id")

urlpatterns = [
    path("", include(router.urls)),
]
