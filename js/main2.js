import data from './rickandmortycharacters.js';


//getting the container
const cardsContainer = document.getElementById('cards-container');

//looping through data to get the info required
data.forEach(character => {

    //create a div for each character
    const characterDiv = document.createElement('div');

    //showing info in html

    characterDiv.innerHTML += `

    <div class='card-container'>
        <h2>Name: ${character.name}</h2>
        <img src='${character.image}'>
        <h3>Status: ${character.status}</h3>
        <h3>Specie: ${character.species}</h3>
    </div>

    `;

    cardsContainer.append(characterDiv);
});


// CASO WEB INTERACTIVA
// DENTRO DE LA CARPETA DATA, HAY UN ARCHIVO rickandmortycharacters.js QUE PODEMOS UTILIZAR PARA EL DESARROLLO DE NUESTRA PREENTREGA
// 1) Mediante un alert, se deberá visualizar dar la bienvenida al sitio.
function welcomingUser() {

    const promptHi = alert('bienvenido a nuestro sitio, te mostraré información de RickandMorty.');

};
welcomingUser();
// 2) Mediante un find y Math.random,se deberá visualizar en un alert la información de un personaje random.
const randomCharacter = () => {

    //generate a random char withing the range of the length of the array
    const randomChar = Math.floor(Math.random() * data.length);

    const randomUser = data.find((user, index) => index === randomChar)

    alert(`Una muestra de un usuario :\nID: ${randomUser.id}\nNombre: ${randomUser.name}\nEspecie: ${randomUser.species}`);

};
randomCharacter();


// 3) Se deberán ordenar los personajes de Z-A, y visualizar en un alert la información del primer personaje.

//storing characters' list order from Z-A
const orderedCharacters = data.sort((a, b) => b.name - a.name);
const firstCharacterInfo = data[0];
alert(`Este es el primer usuario de la lista :\nNombre : ${firstCharacterInfo.name}\nEstatus : ${firstCharacterInfo.status}\nEspecie : ${firstCharacterInfo.species}`);

//showing the list of characters in the alert
let charactersNames = '';
for (const character of orderedCharacters) {

    charactersNames += character.name + '\n';
}
alert(`Lista de personajes, recuerda uno de sus nombres para ingresarlo y mostrarte su información.\n${charactersNames}`)

// 4) Mediante un prompt, se deberá preguntarle al usuario sobre qué personaje quiere buscar y visualizar información.

// 5)  Se deberá buscar y mediante un alert, mostrar la información del personaje ingresado. Si el valor no coincide, se deberá enviar un mensaje que indique que ese personaje no existe y darle la chance de que pueda volver a ingresarlo y ver la información.

while (true) {
    const userCharacter = prompt("Ingresa el nombre de un personaje para mostrar su información:");

    if (userCharacter === null) {

        alert("Operación cancelada por el usuario.");
        break; // Exit the loop if the user cancels
    }

    const selectedCharacter = data.find((character) =>
        character.name.toLowerCase() === userCharacter.toLowerCase()
    );

    if (selectedCharacter) {

        alert(`Seleccionaste a:\nNombre : ${selectedCharacter.name}\nEstatus : ${selectedCharacter.status}\nEspecie : ${selectedCharacter.species}\nTipo : ${selectedCharacter.type}\nGénero : ${selectedCharacter.gender}\nUbicación : ${selectedCharacter.location.name}\nURL : ${selectedCharacter.location.url}.`);
        break; // Exit the loop after displaying character info

    } else {

        alert('Personaje no encontrado. Por favor, intenta nuevamente.');
    }
};
alert('Gracias por tu tiempo! have a nice day.')














