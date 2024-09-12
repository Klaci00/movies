from django.contrib import admin
from .models import Show,CustomUser,Reservation
# Register your models here.

class ShowAdin(admin.ModelAdmin):
    list_display=["title","seat_a","seat_b"]
    pass

class CustomUserAdmin(admin.ModelAdmin):
    pass

class ReservationAdmin(admin.ModelAdmin):
    list_display=["name","owner","seat_count","start"]
    pass

admin.site.register(Show,ShowAdin)
admin.site.register(CustomUser,CustomUserAdmin)
admin.site.register(Reservation,ReservationAdmin)