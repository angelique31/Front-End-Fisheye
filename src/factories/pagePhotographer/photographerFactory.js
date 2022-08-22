/**
 * Factory function (fonction des données des photographes)
 * @param {*} data 
 * @returns - getUserCardDOM
 */
export function photographerFactory(data) {
    const { name, id, portrait, city, country, tagline, price } = data;

    const priceDay = document.querySelector('.price-day');
    priceDay.innerHTML = `${price} €/jour`;

    const contact = document.querySelector('.contact');
    contact.innerHTML = `Contactez-moi ${name} `;

    return { name, id, portrait, city, country, tagline, price};
}
