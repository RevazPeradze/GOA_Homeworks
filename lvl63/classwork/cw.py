numbers1 = []
for i in range(1, 21):
    numbers1.append(i)
print(numbers1)

even_numbers = []
for i in range(10, 41):
    if i % 2 == 0:
        even_numbers.append(i)
print(even_numbers)

squares = []
for i in range(1, 9):
    squares.append(i**2)
print(squares)

numbers1_lc = [i for i in range(1, 21)]
print(numbers1_lc)

even_numbers_lc = [i for i in range(10, 41) if i % 2 == 0]
print(even_numbers_lc)

squares_lc = [i**2 for i in range(1, 9)]
print(squares_lc)

odd_multiplied = [i * 2 for i in range(5, 16) if i % 2 != 0]
print(odd_multiplied)
