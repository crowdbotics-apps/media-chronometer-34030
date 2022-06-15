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
    StudySerializer,
    Datalistserializer,
    
)

from users.models import StudyId,Datalist
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




class StudyViewSet(ModelViewSet):
    serializer_class = StudySerializer
    http_method_names = ["get",]
    queryset = StudyId.objects.all()

    def get(self, request, format=None):
        users = StudyId.objects.all()
        serializer = StudySerializer(users, many=True)
        return Response(serializer.data)        



#Added for DataList

import datetime
from django.utils import timezone
class DataListView(ModelViewSet):
    """
    List all snippets, or create a new snippet.
    """
    serializer_class = Datalistserializer
    http_method_names = ["post","get"]
    #queryset = Datalist.objects.all()
    

    def get_queryset(self):
        
        datalist = list(Datalist.objects.all())
        

        
        for data in datalist:
            print(data.first_timestamp)
            _first_timestamp = data.first_timestamp
            _last_timestamp = data.last_timestamp

            try:
                # when timestamp is in seconds
                converted_first_timestamp = datetime.datetime.fromtimestamp(int(_first_timestamp))
                converted_last_timestamp = datetime.datetime.fromtimestamp(int(_last_timestamp))
            except (ValueError):
                # when timestamp is in miliseconds
                converted_first_timestamp = datetime.datetime.fromtimestamp(int(_first_timestamp) / 1000)
                converted_last_timestamp = datetime.datetime.fromtimestamp(int(_last_timestamp)/1000)
            #converted_first_timestamp = datetime.datetime.fromtimestamp(int(_first_timestamp))
            # converted_last_timestamp = datetime.datetime.fromtimestamp(int(_last_timestamp))
            data_start = converted_first_timestamp.strftime('%H:%M %p')
            date_end = converted_last_timestamp.strftime('%H:%M %p')

            data.first_timestamp =  data_start
            data.last_timestamp = date_end

            
        return datalist
            

       
        #print(datalist)                                         
        

    def post(self, request, format=None):
        serializer = Datalistserializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        




      

