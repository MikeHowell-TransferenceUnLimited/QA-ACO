result = 3

def scope_test1():    
   result = 42

scope_test1()
print(result)

def scope_test2():    
   global result
   result = 42
   print (result)

scope_test2()
print(result)