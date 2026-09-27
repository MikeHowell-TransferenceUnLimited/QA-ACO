while True:
    try:
        number = int(input("Enter an integer: "))
        break
    except ValueError:
        print("That's not an integer. Try again.")

print("You entered:", number)
