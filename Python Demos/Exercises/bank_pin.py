import sys

PIN = 5678
LIMIT = 3

guessCount=1

while guessCount <= LIMIT:
    while True:
        try:
          pinGuess = int(input (f"Type in a PIN (guess {guessCount}):"))
          break
        except ValueError:
            print ("Please type in a number.")
    
    if pinGuess == PIN:
        print (f"You have the correct PIN after {guessCount} "
               f"{'try.' if guessCount == 1 else 'tries.'}")
        break
    guessCount+=1

if guessCount > LIMIT:
    print (f"Tried too many times.")
    sys.exit()

print ("Welcome to my bank")        