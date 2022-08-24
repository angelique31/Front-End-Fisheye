/**
* Function cards of the photographers 2nd page
* @returns photographer card
*/
    
export default (photographer) => {
    const {name, portrait, city, country, tagline,} = photographer;
    const picture = `assets/photographers/${portrait}`;

    return `
        <article>
            <div class=info tabindex="2">
                <h1>${name}</h1>
                <h2>${city}, ${country}</h2>
                <p>${tagline}</p>
            </div>
                <img src="${picture}" alt="${name}">
            </article>`;
};
