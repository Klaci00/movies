
from django import forms
from .models import RoomStyleDict
from .widgets import JSONEditorWidget

class RoomStyleDictForm(forms.ModelForm):
    class Meta:
        model = RoomStyleDict
        fields = '__all__'
        widgets = {
            'style_dict': JSONEditorWidget(attrs={'rows': 20, 'cols': 80}),
        }
