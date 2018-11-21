//Examen Practico TypeScript, E6
// tomado de examenpractico.txt

//Uso de Le y Const
let nombre:string = "Ricardo Tapia";
let edad:number = 23;

const PERSONAJE = {
    nombre,
    edad
}

console.log('Personaje', PERSONAJE);

// Cree una interfaz que sirva para validar el siguiente objeto
interface Batman {
    nombre:string;
    artesMarciales:string[];
}

let batman:Batman = {
    nombre: 'Bruno Diaz',
    artesMarciales: ['Karate','Aikido', 'Wing Chun', 'Jiu-Jitsu']
}

let {nombre:nom } = batman;
let [karate, aik, wing, jiu] = batman.artesMarciales;
console.log('Nombre: ', nom);
console.log('Artes Marciales: ', karate, aik, wing, jiu )
//Conversion funcion de flecha
let resultadoDoble = (a:number, b:number) => (a +b) * 2;

console.log('Operacion: ',resultadoDoble(3,6));

//crear funcion con parametros:
// obligatorio
// opcional
// por defecto
function getAvenger(nombre:string,
                    poder?:string,
                    arma:string = 'arco'){
    
    let mensaje:string;

    if(poder) {
        mensaje = `${nombre} tiene el poder de: ${poder} y un arma: ${arma}`;
    }else{
        mensaje = `${nombre} y un arma: ${arma}`;
    }

    return mensaje;
}

let funcion = getAvenger('Pantera Negra');
console.log(funcion);

//Crear clase
class Rectangulo {
    base:number;
    altura:number;

    constructor(base:number, altura:number){
        this.base = base;
        this.altura = altura;
    }

    calcularArea():number {
        let area;
        area = this.base * this.altura;
        return area;
    }
}

let rectangulo1 = new Rectangulo(5,5);;
console.log('Area: ', rectangulo1.calcularArea());