/**
* Fonction de la création des cartes des photographes 1ère page
* @returns photographer card
*/
    
 export default (photographer) => {
    const {name, id, portrait, city, country, tagline, price } = photographer;
    const picture = `/src/assets/photographers/${portrait}`;

    return `
    <article>
        <a href= "photographer.html?${id}">
            <img src="${picture}" alt="${name}" title="picture de photographer">
            <h2>${name}</h2>
        </a>
        <div class=info>
            <h3>${city}, ${country}</h3>
            <p>${tagline}</p>
            <span>${price}€/jour</span>
        </div>
    </article>`
 };
