from rest_framework import serializers
from leads.models import Lead

#Serializadores, los que transforman la data de python a web y viceversa
class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model=Lead
        fields='__all__'