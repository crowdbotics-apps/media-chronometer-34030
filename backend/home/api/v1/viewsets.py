from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import viewsets, status
from django.http import HttpResponse, JsonResponse
from home.api.v1.serializers import (
    SignupSerializer,
    UserSerializer,
    StudySerializer
)

from users.models import StudyId
class SignupViewSet(ModelViewSet):
    serializer_class = SignupSerializer
    http_method_names = ["post"]


class LoginViewSet(viewsets.ViewSet):
     
    serializer_class = StudySerializer
    # permission_classes = [AllowAny]

    def create(self, request):
        # serializer = self.serializer_class(data=request.data)
        # if serializer.is_valid():
        #     user = StudyId.objects.filter(study_id=request.data['study_id'])
            
        #     response_data = {
        #         "token": user,
        #     }
        #     return Response(response_data, status=status.HTTP_200_OK)

        # print(request.data)

        user = StudyId.objects.filter(study_id=request.data['study_id'])
        if user:
            
            return JsonResponse({'msg':'Study Id exist'})
        else:
            return JsonResponse({'error':'Study Id Does Not exist!'})


        #return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)