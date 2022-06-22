import { openModal } from "../utils/lightbox";
/**
 * Factory function (fonction des données des medias)
 * @param {*} data 
 * @returns - getUserCardDOM
 */
 export function mediaFactory(data) {
    const { id, photographerId, title, image, video, likes, date, price } = data;
    
    const picture = `../assets/medias/${photographerId}/${image} `;
   
    const videos = `../assets/medias/${photographerId}/${video} `;
    
    
    /**
     * Fonction de la création des cartes des photographes 2e page
     * @returns 
     */
    const getUserCardDOM = () => `
                <article>
                    <a href= "photographer.html?${photographerId}">
                    ${video? `<video><source src="${videos}" type="video/mp4" title="video de ${title}"></video>` 
                    :
                        `<img src="${picture}" tabindex="1" alt="Photo de ${title}" title="picture de ${title}" id=${id}>` }
 
                    </a>
                    <div class=title-likes>
                        <h2>${title}</h2>
                        <span title="number of like picture">${likes}</span>
                        <span class=like>
                            <i class="fas fa-heart heart-fas" aria-label="likes" tabindex="1" aria-hidden="true"></i>
                        </span>
                    </div>
                </article>`;

                
    const getUserCardLightbox = () => `
                <div onclick="openModal()">
                    ${video? `<video controls="controls"><source src="${videos}" type="video/mp4" title="video de ${title}"></video>` 
                    :
                        `<img src="${picture}" alt="Photo de ${title}" title="picture de ${title}" id=${id}>` }

                </div>
                    <h2>${title}</h2>
    `;
    return { id, photographerId, title, image, video, likes, date, price, getUserCardDOM, getUserCardLightbox };
}
