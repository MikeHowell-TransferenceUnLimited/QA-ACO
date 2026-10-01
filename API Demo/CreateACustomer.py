import requests

body={
    "CustomerID": "ABRAC",
    "CompanyName": "Abracadbra & Newt Markets",
    "ContactName": "Mysterious Susan",
    "ContactTitle": "Owner",
    "Address": "44 Batwing Drive",
    "City": "Wandwaverton",
    "Region": None,
    "PostalCode": "WW0101",
    "Country": "Spellonica",
    "Phone": "(5) 555-1001",
    "Fax": "(5) 555-9999"
}

print("Sending POST request to create a new customer:")
url = "http://127.0.0.1:3000/api/customers/"
res2 = requests.post(url, json=body)
