def addNumber(x,y):
    pass

n = 29
d = 2
while d * d <= n: # try divisors up to sqrt(n)
    if n % d == 0:
        print(n, "is divisible by", d)
        break
    d += 1
else:
    print(n, "is prime") # Run only if condition fails

############################
import math

n = 29
d = 2
limit = math.isqrt(n)

while d <= limit:
      if n % d == 0:
            print(n, "is divisible by", d)
            break
      d += 1
else:
    print(n, "is prime") # Run only if condition fails