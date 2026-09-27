myn = [45, 66, 12, 3, 99, 3.142, 42]
print("min:", min(myn), "max:", max(myn))
print("sum:", sum(myn))

myd = {"fred":3, "jim":8, "dave":42}
print("min:", min(myd), "max:", max(myd))
# force keys
print("min:", min(myd.keys()), "max:", max(myd.keys()))
# force values
print("min:", min(myd.values()), "max:", max(myd.values()))

print(myd["dave"])