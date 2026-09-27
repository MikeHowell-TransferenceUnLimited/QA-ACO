"""
def returnMultiple():
  x=100
  y=250
  id=25
  # The function can only return one item at a time so you get
  # around this limitation by packaging the items into a single structure.
  return (id, x, y)

outid, outx, outy = returnMultiple()

print (outid, outx, outy)

def calc_vat(gross, vatpc=17.5):
   net = gross/(1 + (vatpc/100))
   vat = gross - net
   return [f'{net:05.2f}', f'{vat:05.2f}']

result = calc_vat(42.30)

print(calc_vat(9.55))

"""
# Put parameters into a dictionary
def myFunctionDict(**kwargs):
   print (kwargs)

myFunctionDict(a=10,b=20)   

"""
def myFunctionTuple(*parms):
   print (parms)

print (myFunctionTuple(40,50,60,70, "Kitchen Sink"))   
"""


