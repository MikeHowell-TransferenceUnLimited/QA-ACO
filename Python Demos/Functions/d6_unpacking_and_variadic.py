"""
def my_func(a, b, c):
    print(a, b, c) 
    
mytup = 23, 45, 67
my_func(*mytup)
"""
def my_func(dir, *files):
    print('dir:', dir, 'files:', files) 
    for name in files:
        print (name)
    
my_func('c:/stuff', 'f1.txt', 'f2.txt', 'f3.txt')
