students = {"Revaz": 85, "Nino": 92, "Giorgi": 78, "Tamar": 95}
top_student = max(students, key=students.get)
print("Top student:", top_student, "with score:", students[top_student])

hotel = {
    101: ["Revaz", "Nino"],
    102: [],
    103: ["Giorgi"],
    104: []
}
for room, guests in hotel.items():
    if guests:
        print(f"Room {room} guests:", guests)

person = {"name": "Revaz", "age": 14}
print("Before change:", person)
person["age"] = 15
print("After change:", person)
