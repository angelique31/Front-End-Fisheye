
// let userData = [];

/**
 * Fonction pour récupérer les données
 * @returns 
 */
async function getPhotographers() {
    // Penser à remplacer par les données récupérées dans le json
     //await fetch('data/photographers.json').then((res) => res.json()).then((data) => userData = data.photographers);
     
    const data = await fetch ('data/photographers.json');
    // console.log(userData);
    const photographers = await data.json();
        
    // et bien retourner le tableau photographers seulement une fois
    return photographers;
}


// return fetch ('data/photographers.json')
// .then(function(response) {
//     return response.json();
// })
// .then((datas) => {

//     return datas;
// })
// .catch(err =>console.log('nope', err));


/**
 * Fonction pour afficher les données
 * @param {*} photographers 
 */
async function displayData(photographers) {
    const photographersSection = document.querySelector('.photographer_section');

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        // console.log(photographerModel);
        const userCardDOM = photographerModel.getUserCardDOM();
        // console.log(userCardDOM);
        photographersSection.appendChild(userCardDOM);
    });
}

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    // console.log(photographers);
    displayData(photographers);
}

init();

/**
 * Fonction des photographes
 * @param {*} data 
 * @returns 
 */
function photographerFactory(data) {
    const { name, portrait } = data;

    const picture = `assets/photographers/${portrait}`;
    // console.log(picture);
    function getUserCardDOM() {
        const article = document.createElement('article');
        const img = document.createElement('img');
        img.setAttribute('src', picture);
        const h2 = document.createElement('h2');
        h2.textContent = name;
        article.appendChild(img);
        article.appendChild(h2);
        return article;
    }
    return { name, picture, getUserCardDOM };
}
