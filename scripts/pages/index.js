/**
 * Fonction pour récupérer les données
 * @returns 
 */
async function getPhotographers() {
    return fetch ('data/photographers.json')
        .then((res) => {
            return res.json();
        })
        .then((datas) => {
            // console.log(datas);
            return datas;
        });
    
}

/**
 * Fonction pour afficher les données
 * @param {*} photographers 
 */
async function displayData(photographers) {
    const photographersSection = document.querySelector('.photographer_section');

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        // console.log(userCardDOM);
        photographersSection.appendChild(userCardDOM);
    });
}

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    console.log(photographers);
    
    displayData(photographers);
}

init();

/**
 * Factory function (fonction des données des photographes)
 * @param {*} data 
 * @returns - getUserCardDOM
 */
function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;
    
    /**
     * Fonction de la création des cartes des photographes
     * @returns - article
     */
    function getUserCardDOM() {
        const article = document.createElement('article');
        const img = document.createElement('img');
        img.setAttribute('src', picture,);
        img.setAttribute('alt', `Photo de ${name},`);
        const h2 = document.createElement('h2');
        h2.textContent = name;
        article.appendChild(img);
        article.appendChild(h2);

        let h3 = document.createElement ('h3');
        h3.textContent = `${city}, ${country}`; 
        article.appendChild(h3);


        const p = document.createElement ('p');
        p.textContent = tagline;
        article.appendChild(p);

        const span = document.createElement ('span');
        span.textContent = `${price}€/jour`;
        article.appendChild(span);

        return article;
        
    }
    return { name, picture, city, country, tagline, price, getUserCardDOM };
}



    