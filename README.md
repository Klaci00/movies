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

## Backend

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" height=200 >
<img src="https://www.fullstackpython.com/img/logos/django-rest-framework.png" height=200>

A backend alapja a Python3 nyelven íródott Django fejlesztési környezetben, illetve a következő Python könyvtárak segítségével:
*	__Django rest-framework__
    *	API-végpontok kialakításához, és az adatok szerializációjához
*	__Pillow__
    *	képkezelő könyvtár
*	__django-cors-headers__
    * __Cross-Origin Resource Sharing__ (CORS) headerek hozzáadása a kérésekhez, a biztonságos források eléréséért
*	__JSON Web Tokens__
    *	kódolt token párokat használó könyvtár az autentikációhoz

### Modellek

A projekt a következő osztály alapú adatmodellekre épül:

*	__Show__
    *	Maga a __film__ 
*	Tartalma: 
    *	a film címe
    *	a film plakátja
    *	korhatára
    *	játékidő (percben)
    *	rövid leírása 
    *	__Venue__: a következő adatmodell many-to-one jelleggel kapcsolódik a show modellhez, tehát egy filmhez több Venue kötődhet, de egy Venue csak egy filmhez kötődhet. 

*	__Venue__ 
    *	A **vetítést** reprezentáló adatmodell 
*	Tartalma:
    *	a film címe
    *	a terem neve
    *	a vetítés időpontja
    *	a modell gerincét adó jsonfield adatmező, mely a foglalt és előfoglalt helyeket szimbolizálja
    *	a terem stílusa (a frontenden van szerepe) __RoomStyleDict__, one-to-many kapcsolattal, tehát egy Venue-hoz egy stílus kapcsolódhat, de egy stílus bármennyi Venue-hoz kapcsolódhat
    *	__Reservation__: „foglalás”, a következő adatmodell many-to-one jelleggel, tehát egy Venue-hoz kötődhet sok foglalás, de egy foglalás csak egy Venue-hoz kötődhet

*	__Reservation__ 
*	A __foglalást__ reprezentáló adatmodell 
    *	Tartalma:
        *	a Venue id-ja
        *	a film címe
        *	a felhasználó, aki a foglalást végezte, egy foglaláshoz csak egy felhasználó kötődhet
        *	a terem neve
        *	a vetítés időpontja
        *	az ülések (JSONField)
        *	a foglalt ülések száma
        *	a lefoglalt ülések nevei, úgy mint 3. sor, 7. szék stb.

*	__CustomUser__
    *	a __felhasználó__
    *	tartalma:
        *	keresztnév
        *	vezetéknév
        *	felhasználónév
        *	email cím
        *	jelszó (hash digest)

*	__RoomStyleDict__
    *	egy modell, arra a célra, ha a termek megjelenésén akarunk változtatni anélkül, hogy a frontenden módosítást végeznénk, illetve új termeket is létrehozhatunk vele
*	tartalma:
    *	terem neve
    *	férőhelyek száma
    *	belső szöveg (pl. „vászon”, „bejárat”), dictionary
    *	style_dict, lényegében egy dictionary, amit a frontend felhasznál a moziterem elemeinél, lényegében a CSS-t váltja ki pl: 
        *	<div Style={style_dict[’entrance_left’]}>{inner_text[’entrance_left’]} </div>
        *	ez azért lehet célszerű, mert így az ügyfél közvetlenül a backendről tud újfajta termet hozzáadni a mozihoz, illetve átalakítani azokat

### Relációk
<img src="./readme images/db_rel.png">
 
### Adminisztrációs felület

A csapat a Django által biztosított jól bevált admin felületet használta ki. A backenden a ModelAdmin osztály segítségével regisztráltuk a modelleket.

A fent említett RoomStyleDict szerkesztése nehezen átlátható, ezért egy widgetet is meghívtunk, melynek neve JSONEditorWidget. Ezt a widgetet egy formba helyezve és a formot meghívva regisztráltuk a ModelAdmin segítségével.

<img src="./readme images/jsoneditor.png">


A Meta osztály segítségével magyar nyelvű egyes- és többesszámú nevekkel 
is elláttuk a modelleket.

<img src="./readme images/admin%2001.png">

