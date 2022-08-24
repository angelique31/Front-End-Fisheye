/**
* Function of the creation of the cards of the photographers 1st page
* @returns photographer card
*/
    
export default (photographer) => {
    const {name, id, portrait, city, country, tagline, price } = photographer;
    const picture = `assets/photographers/${portrait}`;

    return `
    <article>
        <a href= "photographer.html?${id}">
            <img src="${picture}" alt="picture ${name}" title="picture de photographer">
            <h2>${name}</h2>
        </a>
        <div class=info tabindex="0" >
            <h3>${city}, ${country}</h3>
            <p>${tagline}</p>
            <span>${price}€/jour</span>
        </div>
    </article>`;
};
