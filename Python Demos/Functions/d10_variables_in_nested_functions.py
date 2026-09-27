result = 3

def my_func():
    result = 12
    def scope_test():
        nonlocal result
       
        if result < 45:
            result += 1
            scope_test()
            
    scope_test()
    print(result, "from my_func")

my_func()
print(result, "from main")