Az osztályok __str__(self) metódusával pedig megoldottuk, hogy az objektumok jól felismerhetőek, megkülönböztethetőek legyenek:

Venue:
```python
    def __str__(self) -> str:
            return self.title+', '+self.room_name+', '+str(self.showtime)       
```



A __ModelAdmin__ segítségével kihagytuk a hosszas mezőket a list displayből:

```python
class ReservationAdmin(admin.ModelAdmin):
    list_display=['owner','title','room_name','seat_count','showtime']
    pass
```

<img src="./readme images/admin%20inline.png">


### Funkciók

A backend elsősorban osztály alapú nézeteket használ. Ezeket a nézeteket (attribútumaikat, metódusaikat) írják felül a rest-framework generic nézetei. Összetettebb esetekben szükség volt a nézetek metódusait is felülírni. Az alábbiakban erre hozok fel egy példát:
```python
class ReservDestroy(generics.DestroyAPIView):
    permission_classes =[IsAuthenticated]
    queryset=Reservation.objects.all()
    serializer_class=ReservSerializer
    def destroy(self, request, *args, **kwargs):       
            instance: object = self.get_object()          
            venue: object = Venue.objects.get(id=instance.venueId)
            venue=seat_liberator2(instance,venue)
            print('venue: ',venue.seats)
            print('instance',instance.seats)
            self.perform_destroy(instance)
            venue.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
    def perform_destroy(self, instance):
        instance.delete()
```
Ezen esetben a foglalás törléséért felelős nézetet látjuk. A destroy metódus itt nem csak a példányt törli, hanem megkeresi a vetítés példányt, majd a két JSONField adatmezőt egymáshoz vetve törli a foglalásban szereplő székeket a vetítés adataiból, így szabaddá téve azokat. A foglalás példány törlése csak ezután történik meg.

A kódban látható a „seat_liberator2” függvény. A kód átláthatósága végett az ülésekkel kapcsolatos függvényeket egy saját magunk által írt modulban, a „seathandler” azaz „ülés kezelő” modulban írtuk meg.
<img src="./readme images/importmodule.png">

### Helyfoglalás
A bevezetőben is taglaltak szerint, a backend a frontendtől kap egy PATCH http kérést, amit a partial_update metódus kezel. Mivel várhatóan egyszerre több ember is foglalhat jegyet ugyanarra a filmre, fontos felkészülni az esetleges konfliktusokra is. Ezt a Django transaction modullal oldottuk meg, azon belül is az atomic() metódussal. Ennek a metódusnak a lényege, hogy a try blokkban levő folyamatok vagy egységesen (atomikusan) lefutnak, vagy visszaállnak a belépési pont előtti állapotra. A seathandler.validate() függvény ellenőrzi, hogy az előfoglalt helyek nincsenek-e már benne a vetítés üléseiben, tehát nem foglaltak-e. Amennyiben nincsenek, úgy ezeket a változókat hozzáadja a vetítés JSONFieldjéhez, true értékkel, és 200-as OK http kóddal jelzi a frontendnek, hogy rendben ment a foglalás, majd a serializer elvégzi a módosításokat. Ha valamelyik széket már lefoglalták, akkor __http 409__-es __CONFLICT__ üzenetet küld a frontendnek.

<img src="./readme images/200.png">
<img src="./readme images/409.png">

### Foglalás törlése
A törlést a rest-framework generics.DestroyAPIView nézetével oldottuk meg. Az ezen nézetet használó URL-re csak DELETE http kérést lehet küldeni. Természetesen csak autentikált kérést fogad el a nézet. Itt a seathandler modul seat_liberator2 függvénye végzi el a helyek felszabadítását a következő módon:
*	a Django a nézet példány self.get_object() metódusával megkeresi a Reservation azaz a foglalás példányt
*	a Model osztály Venue.objects.get() metódussal megkeresi az érintett Venue, azaz a vetítés példányt
*	összeveti a foglalás üléseit a vetítés üléseivel, kitörölve az érintett üléseket a vetítés JSONFieldjéből
*	végül törli a foglalás példányt

<img src="./readme images/delete.png">

