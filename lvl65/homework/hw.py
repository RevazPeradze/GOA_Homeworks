def check_age(age):
    if age < 0:
        raise ValueError("ასაკი არ შეიძლება იყოს უარყოფითი")
    return age

print(check_age(25))
print(check_age(-5))
