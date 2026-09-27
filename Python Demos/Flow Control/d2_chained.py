number = 20
distance = 100

# New Interface change
# important comments

if 0 < number and number < 40 and 42 < distance:
    print ("number and distance are within range")
else:
    print ("number and distance are out of range")

######################################################
"""
if 0 < number < 42 < distance:
    print ("number and distance are within range")    
else:
    print ("number and distance are out of range")    
"""
######################################################
if 0 < number < 42 and distance != 20:
    print ("number and distance are within range")    
else:
    print ("number and distance are out of range")    

