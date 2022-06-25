/**
 * Factory function (function data medias)
 * @param {*} data 
 * @returns - getUserCardDOM,  getUserCardLightbox
 */
 export function mediaFactory(data) {
    const { id, photographerId, title, image, video, likes, date, price } = data;
    
    const picture = `../assets/medias/${photographerId}/${image} `; // pourquoi 'url a été changé et fonctionnait plus?
    const videos = `../assets/medias/${photographerId}/${video} `; // pourquoi 'url a été changé et fonctionnait plus?

    /**
  Function card photographers 2nd page
  * @returns 
  */
     const getUserCardDOM = () => `
        <article>
            <div id="media-${id}">
                ${video? `<video><source src="${videos}" type="video/mp4" title="video de ${title}"></video>` 
                :
                `<img src="${picture}" tabindex="1" alt="Photo de ${title}" title="picture de ${title}" id=${id}>` }

            </div>
            <div class=title-likes>
                <h2>${title}</h2>
                <span title="number of like picture">${likes}</span>
                <span class=like>
                <strong><i class="fas fa-heart heart-fas" aria-label="likes" tabindex="1" aria-hidden="true"></i> </strong>
                </span>
            </div>
        </article>`;

  /**
  * Function card lightbox
  * @returns 
  */           
    const getUserCardLightbox = () => `
            <div>
                ${video? `<video controls="controls"><source src="${videos}" type="video/mp4" title="video de ${title}"></video>` 
                :
                `<img src="${picture}" alt="Photo de ${title}" title="picture de ${title}" id=${id}>` }

            </div>
            <h3>${title}</h3>`;

    return { id, photographerId, title, image, video, likes, date, price, getUserCardDOM, getUserCardLightbox };
}