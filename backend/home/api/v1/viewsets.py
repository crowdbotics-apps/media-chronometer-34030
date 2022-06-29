from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.authentication import TokenAuthentication
from django.http import HttpResponse, JsonResponse
import csv
from django.db.models import Q


from home.api.v1.serializers import (
    SignupSerializer,
    UserSerializer,
    StudySerializer,
    Datalistserializer,
    SubjectSerializer,
    CategoryDatalistserializer,
    
)
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from users.models import StudyId,Datalist
from django.db.models import Count

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
            data_end = converted_last_timestamp.strftime('%H:%M %p')

            date_start = converted_first_timestamp.strftime('%m/%d/%Y')
            date_end = converted_last_timestamp.strftime('%m/%d/%Y')

            data.first_timestamp =  data_start
            data.last_timestamp = data_end

            data.date_start = date_start
            data.date_end = date_end
        return datalist
            

       
        #print(datalist)                                         
        

    def post(self, request, format=None):
        serializer = Datalistserializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        




      

class AdminLoginViewSet(ViewSet):
    """Based on rest_framework.authtoken.views.ObtainAuthToken"""

    serializer_class = AuthTokenSerializer

    def create(self, request):
        serializer = self.serializer_class(
            data=request.data, context={"request": request}
        )
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        token, created = Token.objects.get_or_create(user=user)
        user_serializer = UserSerializer(user)
        return Response({"token": token.key, "user": user_serializer.data})

class IsSuperUser(IsAdminUser):
    def has_permission(self, request, view):
        return bool(request.user and request.user.is_superuser)

@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated,IsSuperUser])

class AdminStudyViewSet(ModelViewSet):
    serializer_class = StudySerializer
    http_method_names = ["post",]
    #queryset = StudyId.objects.all()

    def post(self, request, format=None):
            serializer = StudySerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)    



@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated,IsSuperUser])

class AdminSubjectViewSet(ModelViewSet):
    serializer_class = SubjectSerializer
    http_method_names = ["post",]
    #queryset = StudyId.objects.all()

    def post(self, request, format=None):
            serializer = SubjectSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 



@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated,IsSuperUser])
class AdminDataListView(ModelViewSet):
    """
    List all snippets, or create a new snippet.
    """
    serializer_class = Datalistserializer
    http_method_names = ["get"]
    queryset = Datalist.objects.all()



    def retrieve(self, request, *args, **kwargs):
        # ret = super(StoryViewSet, self).retrieve(request)
        datalist = list(Datalist.objects.all())
        
        dlist = Datalist.objects.order_by().values('study_id','subject_id','first_timestamp').annotate(Count('subject_id')).distinct()
        
        clist = list(dlist)
        print(clist)
        resultant_data = {}
        for data in clist:
            resultant_data['study_id'] = data['study_id']
            resultant_data['subject_id'] = data['subject_id']
            resultant_data['test'] = data['subject_id']
           
            
        
        return Response(data)


    def list(self, request, *args, **kwargs):
        # ret = super(StoryViewSet, self).list(request)
        datalist = list(Datalist.objects.all())
        
        dlist = Datalist.objects.order_by().values('study_id','subject_id','first_timestamp','last_timestamp').annotate(Count('subject_id')).distinct().all()
        
        
        resultant_data = {}
        clist = list(dlist)
        for data in clist:
            print(data['first_timestamp'])

            
             
            _first_timestamp = data['first_timestamp']
            _last_timestamp = data['last_timestamp']


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
            data_end = converted_last_timestamp.strftime('%H:%M %p')

            date_start = converted_first_timestamp.strftime('%m/%d/%Y')
            date_end = converted_last_timestamp.strftime('%m/%d/%Y')

            data['first_timestamp'] =  data_start
            data['last_timestamp'] = data_end

            data['date_start'] = date_start
            data['date_end'] = date_end
            
        
        return Response(dlist) 







#Show List as a category
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated,IsSuperUser])
class AdminCategoryDataListView(ModelViewSet):
    serializer_class = Datalistserializer
    http_method_names = ["get"]
    #queryset = Datalist.objects.all()

    def get_queryset(self):
        """
        Optionally restricts the returned purchases to a given user,
        by filtering against a `username` query parameter in the URL.
        """
        queryset = Datalist.objects.all()
        _content_title = self.request.query_params.get('content_title')
        _subject_id = self.request.query_params.get('subject_id')
        _study_id = self.request.query_params.get('study_id')
        if _study_id is not None:
            queryset = queryset.filter(study_id=_study_id).all()
        elif _subject_id is not None:
            queryset = queryset.filter(subject_id=_subject_id).all()

        elif _content_title is not None:
            queryset = queryset.filter(content_title=_content_title).all()
        else:
            queryset = queryset

        return queryset






#Show List as desending order
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated,IsSuperUser])
class AscendingAdminDataListView(ModelViewSet):
    serializer_class = Datalistserializer
    http_method_names = ["get"]
    #queryset = Datalist.objects.all()

    def get_queryset(self):
        """
        Optionally restricts the returned by ascending order.
        """
        categoryTitle = self.request.query_params.get('category')
        print(categoryTitle)
        desc = self.request.query_params.get('desc')
        if desc:
            queryset = Datalist.objects.filter(content_title=categoryTitle).order_by('-id')   
        else:
            queryset = Datalist.objects.filter(content_title=categoryTitle)
        return queryset 
        


#All Categories(Content Title) List for Admin
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated,IsSuperUser])
class ContentListAdminView(ModelViewSet):
    serializer_class = CategoryDatalistserializer
    http_method_names = ["get"]
    #queryset = Datalist.objects.all()

    def get_queryset(self):
        """
        Optionally restricts the returned by ascending order.
        """
        
        content_categories = Datalist.objects.values('content_title').distinct()
        
        # content_holder = {}
        # for content in content_categories:
        #     content_holder['content_title'] = content['content_title']

        return content_categories         


#Search By Study Id or Subject Id
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated,IsSuperUser])
class SearchBySubjectIdStudyIdView(ModelViewSet):
    serializer_class = Datalistserializer
    http_method_names = ["get"]
    #queryset = Datalist.objects.all()

    def get_queryset(self):
        """
        Optionally restricts the returned by ascending order.
        """
        studyId = self.request.query_params.get('study_id')
        if studyId is not None:
           queryset = Datalist.objects.filter(Q(study_id=studyId)).order_by('-id')  

        subjectId = self.request.query_params.get('subject_id')

        if subjectId is not None:
           queryset = Datalist.objects.filter(Q(subject_id=subjectId)).order_by('-id')  
        #queryset = Datalist.objects.filter(Q(study_id=studyId) | Q(subject_id=subjectId)).order_by('-id')   
        #print(queryset.query)
        
        return queryset         