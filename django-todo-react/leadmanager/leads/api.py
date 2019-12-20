from leads.models  import Lead
from rest_framework import viewsets, permissions
from .serializers import LeadSerializer

#Lead ViewSet--> El viewset permite crear una API CRUD sin especificar metodos explicitos.
class LeadViewset(viewsets.ModelViewSet):
    queryset=Lead.objects.all()
    permission_classes=[
        permissions.AllowAny
    ]

    serializer_class=LeadSerializer