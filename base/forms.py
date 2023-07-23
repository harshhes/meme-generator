from django import forms
from .models import MemeImage

class MemeImageForm(forms.ModelForm):
    class Meta:
        model = MemeImage
        fields = ('image', 'caption1', 'caption2', 'caption3')

    def __init__(self, *args, **kwargs):
        super(MemeImageForm, self).__init__(*args, **kwargs)
        self.fields['image'].widget.attrs.update({
            'class': "image"
        })