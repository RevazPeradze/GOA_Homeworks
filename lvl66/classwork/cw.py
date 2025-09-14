def greetings(special, *guests, **visitors):
    print(f"Welcome {special}")
    
    for guest in guests:
        print(f"Hello {guest}")
        
    for key, value in visitors.items():
        print(f"{key}: {value}")

greetings(
    "Admin",
    "Revaz", "Nino", "Giorgi", "Tamar", "Ani",
    "Levan", "Sofia", "Luka", "Elene",
    visitor1="John", visitor2="Alice", visitor3="Bob"
)
