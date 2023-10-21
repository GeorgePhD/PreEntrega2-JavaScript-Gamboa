//import product data
import products from './products.js';

//adding the products list to a variable
const productsData = products;

//checking whether it works
//console.log(productsData[10].category);



// ESTOS PUNTOS DE TAREA COMPRENDEN TODO LO VISTO DURANTE LAS CLASE 1, 2, 3, 4, 5, 6 ,7, 8
// EL SEGUNDO DESAFÍO COMPRENDE: VARIABLES, CONDICIONALES, BUCLES, FUNCIONES, OBJETOS, ARRAYS Y FUNCIONES DE ORDEN SUPERIOR
// ESO SIGNIFICA QUE TODO EJERCICIO QUE CONTENGA MÉTODOS O DATOS QUE NO FUERON VISTOS EN CLASES, NO SERÁN EVALUADOS
// ESO SIGNIFICA QUE DEBEN INCLUIR TODO LO VISTO HASTA LA CLASE 8

// CASO ECOMMERCE
// DENTRO DE LA CARPETA DATA, HAY UN ARCHIVO products.js QUE PODEMOS UTILIZAR PARA EL DESARROLLO DE NUESTRA PREENTREGA

// 1) Tomar dos categorías de productos que deseen incorporar en su tienda y filtrar de entre todos los productos aquellos que cumplan con la categoría.

//adding two categories to a variable
const categories = ['electronics', "women's clothing"];

//filtering the categories
function filteringByCategory() {

    const filteredProducts = productsData.filter( product => categories.includes(product.category));
    //console.log(filteredProducts);

    return filteredProducts;

};
filteringByCategory();

// 2) Mediante un alert, saludar al usuario y darles la bienvenida a su ecommerce.
const askingUser = () => {

    alert('bienvenido a nuestra tienda online');

};
askingUser();

// 3) Mediante un alert, visualizar las categorías de productos disponibles.
function showingCategories() {

    alert(`estas son nuestras categorías disponibles: 1. ${categories[0]} and 2. ${categories[1]}`);

};
showingCategories();

//validating input from user / validando el input del usuario
const validatingInput = () => {

    let validCategory = false;

    while(!validCategory) {

        const category = prompt('ingrese el numero de la categoría');

        switch (category) {

            case '1':
                alert(`esta es la categoría 1 : ${categories[0]} : ${categories[0]}`);
                validCategory = true;
                break;
            
            case '2':
                alert(`esta es la categoría 2 : ${categories[1]} : ${categories[1]}`)
                validCategory = true;
                break;
    
            default: 
            alert('invalid information. Please enter 1 or 2 to see the categories');
            //break;
        }
            //return;
    }
};
validatingInput();

// 4) Mediante un prompt, mostrar la lista de productos disponibles ordenados de manera A-Z y preguntar qué producto quiere comprar.
//display the products in a prompt
function displayingOrderedProducts() {

    const cards_container = document.querySelector('#cards-container');
    cards_container.classList.add('cards-container');
    
        const sortedProducts = [...productsData];

        sortedProducts.sort( (a ,b) => { 

            return a.title.localeCompare(b.title);

    });

    for(const product of products) {

        console.log(`name : ${product.title}, Category: ${product.category}`);

       // for(const product of products) {

            cards_container.innerHTML += `
            
                <div class='card-container'>

                <h2> Title : ${product.title}</h2> 
                <h2> Category: ${product.category}</h2> 
                <img class='card-container--img' src='${product.image}'> 
                <p class='card-container--p'> Price: ${product.price}</p> 
                
                </div>
        
        `}

        
   // }
};
displayingOrderedProducts();

// 5) Con el valor obtenido del punto 4, se deberá buscar el producto deseado y mediante un confirm, mostrar el nombre, descripción y precio del producto. Se deberá preguntar al usuario si se desea completar la compra. En caso de que no se encuentre el producto, se deberá dar la chance de ingresarlo nuevamente.





// 6) Con el valor obtenido del punto 5), se deberá visualizar un alert que agradezca la compra con una supuesta fecha de entrega -usando date-, en el caso de que la acepte, si la cancela, se agradecerá la interacción.

// CASO WEB INTERACTIVA
// DENTRO DE LA CARPETA DATA, HAY UN ARCHIVO rickandmortycharacters.js QUE PODEMOS UTILIZAR PARA EL DESARROLLO DE NUESTRA PREENTREGA
// 1) Mediante un alert, se deberá visualizar dar la bienvenida al sitio.
// 2) Mediante un find y Math.random,se deberá visualizar en un alert la información de un personaje random.
// 3) Se deberán ordenar los personajes de Z-A, y visualizar en un alert la información del primer personaje.
// 4) Mediante un prompt, se deberá preguntarle al usuario sobre qué personaje quiere buscar y visualizar información.
// 5)  Se deberá buscar y mediante un alert, mostrar la información del personaje ingresado. Si el valor no coincide, se deberá enviar un mensaje que indique que ese personaje no existe y darle la chance de que pueda volver a ingresarlo y ver la información.
