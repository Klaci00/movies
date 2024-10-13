<script>
    function copyToClipboard(_myParagraph) {
        var textToCopy = document.getElementById(_myParagraph.innerText;
        navigator.clipboard.writeText(textToCopy).then(function() {
            console.log('Text copied to clipboard');
        }).catch(function(err) {
            console.error('Failed to copy text: ', err);
        });
    }
</script>


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

Amennyiben a git még nincs konfigurálva:  
* megnyitjuk a git bash alkalmazást
* beírjuk:
  * __<p id="myParagraph">git config --global user.name"felhasználónév"</p>__<button onclick="copyToClipboard('myParagraph')">📋</button>

    * entert nyomunk 
  * __git config --global user.email "felhasználó@email.xyz"__
    * entert nyomunk 
    * 
Az alábbi sorokat be kell másolni a 

    py -m venv testbed1  
    testbed1\scripts\activate  
    pip install -r backend\requirements.txt  
    cd frontend\movies-front  
    npm install  
    npm run dev

## English version <a id='english'></a>