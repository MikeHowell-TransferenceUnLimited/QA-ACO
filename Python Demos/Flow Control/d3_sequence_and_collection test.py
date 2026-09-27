mylist = []#[0, 1, 2, 3]
if mylist:
    print ("My list is true")
else:
    print ("My list is false")

####################################

mylist = [7,1,2,3]
if not all(mylist):
    print ("mylist: not all are True")
if any(mylist):
    print ("mylist: at least one item is True")



