//Mettre le code JavaScript lié à la page photographer.html

/**
 * Fonction pour récupérer les données des photographes
 * @returns 
 */
async function getPhotographers() {
    return fetch ('data/photographers.json')
        .then((res) => {
            return res.json();
        })
        .then((datas) => {
            console.log(datas);
            return datas;
        });    
}

/**
 * Fonction pour récupérer les données des medias
 * @returns 
 */

function getMedias() {
    const medias = fetch('data/photographers.json')
        .then(data => data.json())
        .then(data => data.media);
        // .catch(err => console.log('Error parsing photos', err));
    return medias;
}

/**
 * Fonction pour afficher les données des photographes
 * @param {*} photographers 
 */
async function displayData(photographers) {
    const photographersSection = document.querySelector('.photograph-header');

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        // console.log(userCardDOM);
        // photographersSection.appendChild(userCardDOM);
        photographersSection.insertAdjacentHTML('beforeEnd', userCardDOM);
    });
}

/**
 * Fonction pour afficher les données des medias
 * @param {*} medias 
 */
async function displayMedia(medias) {
    const photographersSection = document.querySelector('.galleryPhotos');

    medias.forEach((media) => {
        const photographerModel = mediaFactory(name, media);
        console.log(photographerModel);
        const userCardDOM = photographerModel.getUserCardDOM();
        // console.log(userCardDOM);
        // photographersSection.appendChild(userCardDOM);
        photographersSection.insertAdjacentHTML('beforeEnd', userCardDOM);
    });
}


async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    // console.log(photographers);
    const idRequest = window.location.href.split('?')[1];
    
    const photographer = await photographers.filter(photographer => photographer.id == idRequest);
    displayData(photographer);
}

init();


async function initMedias() {
    // Récupère les datas des medias
    const  medias  = await getMedias();
    console.log(medias);
    const idRequest = window.location.href.split('?')[1];
    const media =  await medias.filter(media => media.photographerId == idRequest);
   

    displayMedia(media);
}

initMedias();


/**
 * Factory function (fonction des données des photographes)
 * @param {*} data 
 * @returns - getUserCardDOM
 */
function photographerFactory(data) {
    const { name, id, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;
    
    /**
     * Fonction de la création des cartes des photographes
     * @returns 
     */
    
    const getUserCardDOM = () => `
                <article>
                    <a href= "photographer.html?${id}">
                        <img src="${picture}" alt="Photo de ${name}">
                    <a/>
                    <h2>${name}</h2>
                    <h3>${city}, ${country}</h3>
                    <p>${tagline}</p>
                    <span>${price}€/jour</span>
                    
                </article>`;
    
    return { name, id, picture, city, country, tagline, price, getUserCardDOM};
}

let firstname;
/**
 * Factory function (fonction des données des medias)
 * @param {*} data 
 * @returns - getUserCardDOM
 */
function mediaFactory(name, data) {
    const { id, photographerId, title, image, video, likes, date, price } = data;
    // firstname = name.split(' ')[0];
    firstname = ('');
    console.log(firstname);
    const picture = `assets/samplePhotos/Nabeel/${image}`;
    
    /**
     * Fonction de la création des cartes des photographes
     * @returns 
     */
    
    const getUserCardDOM = () => `
                <article>
                    <a href= "photographer.html?${photographerId}">
                        <img src="${picture}">
                    <a/>
                    <h2>${title}</h2>
                    <h3>${date}</h3>
                    
                    <span>${price}€/jour</span>
                    
                </article>`;
    
    return { id, photographerId, title, image, video, likes, date, price, getUserCardDOM};
}


// const produit = window.location.href.split('?')[1];
// console.log(produit);
// const produit =  window.location;
// console.log(produit);

// let searchParams = new URLSearchParams(window.location.search);
// console.log(searchParams.has('id'));