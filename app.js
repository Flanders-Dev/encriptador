//Funcion Encriptar

function encrypt(text) {
    var key = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
    };
    var encryptedText = '';

    for (var i = 0; i < text.length; i++) {
        var ch = text[i];
        encryptedText += key[ch] ? key[ch] : ch;
    }
    
    document.getElementById('encrypted').value = encryptedText;
}

//Funcion Desencriptar

function decrypt(text) {
    var key = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
    };

    var entries = Object.entries(key);

    for (var [substring, replacement] of entries) {
    text = text.replace(new RegExp(substring, 'g'), replacement);
    }

    document.getElementById('encrypted').value = `${text}`;
}

//Boton Encriptar

document.getElementById('encrypt-button').addEventListener('click', function() {
    var text = document.getElementById('text-box').value;  
    encrypt(text);  
});

//Boton Desencriptar

document.getElementById('decrypt-button').addEventListener('click', function() {
    var text = document.getElementById('text-box').value;  
    decrypt(text);  
});

//Boton Copiar

document.getElementById('copy-button').addEventListener('click', function() {
    navigator.clipboard.writeText(document.getElementById('encrypted').value).then(function() {
    console.log('Text copied to clipboard');
    }, function(error) {
    console.error('Failed to copy text: ' + error);
    });
});

//Funcion para esconder el arte

const encryptButton = document.getElementById("encrypt-button");
const decryptButton = document.getElementById("decrypt-button");
const outputOne = document.querySelector(".ouputOne");
const outputTwo = document.querySelector(".ouputTwo");

encryptButton.addEventListener("click", function() {
outputOne.style.display = "none";
outputTwo.style.display = "flex";
});

decryptButton.addEventListener("click", function() {
outputOne.style.display = "none";
outputTwo.style.display = "flex";
});
