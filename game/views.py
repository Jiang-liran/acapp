from django.http import HttpResponse

def index(request):
    line1 = '<h1 style="text-align:center">术士之战</h1>'
    line2 = '<img src="https://b0.bdstatic.com/ugc/bIZ_283CNAtEbtxtzqLvbQ350c9c933efe9b44bc9587b95c93c389.jpg@h_1280">'
    return HttpResponse(line1 + line2)

