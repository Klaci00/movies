from django.shortcuts import render
from django.conf import settings
from django.middleware.common import MiddlewareMixin

class ReactAppMiddleware(MiddlewareMixin):
    def process_response(self, request, response):
        if response.status_code == 404 and not request.path.startswith('/api/'):
            try:
                print('trying to open index.html')
                return render(request,'index.html')
            except FileNotFoundError:
                print('File not found')
                pass
        return response
