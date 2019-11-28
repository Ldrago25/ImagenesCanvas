var vp = document.getElementById("villaplatzi");
var lienzo = vp.getContext("2d");


// los Jason :v
var vaca = {
    url: "vaca.png",
    CargaOK: false
};

var fondo = {
    url: "tile.png",
    CargaOK: false
};

fondo.objeto = new Image();
fondo.objeto.src = fondo.url;
fondo.objeto.addEventListener("load", cargarfondo);

//creando objetos de las imagenes 
vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarvaca);

function cargarfondo() {
    fondo.CargaOK = true;
    dibujar();
}

function cargarvaca() {
    vaca.CargaOK = true;
    dibujar();
}

var ite = 0;
cantidad = aleatorios(1, 25);

function dibujar() {
    if (fondo.CargaOK) {
        lienzo.drawImage(fondo.objeto, 0, 0);
    }
    if (vaca.CargaOK) {

        console.log("Candidad de vacas: " + parseInt(cantidad));
        while (true) {
            if (ite == cantidad) break;
            var x = aleatorios(0, 4);
            var y = aleatorios(0, 4);
            var x = x * 80;
            var y = y * 80;
            lienzo.drawImage(vaca.objeto, x, y);
            ite++;

        }

    }

}







/*var cedo = new Image();
cerdo.src = "cerdo.png";
cerdo.addEventListener("load", dibujarcerdo);

var pollo = new Image();
pollo.src = "pollo.png";
pollo.addEventListener("load", dibujarpollo);*/





function aleatorios(min, max) {
    var alea;
    alea = Math.floor(Math.random() * (max - min + 1)) + min;
    return alea;
}


document.write("\n");
for (var i = 0; i < 10; i++) {
    var a = aleatorios(1, 100);
    console.log(a);
    if (a != 9)
        document.write(a + " ");
}