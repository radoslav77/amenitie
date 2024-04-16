from django import forms
from django.forms import DateInput
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.forms import fields
from django.views.generic.edit import FormView

from .models import *


class registrationForm(UserCreationForm):
    class Meta:
        model = User
        fields = ('username', 'email', 'password1', 'password2')


# craete intoform // got the idea from https://stackoverflow.com/questions/3367091/whats-the-cleanest-simplest-to-get-running-datepicker-in-django
class DateInput(forms.DateInput):
    input_type = 'date'


class InputData(forms.ModelForm):

    class Meta:
        model = Amenity

        fields = '__all__'
        # change input to date input
        widgets = {
            'arrival_date': DateInput(),
            'checkout_date' : DateInput()
        }


DAY_CHOICES = [
    ('monday', 'Monday'),
    ('tuesday', 'Tuesday'),
    ('wednesday', 'Wednesday'),
    ('thursday', 'Thursday'),
    ('friday', 'Friday'),
    ('saturday', 'Saturday'),
    ('sunday', 'Sunday'),
]
AMENITY_CODE =[
     ('None', 'None'),
    ('VIP3ME', 'VIP3ME'),
    ('VIP4ME', 'VIP4ME'),
    ('VIP5ME', 'VIP5ME'),
    ('VIP1', 'VIP1'),
    ('VIP2', 'VIP2'),
    ('VIP3', 'VIP3'),
    ('VIP4', 'VIP4'),
    ('VIP5','VIP5'),
    ('VIP6', 'VIP6'),
    ('VIP6', 'Presidential')
]


class UpDateDaily(forms.Form):    
    #class Meta:
        model = Amenities_CSV
        #fields = ['date', 'day_of_week', 'amenity_code', 'inventory', 'reserved']
        date = forms.DateField(required=True, widget=forms.DateInput(format="%d/%m/%Y", attrs={"type": "date"}),
        input_formats=["%d/%m/%Y"])  
        day_of_week = forms.ChoiceField(required=True,choices=DAY_CHOICES, )
        amenity_code = forms.ChoiceField(required=True,choices=AMENITY_CODE, )
        iventory = forms.IntegerField(initial=100, max_value=100)
        reserved = forms.IntegerField(initial=0,min_value=0)
        
        
        
             
        

        





class CSVFileForm(forms.ModelForm):
    class Meta:
        model = CSVFile
        fields = ['file']




class SpecialAmenity(forms.ModelForm):
    class Meta:
        model = Spacial_Amenities
        fields = '__all__'
        widgets = {
            'arrival_date': forms.DateInput(
                attrs={'type': 'date', 'placeholder': 'dd/mm/yyyy (DOB)', 'class': 'form-control'}
            )
        }



        