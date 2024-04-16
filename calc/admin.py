from django.contrib import admin
from .models import *
# Register your models here.

admin.site.register(Amenity)
admin.site.register(Amenities_CSV)
admin.site.register(Spacial_Amenities)
admin.site.register(Replenishment)
admin.site.register(CSVFile)