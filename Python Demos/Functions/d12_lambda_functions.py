compare = lambda a, b: -1 if a < b else (+1 if a > b else 0)

x = 42
y = 3
print("a>b", compare(x, y))

source_list = [10,20,30,40,50]
new_list = list(map(lambda a: a+1, source_list))

for num in new_list:
    print (f"{num} ",end="")