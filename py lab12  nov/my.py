# Open the file in write mode
with open("input.txt", "w") as file:
    # Write '1' 5000 times, each on a new line
    for _ in range(10000):
        file.write("1 ")
