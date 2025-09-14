my_tuple = ("Revaz", 14, "Basketball")
name, age, hobby = my_tuple
print("Name:", name)
print("Age:", age)
print("Hobby:", hobby)

set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}

set1.add(10)
set1.remove(2)
set2.add(9)
set2.remove(7)

print("Set1:", set1)
print("Set2:", set2)

union_set = set1.union(set2)
intersection_set = set1.intersection(set2)
difference_set = set1.difference(set2)
sym_diff_set = set1.symmetric_difference(set2)

print("Union:", union_set)
print("Intersection:", intersection_set)
print("Difference (set1 - set2):", difference_set)
print("Symmetric Difference:", sym_diff_set)
