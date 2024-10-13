# Vizsgaremek  
# _Movies_

### Üdvözlök minden kedves érdeklődőt! ([English version](#english))

Vizsgaremekünkben egy __full-stack__ alkalmazást valósítottunk meg, mely egy mozik számára hasznos foglalási alkalmazás.

## Rendszerkövetelmények

[Python 3](https://www.python.org/downloads/)  
[Node.js](https://nodejs.org/en/download/package-manager)  
[Visual Studio Code](https://code.visualstudio.com/download)  
[git](https://git-scm.com/downloads)

## Életre keltés

### Amennyiben a git még nincs konfigurálva:  
* megnyitjuk a git bash alkalmazást
* beírjuk:  

        git config --global user.name "felhasználónév"

    entert nyomunk
   
        git config --global user.email "felhasználó@email.xyz"

    entert nyomunk

### VS Code bejelentkezés GitHub-ba.
* VS Code: __Account__ gomb, az *Activity bar* alján (egy emberre emlékeztető ikon a képernyő bal alsó sarkában)



VS Code->Terminal->New terminal

Az alábbi sorokat be kell másolni a terminálba

        py -m venv testbed1  
        testbed1\scripts\activate  
        pip install -r backend\requirements.txt  
        cd frontend\movies-front  
        npm install          npm run dev

## English version <a id='english'></a>