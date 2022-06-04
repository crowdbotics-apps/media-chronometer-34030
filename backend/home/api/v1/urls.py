from django.urls import path, include
from rest_framework.routers import DefaultRouter

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
    StudyViewSet,
    DataListView
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register("studyid", StudyViewSet, basename="studyviewset")
router.register("datalist", DataListView, basename="datalist")


urlpatterns = [
    path("", include(router.urls)),
]
