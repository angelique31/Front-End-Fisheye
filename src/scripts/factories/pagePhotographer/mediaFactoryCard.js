/**
 * Factory function (function data medias)
 * @param {*} data 
 * @returns - getUserCardDOM,  getUserCardLightbox
 */
 export function mediaFactory(data) {
    const { id, photographerId, title, image, video, likes, date, price } = data;
    
    const picture = `/src/assets/medias/${photographerId}/${image} `; 
    const videos = `/src/assets/medias/${photographerId}/${video} `; 

    /**
  Function card photographers 2nd page
  * @returns 
  */
     const getUserCardDOM = () => `
        <article>
            <div id="media-${id}">
                ${video? `<strong class="far fa-play-circle"></strong><video><source src="${videos}" type="video/mp4" title="video de ${title}" tabindex="0"></video>` 
                :
                `<img src="${picture}" tabindex="0" alt="Photo de ${title}" title="picture de ${title}" id=${id}>` }
            </div>
    
            <div class=title-likes>
                <h2>${title}</h2>
                <span title="number of like picture">${likes}</span>
                <span class=like>
                <strong class="fas fa-heart heart-fas" aria-label="likes" tabindex="0" aria-hidden="true"></strong>
                </span>
            </div>
        </article>`;

  /**
  * Function card lightbox
  * @returns 
  */           
    const getUserCardLightbox = () => `
            <div class="slide_hide">
                ${video? `<video controls="controls"><source src="${videos}" type="video/mp4" title="video de ${title}"></video>` 
                :
                `<img src="${picture}" alt="Photo de ${title}" title="picture de ${title}" id=${id}>` }
                <h3>${title}</h3>
            </div>`;
    return { id, photographerId, title, image, video, likes, date, price, getUserCardDOM, getUserCardLightbox };
}