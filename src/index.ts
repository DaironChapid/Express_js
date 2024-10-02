let nombre: string = "Dairon";
nombre = "Moreno";
console.log(nombre)
let numero: number = 18;
console.log(numero)


type address = {
    city? : string;
    country? : string;
    ad: string
}

// objeto
type estudiante = {
    firstName: string;
    lastName: string;
    age?: number ;
    address : address
}
const e1 : estudiante = {
    firstName : "Carlos",
    lastName : "Rodriguez",
    age : 18,
    address : {
        city : "Bogota",
        country: "Colombia",
        ad: "calle 52"
    }
}

const e2 : estudiante = {
    firstName : "Dairon",
    lastName : "Moreno",
    age : 18,
    address : {
        city : "Bogota",
        country: "Colombia",
        ad: "calle 19"
    }
}

// funcion para mostrar info del estudiante
// version declarativa

const mostrarEstudiante =
(estudiante: estudiante): string => {
const {firstName, lastName } = estudiante;
return `Nombre de estudiante: ${ firstName}
apellido: ${lastName}`;  

}

//console.log(mostrarEstudiante(e1));

///ARREGLOS
//Crear un arreglo de estudiantes:


// recorrer el arreglo de estudiantes
//imprimiendo nombre y apellido utilizando el metodo de darreglo for each

type Estudiante = {
    firstName: string;
    lastName: string;
    age?: number ;
}


let estudiantes: Estudiante[] = []




const arreglarEstudiante = (estudiante: Estudiante )=> {
    estudiantes.push(estudiante)
}

const EliminarEstudiante = (age: number) => {
    estudiantes = estudiantes.filter(estudiante => estudiante.age != age);
}


arreglarEstudiante({
    firstName: "Carlos",
    lastName: "ortega",
    age: 18
})

arreglarEstudiante({
    firstName: "Santiago",
    lastName: "Mendez",
    age: 17
})

EliminarEstudiante(17)

console.log(estudiantes);


// modificar funcion de eliminar estudiante para q no elimine por indice si no con apellido
// crear metodo de actualizar estudiante por su indice