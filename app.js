//Examen Practico TypeScript, E6
// tomado de examenpractico.txt
//Uso de Le y Const
var nombre = "Ricardo Tapia";
var edad = 23;
var PERSONAJE = {
    nombre: nombre,
    edad: edad
};
console.log('Personaje', PERSONAJE);
var batman = {
    nombre: 'Bruno Diaz',
    artesMarciales: ['Karate', 'Aikido', 'Wing Chun', 'Jiu-Jitsu']
};
var nom = batman.nombre;
var _a = batman.artesMarciales, karate = _a[0], aik = _a[1], wing = _a[2], jiu = _a[3];
console.log('Nombre: ', nom);
console.log('Artes Marciales: ', karate, aik, wing, jiu);
//Conversion funcion de flecha
var resultadoDoble = function (a, b) { return (a + b) * 2; };
console.log('Operacion: ', resultadoDoble(3, 6));
//crear funcion con parametros:
// obligatorio
// opcional
// por defecto
function getAvenger(nombre, poder, arma) {
    if (arma === void 0) { arma = 'arco'; }
    var mensaje;
    if (poder) {
        mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
    }
    else {
        mensaje = nombre + " y un arma: " + arma;
    }
    return mensaje;
}
var funcion = getAvenger('Pantera Negra');
console.log(funcion);
//Crear clase
var Rectangulo = /** @class */ (function () {
    function Rectangulo(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Rectangulo.prototype.calcularArea = function () {
        var area;
        area = this.base * this.altura;
        return area;
    };
    return Rectangulo;
}());
var rectangulo1 = new Rectangulo(5, 5);
;
console.log('Area: ', rectangulo1.calcularArea());
