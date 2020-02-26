var person = {
    name : 'Andrés',
    surname : 'Betancourt',
    age : 19
}

var secondPerson = {
    name : 'Dario',
    surname : 'Santana',
    age : 20
}


var thirdPersona = {
    name : 'Marta',
    age : 20,
    phoneNumber : 3045860405
}

console.log(`Hola soy ${thirdPersona.name} tengo ${thirdPersona.age} y mi numero es ${ thirdPersona.phoneNumber
}`)

var {name} = thirdPersona;
console.log('Soy '+name)

function showNameOnUpperCase(persona){
    console.log(persona.name.toUpperCase())
}

showNameOnUpperCase(person)
showNameOnUpperCase(secondPerson)


function imprimirNombreYEdad(persona){
    var {surname} = persona
    var {name} = persona
    var {age} = persona
    console.log(`Hola ${name} ${surname} tienes en este momento ${age} años`)
}

imprimirNombreYEdad(person)
imprimirNombreYEdad(secondPerson)

console.log(`${person.name}, ${secondPerson.name} y ${name} se fueron a pasear y entonces...`)


var objeto = document.getElementById('division')

objeto.innerText = 'Estoy modificando el interior del documento'

objeto.innerHTML = objeto.toString()

var objetoTest = {
    html : objeto.innerText
}

function yearOfBirth(persona){
    return{
        ...persona,
        age : persona.age + 1
    }
    persona.age++
}

objetoTest.html = 'Otra cosa'

console.log(`${objetoTest.html} aquí va este otro mensaje`)


console.log(`${name} es un ${person.name}`)

var newPerson = {
    ...person,
    age : 16,
    name : 'Maria',
}