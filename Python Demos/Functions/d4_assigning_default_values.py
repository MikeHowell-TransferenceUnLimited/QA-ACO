def print_vat(gross, vatpc=17.5, message='Summary:'):
   net = gross/(1 + (vatpc/100))
   vat = gross - net
   print(message, 'Gross {0:5.2f} Net: {0:5.2f} Vat: {1:5.2f}'.format(gross, net, vat))
   print(f"Gross {gross} net: {net:5.2f} VAT: {vat:5.2f}")


print_vat(9.55)
print_vat(9.55, 20)
print_vat(9.55, message='Final sum:')
