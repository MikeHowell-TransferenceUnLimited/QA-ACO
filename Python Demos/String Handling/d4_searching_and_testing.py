text = "hello world"

print(text.count("o"))

if text.startswith("hell"):
    print("It's hell in there")

if text.isalpha():
    print("string is all alpha")

text = " \t\r\n"
if text.isspace():
    print("string is whitespace")
