from django.http import HttpResponseRedirect

def home(request):
    return HttpResponseRedirect('https://localhost:7260/index.html')