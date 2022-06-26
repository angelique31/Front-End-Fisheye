/**
* Fonction de la création des cartes des photographes 2ème page
* @returns photographer card
*/
    
export default (photographer) => {
    const {name, id, portrait, city, country, tagline, } = photographer;
    const picture = `/src/assets/photographers/${portrait}`;

    return `
        <article>
            <div class=info>
                <h2>${name}</h2>
                <h3>${city}, ${country}</h3>
                <p>${tagline}</p>
            </div>
                <a href= "photographer.html?${id}">
                    <img src="${picture}" alt="${name}">
                <a/>
        
        </article>`
 };
