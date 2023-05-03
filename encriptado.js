//Funcion para encriptar
function encriptar(str) {
    let newArr = [];
    let letras = [{
        a: "9", "b": "q", "c": "w", "d": "e", "e": "r", "f": "0", "g": "t", "h": "y", "i": "u", "j": "i", "k": "1", "l": "o", "m": "p", "n": "a", "ñ": "2",
        "o": "s", "p": "d", "q": "3", "r": "f", "s": "4", "t": "5", "u": "g", "v": "h", "w": "6", "x": "j", "y": "k", "z": "l", "0": "7", "1": "ñ",
        "2": "z", "3": "8", "4": "x", "5": "c", "6": "v", "7": "b", "8": "n", "9": "m", " ": " ", ".": ".", ",": ",", "/": "/", "@": "@",
        á: "9^", é:"r^",í:"u^",ó:"s^",ú:"g^"
    }];
    let encript = str
        .toLowerCase()
        .split("");
    //For para realizar el cambio de letras
    for (let i = 0; i < encript.length; i++){
        newArr.push(letras[0][encript[i]])  
    };
    
    console.log(newArr.join(""));
    newArr.join("")
    return escribir(newArr);
    
};
/* function escribir(srt) {
    console.log(srt.join(""))
    if (srt == undefined) {
        
    }
    else {
        document.getElementById("resultado","mensajesAnteriores").innerHTML = srt.join("");
    }
}; */
    

//Activación de la funcion inicial

//encriptar("hola amigos")

////////////////////////////////////////////

//Funcion para desencriptar el mensaje
function desencriptar(str) {
    let newArr = [];
     let letras = [{
        9: "a", "q": "b", "w": "c", "e": "d", "r": "e", "0": "f", "t": "g", "y": "h", "u": "i", "i": "j", "1": "k", "o": "l", "p": "m", "a": "n", "2": "ñ",
        "s": "o", "d": "p", "3": "q", "f": "r", "4": "s", "5": "t", "g": "u", "h": "v", "6": "w", "j": "x", "k": "y", "l": "z", "7": "0", "ñ": "1",
        "z": "2", "8": "3", "x": "4", "c": "5", "v": "6", "b": "7", "n": "8", "m": "9"," ":" ", ".":".",",":",","/":"/","@":"@","9^":"á", "r^":"é", "u^":"í", "s^":"ó", "g^":"ú"
    }];
    let encript = str.split("");
    //For para realizar el cambio de letras
    for (let i = 0; i < encript.length; i++){
        newArr.push(letras[0][encript[i]])
    }; 
    console.log(newArr.join(""));
    
    return escribir(newArr)
    
};
//Activación de la funcion
//desencriptar("r45up9es g4g9fus, r4 er pu 9tf9es ua0sfp9for 3gr r4 t9k.")

//////////////////////////////////

//Mostrar en pantalla los resultados de los botones
function escribir(srt) {
    console.log(srt.join(""))
    if (srt == undefined) {
        let emptyMessage = ""
        document.getElementById("resultado").innerHTML = emptyMessage;
    }
    else {
        document.getElementById("resultado").innerHTML = srt.join("");
    }
};

/////////////////////////////////

//Funcion para borrar lo escrito en el input
function borrarInput() {
  document.getElementById("input").value = "";
}



////////////////////////////
//Funcion para escribir en la parte de mensajes
function EscribirAgain(str) {
    console.log(srt.join(""))
    if (srt == undefined) {
        let emptyMessage = ""
        document.getElementById("mensajesAnteriores").innerHTML = emptyMessage;
    }
    else {
        document.getElementById("mensajesAnteriores").innerHTML = srt.join("");
    }
}
