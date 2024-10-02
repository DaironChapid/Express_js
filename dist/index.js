"use strict";
let nombre = "Dairon";
nombre = "Moreno";
console.log(nombre);
let numero = 18;
console.log(numero);
const e1 = {
    firstName: "Carlos",
    lastName: "Rodriguez",
    age: 18,
    address: {
        city: "Bogota",
        country: "Colombia",
        ad: "calle 52"
    }
};
const e2 = {
    firstName: "Dairon",
    lastName: "Moreno",
    age: 18,
    address: {
        city: "Bogota",
        country: "Colombia",
        ad: "calle 19"
    }
};
// funcion para mostrar info del estudiante
// version declarativa
const mostrarEstudiante = (estudiante) => {
    const { firstName, lastName } = estudiante;
    return `Nombre de estudiante: ${firstName}
apellido: ${lastName}`;
};
let estudiantes = [];
const arreglarEstudiante = (estudiante) => {
    estudiantes.push(estudiante);
};
const EliminarEstudiante = (age) => {
    estudiantes = estudiantes.filter(estudiante => estudiante.age != age);
};
arreglarEstudiante({
    firstName: "Carlos",
    lastName: "ortega",
    age: 18
});
arreglarEstudiante({
    firstName: "Santiago",
    lastName: "Mendez",
    age: 17
});
EliminarEstudiante(17);
console.log(estudiantes);
// modificar funcion de eliminar estudiante para q no elimine por indice si no con apellido
// crear metodo de actualizar estudiante por su indice
