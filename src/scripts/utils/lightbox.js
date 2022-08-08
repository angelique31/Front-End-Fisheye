import { mediaFactory } from '../factories/pagePhotographer/mediaFactoryCard';
import { getNavLightbox, navNext, navPrev } from './navLightbox';

// Elements HTML utilisés au cours du module

const lightboxClose = document.querySelector('.lightbox_close');
const lightboxContainer = document.querySelector('.lightbox_container');
const lightbox = document.getElementById('contact_lightbox');

// Gestion de la modale

/**
 * Ferme la modale en utilisant le CSS
 */
function closeModal() {
    lightbox.style.display = 'none';
    const lightboxContainer = document.querySelector('.lightbox_container');
    lightboxContainer.innerHTML = "";
}

/**
 * Ouvre la modale en utilisant le CSS
 */
function openModal() {
    const lightbox = document.getElementById('contact_lightbox');

    if (lightbox) {
        lightbox.style.display = 'block'; 
    }
    lightbox.focus();
}

// Gestion de la lightbox

/**
 * Retire les listeners de la lightbox avant de fermer la modale
 */
function closeLightbox() {
    const buttons = getNavLightbox();

    if (buttons.nextButton && buttons.prevButton) {
        // Retire tout les listeners par un clone de lui même
        buttons.nextButton.replaceWith(buttons.nextButton.cloneNode(true));
        buttons.prevButton.replaceWith(buttons.prevButton.cloneNode(true));
    }
    closeModal();
}  

/**
 * Ajoute les listeners de la lightbox à l'ouverture de la modale
 * @param {array} medias 
 */
function addNavLightbox(medias) {
    const buttons = getNavLightbox();

    if (buttons.nextButton && buttons.prevButton) {
        buttons.nextButton.addEventListener('click', (e) => { navNext(medias)});
        buttons.prevButton.addEventListener('click', (e) => { navPrev(medias)});
    }

    document.addEventListener('keydown', (e) =>{
        switch(e.key)
        {
            case "ArrowLeft" :
                (medias) => { navPrev(medias)}; 
                break; 
            case "ArrowRight": 
                (medias) => { navNext(medias)};
                break;
        }
    })
}



/**
 * Ouvre la lightbox
 * Ouvre d'abord la modale puis insère le media
 * Ajoute ensuite les listeners liés à la lightbox
 * @param {unknown} id 
 * @param {array} medias 
 */
 export function openLightbox(id, medias) {
    const component = document.getElementById(id);
    
    const displayLightBox = () => {        
        const idRequest = window.location.href.split('?')[1];
        const mediaArray = component.id.split('-');
        const id = mediaArray[1];
        
        const filterMedia = medias.filter(media => `${media.photographerId}` === idRequest);
    
        let mediaSelected = 0;
        for (let i = 0; i < filterMedia.length; i++) {
            if (id === `${filterMedia[i].id}`) {
                mediaSelected = i
                break;
            };
        }
        

        const photographerModel = mediaFactory(medias[mediaSelected]);
        console.log(photographerModel)
        const userCardLightbox = photographerModel.getUserCardLightbox();
        lightboxContainer.insertAdjacentHTML('afterbegin', userCardLightbox);
        
        openModal();
        addNavLightbox(medias, mediaSelected);
        lightboxClose.addEventListener('click', closeLightbox);
    }; 

    if (component) {
        component.addEventListener('click', displayLightBox);
    }
}



/**
 * KeyboardEvent
 */

 document.addEventListener('keydown', (e) => {
    closeModalKey(e);
});

  
function closeModalKey(e) {
    if ((lightbox.style.display = 'none' && e.key === 'Escape')) {
        closeLightbox();
    }
}

// document.addEventListener('keydown', (e) => {
//     openModalKey(e);
// });
  
// function openModalKey(e) {
//     if ((lightbox.style.display = 'block' && e.key === 'Enter')) {
//         openModal();
//     }
// }


