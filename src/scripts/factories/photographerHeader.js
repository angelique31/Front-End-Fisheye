/**
* Fonction de la création des cartes des photographes 2ème page
* @returns photographer card
*/
    
export default (photographer) => {
    const {name, portrait, city, country, tagline,} = photographer;
    const picture = `/src/assets/photographers/${portrait}`;

    return `
        <article>
            <div class=info>
                <h2>${name}</h2>
                <h3>${city}, ${country}</h3>
                <p>${tagline}</p>
            </div>
                <img src="${picture}" alt="${name}"
            </article>`
 };