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
        npm install
        npm run dev

Majd entert nyomni.

A frontend és a backend szervert érdemes a gyökérkönyvtárban levő .batch fájlokkal elindítani.

# Vizsgaremek
## Movies

A vizsgaremek egy, elsősorban mozik számára készült helyfoglalási rendszer, mely a következő igények kiszolgálására valósult meg:

*	Interaktív webes felület, amin megjelennek a mozik filmkínálatai.
*	Interaktív felület, ahol a vendégek könnyen, intuitív módon tudják eldönteni, hogy mely helyekre szeretnének jegyet foglalni. 
*	Asztali és mobil készüléken is jól látható, kezelhető felület.
*	Regisztrációs és autentikációs felület. 
*	Nyomon követhető foglalási rendszer, ahol a felhasználó és az adminisztrátor átlátható képet kap a foglalás állapotáról. 
*	Adminisztrációs felület, ahol az adminisztrátor joggal rendelkező felhasználók könnyedén hozzáadhatnak és törölhetnek adatokat. 
*	Méretezhetőség, hatékonyság, kis- és nagyméretű mozik számára.

A projekt gerincét két fejlesztői környezet adja:

*	__Django-rest-framework__, rest API backend
*	__Vite-React__ JavaScript frontend könyvtár

A forráskövető rendszer a __GIT__, melyet a __github.com__ oldalon használtunk.

<img src="https://miro.medium.com/v2/resize:fit:910/1*Aetre8Oj5vF6G4Yx4a9fZA.png" height=200 alt="git logo">
<img src="https://media.licdn.com/dms/image/v2/D4D12AQH5AQC9TXxYkw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1726897313436?e=2147483647&v=beta&t=jb4djqtMk72evJrNUfmpML9usqbI_OJUc2Tp3Hgx7Oc" height=200 alt="git logo">

*	generatív, nagy nyelvi modellek:
    *	__Microsoft Copilot__
    *	__Github Copilot__

    <img src="https://cdn.prod.website-files.com/6617b44bd9ae6629c384d4e2/669788f97046f8181b746682_Microsoft%20Copilot%20vs%20GitHub%20Copilot%20Blog%20Featured%20Image.jpg" height=200 alt="github copilot logo next to microsoft copilot logo" >
*	kódszerkesztő:
    *	__Visual Studio Code__  <img src="https://chris-ayers.com/assets/images/vscode-logo.png" height=100 alt="visual studio code logo">

## A működés alapelve 
Minden ülést egy frontenden megjelenő apró négyzet reprezentál. A háttérben a frontend a backend által küldött __JSON__ adatmodellt interpretálja a weboldal megjelenítésekor. A _json_ tartalma egy _dictionary_, ahol a _kulcsok stringek_, pontosabban a _seat_ szó + ülések száma, pl. _“seat_003”_. A _dictionary_ értékei _boolean_ változók. Kétféle foglalás van. Az előfoglalt ülés értéke _false_, a foglalt ülés értéke _true_. A szabad ülés értéke _null_, pontosabban nem képezi részét a dictionary-nek. Ez is azt a célt szolgálja, hogy minél kisebb mennyiségű adatot kelljen a frontend és a backend között továbbítani. A frontend a terem kapacitásának függvényében hoz létre változókat, melyek nevei megegyeznek a backendről származó dictionary kulcsaival (pl. “seat_043”). Amikor a kulcshoz tartozó érték true, az azonos nevű változó értéke 2 lesz, ha false, akkor pedig 1. Ha pedig az érték null, tehát nem található a dictionary-ben, akkor a változó értéke 0 lesz. A frontend egy tömböt tölt fel ezekkel a változókkal. A megjelenítés folyamán minden változóra jut egy HTML elem (div) melyek színes négyzetekként jelölik az ülések foglaltságát. A 0 értékű változó eleme zöld, tehát a szabad ülés zöld színű. Az 1 értékű változó eleme piros színű, ez az előfoglalt ülés. A 2 értékű változóhoz tartozó elem színe szürke, ez reprezentálja a foglalt ülést. Az ülések szimbólumai, egy, a moziterem kialakítására nagyban hasonlító felülnézetes térképen jelennek meg a képernyőn. Az ülések sorrendje és elhelyezkedése hűen tükrözi a valóságot. Ezen a felületen megtalálhatóak egyéb fontos elemek is, például a mozivászon, a bejárat, de az átjárók is. Az ülések gombokként működnek, ha a leendő vendég rákattint a neki tetsző zöld ülésre, akkor az piros színű lesz, és a hozzá kapcsolódó változó értéke 0-ról 1-re változik. Amennyiben a vendég meggondolja magát, és újra rákattint a piros ülésre, akkor az újra zöld lesz, a változó értéke pedig visszaáll nullára. A szürke ülésekre nem lehet kattintani, hiszen azokat már lefoglalta valaki. Amikor a vendég a foglalás gombra kattint, a frontend interpretálja a változókat a következő módon:

*	Az 1 értékű változók alapján létrehoz egy dictionaryt, ezt __HTTP PATCH__ kéréssel elküldi a backendnek. Itt is megvalósul az elv mely szerint csak a szükséges adatokat küldjük el. 
*	A backend a http kérés alapján megkeresi a Venue példányt és foglaltra változtatja a helyeket.
*	A frontend egy __HTTP POST__ kérést is küld a backendre, az pedig létrehoz egy Reservation példányt.

A másik fontos mozzanat a foglalás törlése. A frontend a megfelelő backend API-végpontról lekéri a felhasználó foglalásait, és megjeleníti azokat egy aloldalon. Amikor a felhasználó az adott foglalás törlése mellett dönt, akkor a frontend egy __HTTP DELETE__ kérést küld, a backend a foglaláshoz kötődő helyeket pedig „felszabadítja” majd törli a foglalás példányt. Így a helyek újra felszabadulnak a többi vevő számára.


## English version <a id='english'></a>