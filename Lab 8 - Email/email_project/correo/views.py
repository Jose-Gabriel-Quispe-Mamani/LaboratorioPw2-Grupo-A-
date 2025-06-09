from django.http import HttpResponse
from django.core.mail import send_mail

def enviar_correo(request):
    send_mail(
        subject='Hola desde Django',
        message='Este es un mensaje de prueba.',
        from_email=None,  
        recipient_list=['jose193gabriel@gmail.com'],
        fail_silently=False,
    )
    return HttpResponse('Correo enviado con éxito ')
