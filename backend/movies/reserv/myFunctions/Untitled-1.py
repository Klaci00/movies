'''mystring=""
for i in range(1,181):
    if i<10:
        mystring+=f"const [seat00{i}, setSeat00{i}] = useState(0);\n"
    elif i<100:
        mystring+=f"const [seat0{i}, setSeat0{i}] = useState(0);\n"
    else:
        mystring+=f"const [seat{i}, setSeat{i}] = useState(0);\n"

print(mystring)
'''
mystring=""
'''for i in range(1,181):
    if i<10:
        mystring+=f"seat00{i}, setSeat00{i},\n"
    elif i<100:
        mystring+=f"seat0{i}, setSeat0{i},\n"
    else:
        mystring+=f"seat{i}, setSeat{i},\n"
'''
for i in range(1,181):
    if i<10:
        mystring+=f"seat00{i}, setSeat00{i},"
    elif i<100:
        mystring+=f"seat0{i}, setSeat0{i},"
    else:
        mystring+=f"seat{i}, setSeat{i},"

print(mystring)
