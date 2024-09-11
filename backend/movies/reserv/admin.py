from django.contrib import admin
from .models import Show,CustomUser
# Register your models here.

class ShowAdin(admin.ModelAdmin):
    list_display=["title","seat_a","seat_b"]
    pass

class CustomUserAdmin(admin.ModelAdmin):
    pass

admin.site.register(Show,ShowAdin)
admin.site.register(CustomUser,CustomUserAdmin)