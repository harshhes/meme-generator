from django.shortcuts import render

from .forms import MemeImageForm
from .models import MemeImage

def meme_generator(request):
    # if request.method == 'POST':
    #     # form = MemeImageForm(request.POST, request.FILES)
    #     if form.is_valid():
    #         meme_image = form.save()
    #         return render(request, 'base/meme_generator.html', {'form': MemeImageForm()})
    # else:
    #     form = MemeImageForm()
    return render(request, 'base/meme_generator.html')

