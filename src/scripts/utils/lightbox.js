import { mediaFactory } from '../factories/pagePhotographer/mediaFactoryCard';

const lightboxClose = document.querySelector('.lightbox_close');
const lightboxContainer = document.querySelector('.lightbox_container');
const lightbox = document.getElementById('contact_lightbox');


function closeModal() {
    lightbox.style.display = 'none'; 
    
}   

export function openModal() {
    const lightbox = document.getElementById('contact_lightbox');

    if (lightbox) {
        lightbox.style.display = 'block'; 
    }
}
/**
 * Génère un event en fonction du média
 * @param {string} id 
 */
 export function openModalById(id, medias) {
    const component = document.getElementById(id);
    // console.log(component)
    const displayLightBox = () => {
        openModal();
        const idRequest = window.location.href.split('?')[1];
        const mediaArray = component.id.split('-');
        const id = mediaArray[1];
        // console.log(id)
        const filterMedia = medias.filter(media => `${media.photographerId}` === idRequest);
        // console.log(filterMedia)
        let mediaSelected = 0;
        for (let i = 0; i < filterMedia.length; i++) {
            if (id === `${filterMedia[i].id}`) {
                mediaSelected = i
                break;
            };
            // console.log(filterMedia[i])
        }
        console.log("le media selectionné par le user est à la position", mediaSelected )
        
        
        const photographerModel = mediaFactory(medias[mediaSelected]);
        console.log(photographerModel)
        const userCardLightbox = photographerModel.getUserCardLightbox();
        console.log(userCardLightbox)
        lightboxContainer.insertAdjacentHTML('afterbegin', userCardLightbox);
        
        
    };

    if (component) {
        component.addEventListener('click', displayLightBox);
    }
       
}


 lightboxClose.addEventListener('click', closeModal);
 
