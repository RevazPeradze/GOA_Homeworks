products = ["Apple", "Banana", "Orange", "Milk", "Bread"]

try:
    user_input = input("Enter a product index: ")
    index = int(user_input)
    if index >= len(products):
        raise IndexError("Index is out of range!")
    print("Product at index", index, "is", products[index])
except ValueError:
    print("You must enter a valid integer!")
except IndexError as e:
    print("Error:", e)
