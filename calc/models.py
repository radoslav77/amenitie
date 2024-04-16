from django.db import models

# Create your models here.

Code_item = {
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
    ('Presidential', 'Presidential')
}
Day_of_week = {
    ('Monday', 'Monday'),
    ('Tuesday', 'Tuesday'),
    ('Wednesday', 'Wednesday'),
    ('Thursday', 'Thursday'),
    ('Friday', 'Friday'),
    ('Saturday', 'Saturday'),
    ('Sunday', 'Sunday')
}
Special_Choice = {
    ('Birthday cake', 'Birthday cake'),
    ('Aniversary cake', 'Aniversary cake'),
    ('Celebration cake', 'Celebration cake'),
    ('Honeymoon cake', 'Honeymoon cake'),
    ('6" cake', '6" cake'),
    ('8" cake', '8" cake'),
    ('Canapes', 'Canapes'),
    ('Sliced fruit platter', 'Sliced fruit platter'),
    ('Special amenities', 'Special amenities')

}
replanisment_choice = {

}
class Amenity(models.Model):
    big_id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=300)   
    date_of_arrival = models.CharField(max_length=100)
    date_of_departure = models.CharField(max_length=100)
<<<<<<< HEAD
    
=======
    num_of_fruit = models.CharField(max_length=200, default=1, blank=True, null=True)
>>>>>>> b1e5466a50b1b807b98c8465fd006b3f60d9f7f8
    day_of_week = models.CharField(max_length=200)
    item_code = models.CharField(
        max_length=200, blank=True, null=True)
    amount = models.CharField(max_length=300, blank=True, null=True)
    special_occasion = models.CharField(max_length=300, choices=Code_item, blank=True, null=True)
    date = models.DateField(auto_now_add=True)

    def __str__(self) -> str:
        return f'{self.name, self.date_of_arrival, self.date}'

class Spacial_Amenities(models.Model):
    big_id = models.BigAutoField(primary_key=True)
    arrival_date = models.DateField()
    day_of_week = models.CharField(max_length=200, choices=Day_of_week, blank=True)
    amenity_type = models.CharField(max_length=250, choices=Special_Choice, blank=True)
    amenity_code = models.CharField(max_length=150, choices=Code_item, blank=True,)
    amenity_amount = models.IntegerField(default=0,blank= False )
    date_of_input = models.DateField(auto_now_add=True)

    def __str__(self) -> str:
        return f'{self.arrival_date,self.day_of_week,self.amenity_type,self.date_of_input }'


class CSVFile(models.Model):
    big_id = models.BigAutoField(primary_key=True, )
    file = models.FileField(upload_to='csv_files/')
    

    def __str__(self) -> str:
        return f'{self.file, self.big_id}'
    
class Amenities_CSV(models.Model):
    big_id = models.BigAutoField(primary_key=True)
    date = models.CharField(max_length=200)
    day_of_week = models.CharField(max_length= 200, blank=True)
    amenity_code = models.CharField(max_length=150)
    iventory = models.CharField(max_length=200, default= 100)
    reserved = models.CharField(max_length=200, default= 0)
    date_of_input = models.DateField(auto_now_add=True)

    def __str__(self) -> str:
        return f'{self.date, self.amenity_code, self.reserved, self.date_of_input}'

class Replenishment(models.Model):
    amenity_replen = models.CharField(max_length = 300,)
    amount_day = models.IntegerField(default=0, blank=True)
    date_of_input = models.DateField(auto_now_add=True)

    def __str__(self) -> str:
        return f'{self.amenity_replen, self.amount_day, self.date_of_input}'
