import { mediaFactory } from '../factories/pagePhotographer/mediaFactoryCard';
import { getNavLightbox, navNext, navPrev } from './navLightbox';

const lightboxClose = document.querySelector('.lightbox_close');
const lightboxContainer = document.querySelector('.lightbox_container');
const lightbox = document.getElementById('contact_lightbox');

/**
 * Open modale
 */
function openModal() {
    const lightbox = document.getElementById('contact_lightbox');

    if (lightbox) {
        lightbox.style.display = 'block'; 
    }
    lightbox.focus();
}

/**
 * Close modal
 */
 function closeModal() {
    lightbox.style.display = 'none';
    const lightboxContainer = document.querySelector('.lightbox_container');
    lightboxContainer.innerHTML = "";
}

/**
 * Remove lightbox listeners before closing the modal
 */
function closeLightbox() {
    const buttons = getNavLightbox();

    if (buttons.nextButton && buttons.prevButton) {
        buttons.nextButton.replaceWith(buttons.nextButton.cloneNode(true));
        buttons.prevButton.replaceWith(buttons.prevButton.cloneNode(true));
    }
    closeModal();
}  

/**
 * Add lightbox listeners when opening the modal
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
 * Open the lightbox
 * First open the modal then insert the media
 * Then add the listeners 
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


