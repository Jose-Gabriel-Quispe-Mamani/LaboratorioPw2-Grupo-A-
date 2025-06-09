import datetime
from django.http import HttpResponse
from django.views.generic import View
from myproject.utils import render_to_pdf

class GeneratePdf(View):
    def get(self, request, *args, **kwargs):
        data = {
            'today': datetime.date.today(),
            'order_id': 1234,
            'customer_name': 'Juan Perez',
            'items': [
                {'description': 'Produto A', 'qty': 2, 'price': '10.00'},
                {'description': 'Produto B', 'qty': 1, 'price': '20.00'},
            ],
            'total': '40.00',
        }
        pdf = render_to_pdf('pdf/invoice.html', data)
        if pdf:
            pdf['Content-Disposition'] = 'inline; filename="invoice_1234.pdf"'
            return pdf
        return HttpResponse("Error al generar PDF", status=400)