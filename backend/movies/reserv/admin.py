from django.contrib import admin
from .models import Show,CustomUser,Reservation,Venue
# Register your models here.

class ShowAdin(admin.ModelAdmin):
    pass

class CustomUserAdmin(admin.ModelAdmin):
    pass

class ReservationAdmin(admin.ModelAdmin):
    list_display=['owner','title','room_name','seat_count','showtime']
    pass

class VenueAdmin(admin.ModelAdmin):
    pass

admin.site.register(Show,ShowAdin)
admin.site.register(CustomUser,CustomUserAdmin)
admin.site.register(Reservation,ReservationAdmin)
admin.site.register(Venue,VenueAdmin)

#Itt voltam BCS