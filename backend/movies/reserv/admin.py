from django.contrib import admin
from django import forms
from .models import Show,CustomUser,Reservation,Venue
# Register your models here.

class ShowAdin(admin.ModelAdmin):
    filter_horizontal = ('venues',)
    pass

class CustomUserAdmin(admin.ModelAdmin):
    pass

class ReservationAdmin(admin.ModelAdmin):
    list_display=['owner','title','room_name','seat_count','showtime']
    pass

class VenueAdmin(admin.ModelAdmin):
    def formfield_for_dbfield(self, db_field, request, **kwargs):
        if db_field.name == 'title':
            kwargs.pop('queryset', None)
            return forms.ModelChoiceField(queryset=Show.objects.all(), empty_label="Select show title")
        return super().formfield_for_dbfield(db_field, request, **kwargs)
    
admin.site.register(Show,ShowAdin)
admin.site.register(CustomUser,CustomUserAdmin)
admin.site.register(Reservation,ReservationAdmin)
admin.site.register(Venue,VenueAdmin)

#Itt voltam BCS
#én is