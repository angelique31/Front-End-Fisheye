import { lightboxCard } from '../factories/pagePhotographer/lightboxCard';

/**
 * Récupère la position de l'image actuelle parmi la liste des images
 * @param {array} medias 
 * @returns - integer
 */
const getPosition = (medias) => {
    const lightbox = document.getElementsByClassName("slide_hide")[0];
    const currentId = lightbox.children[0].id;
    
    let mediaSelected = 0;
    for (let i = 0; i < medias.length; i++) {
        if (`${currentId}` === `${medias[i].id}`) {
            mediaSelected = i
            break;
        };
        
    }
    return mediaSelected;
};

/**
 * Mets à jour le DOM de la lightbox
 * @param {string} card 
 */
 const updateLightbox = (card) => {
    const lightbox = document.getElementsByClassName("slide_hide")[0];
    lightbox.innerHTML = card;
}

/**
 * Retourne les tags html des boutons de navigation de la lightbox
 * @returns - object of html element
 */
export const getNavLightbox = () => {
    const nextButton = document.getElementsByClassName('lightbox_next')[0];
    const prevButton = document.getElementsByClassName('lightbox_prev')[0];

    return { nextButton, prevButton };
};


/**
 * Permet la mise à jour vers le media suivant
 * @param {array} medias 
 */
export const navNext = (medias) => {
    let count = getPosition(medias);

    if (count < medias.length - 1) {
        count++;

    } else {
        count = 0;
    }
    updateLightbox(lightboxCard(medias[count]));
    
};

/**
 * Permet la mise à jour vers le média précédent
 * @param {array} medias 
 */
export const navPrev = (medias) => {
    let count = getPosition(medias);

    if (count > 0) {
        count--;
    } else {
        count = medias.length - 1;
    }
    updateLightbox(lightboxCard(medias[count]));
};