"use strict";

/*Ens demanen crear una aplicació per donar d’alta, 
modificar, veure i eliminar hotels.*/

class Hotel {
    constructor(name, rooms, floors, area){
        this._name = name;
        this._rooms = rooms;
        this._floors = floors;
        this._area = area;
    }

    set name(name){
        this._name = name;
    }

    set rooms(rooms){
        this._rooms = rooms;
    }

    set area(area){
        this._area = area;
           
    }

    set floors(floors){
        this._floors = floors;
    }

    get name (){
        return this._name;

    }

    get rooms (){
        return this._rooms;
    }

    get floors(){
        return this._floors;
    }

    get area(){
        return this._area;
    }

/*cada persona del servei pot atendre 20 habitacions i haurà de mostrar
 quantes persones són necessàries per atendre el servei d’habitacions 
 de l’hotel i quin és el cost total destinat al servei sabent que 
 aquestes persones cobren 1.500€ al mes. */

//Math.ceil => devuelve el entero mayor

calcularManteniment(){

 var hotelName = prompt(`De quin hotel vols calcular el cost de manteniment?`);
  console.log(hotelName)
    for (let i=0;i<arrayHoteles.length;i++){

        if (hotelName == arrayHoteles[i].name){
        
        let personesManteniment= Math.ceil((arrayHoteles[i].rooms/20));
        let costManteniment = personesManteniment*1500;
        document.getElementById("demo3").innerHTML =`L'Hotel ${hotelName} necessita ${personesManteniment} treballadors de manteniment amb un cost total de ${costManteniment} mensuals`
        console.log(personesManteniment)
        console.log(costManteniment)
        } 
    } 
}
}

/* haurà de demanar a l’usuari que introdueixi per pantalla les 
dades de nom,  nombre d’habitacions, nombre de plantes i superfície total de l’hotel. 
Un cop hagi demanat totes aquestes dades, s’ha d’instanciar l’objecte de la classe 
i afegir-lo a un array d’hotels.
*/

var arrayHoteles = [];
    //Para tener ya un hotel en el array y hacer iteraciones
var Ibis = new Hotel("Ibis", 1053, 4, 200);
arrayHoteles.push(Ibis);

function crearHotel(){

let name = prompt(`Write the name of the hotel`);
let rooms = parseInt(prompt(`Introduce the number of rooms`));
let floors = parseInt(prompt(`Introduce the number of floors`));
let area = parseFloat(prompt(`Which is the area of the hotel in square meters?`));

//com fer validació per a que si l'usuari fica un string doni error?
//let rooms1 = /^([0-9])*$/
//isNaN()
    var hotel = new Hotel(name, rooms, floors, area); 
    arrayHoteles.push(hotel);
    console.log(arrayHoteles);
}

/*
ha de demanar quin hotel es vol donar de baixa. L’usuari introduirà 
el nom de l’hotel i si l’hotel està dintre de l’array, l’eliminarem i 
mostrarem un missatge per pantalla informant l’usuari que hem eliminat 
l’hotel. Si no hem trobat l’hotel dintre de l’array, avisarem l’usuari 
dient que l’hotel no estava dintre de la nostra aplicació.
*/

function baixaHotel(){
let hotelName = prompt(`Quin hotel vol donar de baixa?`);

for (let i=0; i<arrayHoteles.length; i++){
    if (hotelName == arrayHoteles[i].name){
        arrayHoteles.splice(i,1);

    } else {
        document.write(`L'hotel {hotelName} no es troba a la nostra base de dades`)

    }
}
}


/*ha de demanar a l’usuari el nom de l’hotel que vol que mostrem per 
pantalla, si l’hotel està a la nostra aplicació, li mostrarem l’hotel, 
si no hi és, informarem l’usuari dient que l’hotel que ens ha demanat 
no està dintre de la nostra aplicació.
Quan mostrem l’hotel, a més, de mostrar el nombre d’habitacions, 
nombre de plantes i superfície total de l’hotel també es cridarà al 
mètode calcularManteniment().
*/

function veureHotel(){
let hotelName = prompt(`Which hotel do you want information?`)

for (let i=0; i<arrayHoteles.length; i++){
    if (hotelName == arrayHoteles[i].name){
        console.log(arrayHoteles[i])
        document.getElementById("demo").innerHTML = `Hotel:${arrayHoteles[i].name} <br> Habitacions:${arrayHoteles[i].rooms} <br> Pisos:${arrayHoteles[i].floors} <br> superficie:${arrayHoteles[i].area} `
        arrayHoteles[i].calcularManteniment()
 
    }
} 
}

/* demanar a l’usuari quin hotel vol modificar. L’usuari introduirà 
el nom de l’hotel. Si el tenim a l’aplicació, li demanarem si vol 
modificar el nombre d’habitacions, el nombre de plantes o la superfície 
total de l’hotel. Farem la modificació pertinent i avisarem a l’usuari 
que la modificació s’ha realitzat.
*/

function modificarHotel(hotel){
    let hotelName = prompt(`Which hotel do you want to modify?`);
    let itemModificado = parseInt(prompt(`What do you want to modify?: 1- hotel's name 
        2- rooms number, 3- floors number, 4- hotel area`));


for (let i=0;i<arrayHoteles.length;i++){
    if (hotelName == arrayHoteles[i].name){
        //He de controlar en la modificación que el nombre sea string y el resto números
        if (itemModificado==1){
            let nameEdit = prompt(`Write the name of the hotel`);
            arrayHoteles[i].name= nameEdit; 
        } else { 
            let itemEdit = parseInt(prompt(`Write the new data`));
            switch (itemModificado){
            case 1:
                arrayHoteles[i].rooms= itemEdit; 
            break;
            case 2:
                arrayHoteles[i].floors= itemEdit; 
            break;
            default:
                arrayHoteles[i].area= itemEdit; 

        }
        document.getElementById("demo2").innerHTML = `The modification has been done`

    }
}

}
}