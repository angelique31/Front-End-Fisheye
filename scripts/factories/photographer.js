// function photographerFactory(data) {
//     const { name, portrait, city, country, tagline, price } = data;

//     const picture = `assets/photographers/${portrait}`;
    
//     /**
//      * Fonction de la création des cartes des photographes
//      * @returns - article
//      */
//     function getUserCardDOM() {
//         const article = document.createElement('article');
//         const img = document.createElement('img');
//         img.setAttribute('src', picture);
//         const h2 = document.createElement('h2');
//         h2.textContent = name;
//         article.appendChild(img);
//         article.appendChild(h2);

//         let h3 = document.createElement ('h3');
//         h3.textContent = city;
//         article.appendChild(h3);

//         h3 = document.createElement ('h3');
//         h3.textContent = country;
//         article.appendChild(h3);

//         const p = document.createElement ('p');
//         p.textContent = tagline;
//         article.appendChild(p);

//         const span = document.createElement ('span');
//         span.textContent = price;
//         article.appendChild(span);

//         return article;
        
//     }
//     return { name, picture, city, country, tagline, price, getUserCardDOM };
// }