### Adminisztratív funkciók
A használat megkönnyítése céljából a frontend oldalról is lehetővé tettük az olyan funkciókat, mint a 
*	film hozzáadása
*	vetítés hozzáadása adott filmhez
*	film törlése
*	vetítés törlése
Így olyan .is_staff attribútummal rendelkező felhasználó is elvégezheti ezeket a műveleteket, akik valamilyen okból nem férnek hozzá a Django adminisztrációs felületéhez.
Ez akkor is célravezető lehet, ha a backend külön domainen helyezkedik el.
Ezeket a funkciókat is a rest framework generic nézeteivel oldottuk meg. 

### Biztonság

Az alkalmazás autentikációját a __JSON Web Token__ könyvtár segítségével oldottuk meg. Ez a megközelítés két tokenből álló párt használ, az access és a refresh tokent. Az access token szükséges minden olyan http kéréshez, ami autentikációhoz kötött (permission_classes =[IsAuthenticated]). Az access token rövid ideig érvényes, emiatt a visszaélésre alkalmas idő is kisebb. A refresh token élettartama hosszabb, ezt akár hetekre is eltárolhatja a böngésző. A biztonság érdekében a backend „__rotálja__” a refresh tokent, tehát amikor a frontend egy új access tokent kér, akkor nem csak az access token, hanem a refresh token is megújul. Ez azért létfontosságú, mert ha nem így lenne, akkor egy jogosulatlanul megszerzett refresh tokennel korlátlan számú access tokent lehetne kérni. Az elhasznált tokeneket a Django feketelistára teszi, így megelőzve a jogtalan „újrahasznosítást”.

<img src="./readme images/simple_jwt.png">

A frontenden szintén a JSON Web Token könyvtár JavaScript megfelelője dekódolja a tokent. A JWT könyvtár lehetővé teszi a Django számára, hogy „személyre szabjuk” a tokeneket, ezért a tokenek részét képezi a felhasználónév, és az is_staff státusz is, így ezeket az adatokat nem kell más helyeken elmenteni.

<img src="./readme images/customtoken.png">
<img src="./readme images/decodedT.png">
<img src="./readme images/token_console.png">

A frontenden a biztonság elsősorban a regisztrációnál a jelszóbiztonság kikényszerítésében összpontosul.

<img src="./readme images/regist01.png">

## Frontend
A frontend alapja egy, a Node.js futtatási környezetben futó Vite fejlesztési szerver, amin a React nevű, nyílt forráskódú JavaScript könyvtárat használtuk.

 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png" height=100> <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg" height=100><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" height=100>


Tekintettel a jó prezentálhatóságra, az áttekinthetőségre és az időkorlátokra, a letisztult, minimalista dizájn mellett döntöttünk.

A frontend felépítése a következő:
*	navigációs sáv: 
    *	bejelentkezve
        *	Kapcsolat
        *	Kezdőoldal
        *	Üdvözlő szöveg
        *	Foglalások
        *	Kijelentkezés
    *	kijelentkezve
        *	Kapcsolat
        *	Kezdőoldal
        *	Regisztráció
        *	Bejelentkezés

 <img src="./readme images/loggedin.png">
 <img src="./readme images/loggedout.png">

### A kezdőoldal tagoltsága
A kezdőoldal tartalma kizárólag a műsoron levő filmekből áll, tehát vetítéseket nem tartalmaz. Ez részben az áttekinthetőséget szolgálja, részben pedig egyfajta pagináció, mely megakadályozza a nagy mennyiségű adat lekérését.
A kényelem kedvéért elhelyeztünk egy gombot a jobb alsó sarokban, amire kattintva felgördül a viewport az oldal tetejére.

A kezdőoldal kettő fő részből áll:
* diavetítés
* filmlista

 <img src="./readme images/slideshow.png">
 <img src="./readme images/listview.png">

### Reszponzivitás
Az oldal szinte kizárólag __relatív__ mértékegységeket használ, így mindig jól igazodik a viewport méretéhez.

A React __useEffect__ funkciójának segítségével a frontend mindig tisztában van a viewport méretével, így, ha annak magassága, avagy szélessége 600 pixel alá csökken, akkor megváltozik a navigációs sáv felépítése, sőt a helytakarékosság érdekében megjelenik egy gomb, mellyel „összecsukhatjuk” 
a menüt. 

 <img src="./readme images/smallnav.png">

