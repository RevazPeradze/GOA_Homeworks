numbers = [1, 4, 7, 10, 13, 16, 19]

new_list = []
for num in numbers:
    if num % 2 != 0:
        new_list.append(num * 2)
print("For loop result:", new_list)

new_list_lc = [num * 2 for num in numbers if num % 2 != 0]
print("List comprehension result:", new_list_lc)

doubled_list = [num * 2 for num in numbers]
print("Only action:", doubled_list)

odd_list = [num for num in numbers if num % 2 != 0]
print("Only condition:", odd_list)
