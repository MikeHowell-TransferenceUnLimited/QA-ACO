import requests

url = "http://127.0.0.1:3000/api/customers/"

customerId = input("Please enter a customer ID:")

# Add the customer ID to the URL
url += customerId

res = requests.get(url)

print("Status:", res.status_code)
print("Headers:", res.headers['Content-Type'])

data = res.json()
print("JSON:", data, end="\n\n")

for item in data:
    print (f"{item}: {data[item]}")


