"""
def print_list(val, times):    
   print(str(val) * times) 

print_list(5, 3)
print_list(0, 4)
"""
#########################################
def change_list(inlist, val, times):
    inlist += str(val) * times
    print (inlist)

mylist=['a', 'a']
change_list(mylist, 'h', 8)
print(mylist)