A CSS __@media__ dekorátorának köszönhetően feltételekhez kötötten könnyen meg lehet változtatni adott attribútumokat, míg a többi attribútumot nem kell újra megadni.

```CSS
@media (max-width: 600px) or (max-height: 600px){
    .poster{
        min-width: 80vw;
    }
    .nav{
        display: flex;
        flex-direction: column;
    }
}
```

### Helyfoglalás
A filmcímre kattintva a következő aloldalon az elérhető vetítéseket látjuk, és eldönthetjük, hogy hány helyet szeretnénk lefoglalni.

 <img src="./readme images/listvenues.png">

Ezek után a megjelenő térképen a helyeket kell kiválasztanunk. Az oldal addig nem enged foglalni; amíg a kiválasztott számú helyet le nem foglaljuk.
Sikeres foglaláskor az ablak window.alert buborékkal közli velünk a foglalás megtörténtét. Ellenkező esetben a hiba jellegéről kapunk buborékot, és frissíteni kell az oldalt.
A navigációs sáv foglalások menüpontjára kattintva meggyőződhetünk róla, hogy a foglalásunk valóban sikeres volt-e.

 <img src="./readme images/reserv.png">

Ha a foglalás törlése mellett döntünk, akkor az adott gombra kattintva megtehetjük azt, a foglalás törlődik a helyek pedig újra felszabadulnak.

### Regisztráció

A biztonság érdekében a regisztrációnál __regular expressiont__ illetve __proptypes__ használatával felépített függvény ellenőrzi a jelszó erősségét és az adatok helyes formátumát, például az email címet.
Regisztráció előtt a frontend elküldi az email címet és a felhasználónevet egy külön erre a célra megírt nézetnek, amely választ küld aszerint, hogy a felhasználónév és az email cím foglalt-e már. Sikertelen regisztráció esetén *window.alert* buborék formájában figyelmeztetést kap a felhasználó. Sikeres regisztráció esetén a frontend be is jelentkezteti a felhasználót.

 <img src="./readme images/regist01.png">

```js
export const ValidateInputs = (firstname, lastname, email, username, password, confPW, setProblem, setButtonDisabled) => {
    let valid = true;
    let problemText = '';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s])[A-Za-z\d\s\W]+$/;

    if (firstname.length < 1 || lastname.length < 1) {
        problemText += 'A keresztnév és a vezetéknév megadása kötelező!\n';
        valid = false;
    }
    if (username.length < 5) {
        problemText += 'A felhasználónévnek legalább 5 karakter hosszúnak kell lennie!\n';
        valid = false;
    }
    if (/\s/.test(username)) {
        problemText += 'A felhasználónév nem tartalmazhat szóközt!\n';
        valid = false;
    }
    if (!emailRegex.test(email)) {
        problemText += 'Az email cím formátuma nem megfelelő!\n';
        valid = false;
    }
    if (password.length < 8) {
        problemText += 'A jelszónak legalább 8 karakter hosszúnak kell lennie!\n';
        valid = false;
    }
    if (!passRegex.test(password)) {
        problemText += 'A jelszónak tartalmaznia kell legalább egy nagybetűt, egy kisbetűt, egy számjegyet és egy speciális karaktert!\n';
        valid = false;
    }
    if (password !== confPW) {
        problemText += 'A jelszavak nem egyeznek!\n';
        valid = false;
    }

    setProblem(problemText);
    setButtonDisabled(!valid);
    return valid;
}
```
### Adminisztratív funkciók
A frontend a személyre szabott tokeneknek köszönhetően eldönti, hogy adminisztrátor-e a felhasználó, és a menüt eszerint jeleníti meg. Az admin felületen a felhasználó mindig az API végpontokról lekért friss információt látja. A négy funkció:
*	Film hozzáadása
*	Vetítés hozzáadása
*	Film törlése
*	Vetítés törlése

 <img src="./readme images/addshow.png">
*Film hozzáadása*
 <img src="./readme images/addvenue.png">
*Vetítés hozzáadása*

 <img src="./readme images/deleteshow.png">
*Film törlése*

 <img src="./readme images/deletevenue.png">
*Vetítés törlése*

## English version <a id='english'></a>