import products from './products.js';



//storing categories in variables
const electronicsCategory = 'electronics';
const mensClothingCategory = "men's clothing";

//filtering categories from products list
// 1) Tomar dos categorías de productos que deseen incorporar en su tienda y filtrar de entre todos los productos aquellos que cumplan con la categoría.

//storing the filtered products in a variable
const filteredElectronics = products.filter(product => product.category === electronicsCategory);
console.log(filteredElectronics);

const filteredMensClothing = products.filter(product => product.category === mensClothingCategory);
console.log(filteredMensClothing);

// 2) Mediante un alert, saludar al usuario y darles la bienvenida a su ecommerce.
//welcoming the user function
function welcomingUser() {

    const userName = prompt('ingresa tu nombre')
    
    alert(`bienvenido a nuestra tienda online ${userName}, te ayudaremos con tu compra.`);
};
welcomingUser();

// 3) Mediante un alert, visualizar las categorías de productos disponibles.
//showing the user the categories
const displayCategories = () => {

    alert(`estas son las categorías disponibles : ${electronicsCategory} y ${mensClothingCategory}, a continuación deberás seleccionar una.`);
};
displayCategories();

//user must select one category and all products from that will be shown in an alert, it must be validated that user enters correct information.
//asking the user to select a category

let categoryInput = '';
function selectOneCategory() {


    while (true) {

        categoryInput = prompt(`Ingresa la categoría (${electronicsCategory} o ${mensClothingCategory}), recuerda escribir la información de forma perfecta como se muestra en la descripción`);

        //if the user clicks on cancel button, it shows the first alert.
        if (categoryInput === null) {

            alert('Operación cancelada por el usuario.');
            break;
            //checking that if the user input (prompt information) is equal to the categories.
        } else if (categoryInput === electronicsCategory || categoryInput === mensClothingCategory) {

            const selectedCategory = categoryInput;

            const filteredProducts = products.filter(product => product.category === selectedCategory);

            //ordering products alphabetically
            displayProductsAlphabetically(filteredProducts);
            
            break;

        } else {

            alert('Categoría no válida. Por favor, ingresa una categoría válida.');
        }
    }
};
selectOneCategory();

// Separate function to prompt the user to select a product by ID and validate it

// 4) Mediante un prompt, mostrar la lista de productos disponibles ordenados de manera A-Z y preguntar qué producto quiere comprar.
// Separate function to display products ordered alphabetically by title
function displayProductsAlphabetically(products) {

    const sortedProducts = products.slice().sort((a, b) => a.title.localeCompare(b.title));
    const productInfo = sortedProducts.map(product => `Id:${product.id}: = ${product.title}`).join('\n');
    
    alert(`Productos ordenados alfabéticamente:\n ${productInfo}`);
};

// 5) Con el valor obtenido del punto 4, se deberá buscar el producto deseado y mediante un confirm, mostrar el nombre, descripción y precio del producto. Se deberá preguntar al usuario si se desea completar la compra. En caso de que no se encuentre el producto, se deberá dar la chance de ingresarlo nuevamente.
// 6) Con el valor obtenido del punto 5), se deberá visualizar un alert que agradezca la compra con una supuesta fecha de entrega -usando date-, en el caso de que la acepte, si la cancela, se agradecerá la interacción.

// Separate function to confirm the purchase of a desired product
const confirmPurchase = () => {
    const sortedProducts = products.slice().sort((a, b) => a.title.localeCompare(b.title));
    const productInfo = sortedProducts.map(product => `${product.title} ${product.id}`).join('\n');

    const userConfirmation = prompt('ingresa el ID del producto que quieres comprar.');
    
    if(userConfirmation) {
        
        const selectedProduct = products.find(product => product.id === parseInt(userConfirmation, 10));

        if(selectedProduct) {

            const {id, title, price} = selectedProduct;
            const confirmation = confirm(`Estás de acuerdo en comprar el producto con ID: ${id}, Title: ${title}, Price: ${price}?\n\nProductos disponibles en ambas categorías:\n${productInfo}`);

            if(confirmation) {

                const today = new Date();
                const deliveryTime = new Date(today);
                deliveryTime.setDate(today.getDate() + 3);
                const formattedDeliveryTime = deliveryTime.toLocaleDateString()
                alert(`Compra exitosa!, has comprado el item con id : ${id}, nombre : ${title}.\n\n Fecha de entrega estimada : ${formattedDeliveryTime}\n\n Gracias por tu compra.`);

            } else {

                alert('Compra cancelada por el usuario, esperamos verte pronto.');
            }

        } else {

            alert('ID inválido, ingresa un ID correcto.');
        }
        
    }
    if(categoryInput !== null && categoryInput !== ""){

        confirmPurchase()
    
    };
};
confirmPurchase();









