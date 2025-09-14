def add_numbers(a, b):
    return a + b

def full_name(first, last):
    return first + " " + last

print(add_numbers(5, 10))
print(add_numbers(20, 30))

print(full_name("Revaz", "Giorgadze"))
print(full_name("Nino", "Lortkipanidze"))

add_numbers_lambda = lambda a, b: a + b
full_name_lambda = lambda first, last: first + " " + last

print(add_numbers_lambda(7, 3))
print(add_numbers_lambda(15, 25))

print(full_name_lambda("Giorgi", "Kapanadze"))
print(full_name_lambda("Tamar", "Chkhaidze"))
