import { mediaFactory } from '../factories/pagePhotographer/mediaFactoryCard';

const lightboxClose = document.querySelector('.lightbox_close');
const lightboxContainer = document.querySelector('.lightbox_container');
const lightbox = document.getElementById('contact_lightbox');


function closeModal() {
    lightbox.style.display = 'none';
    
    const lightboxContainer = document.querySelector('.lightbox_container');
    
    lightboxContainer.innerHTML = "";
}   

export function openModal() {
    const lightbox = document.getElementById('contact_lightbox');

    if (lightbox) {
        lightbox.style.display = 'block'; 
    }
}

function navModal(medias, position) {
    
    const next = document.getElementsByClassName('lightbox_next')[0];
    const prev = document.getElementsByClassName('lightbox_prev')[0];
    

    const navTo = (medias, position, type) => {
        console.log(medias, position, type)
    }

    const navNext = () => {
        navTo (medias, position, 'next')
       
    }
    
    
    const navPrev = () => {
        navTo (medias, position, 'prev')
       
    }
    
    
    if (next && prev){
    next.addEventListener('click', navNext);
    prev.addEventListener('click', navPrev);
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
        // console.log(medias)
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
            // console.log(filterMedia[i].id)
        }
        console.log("le media selectionné par le user est à la position", mediaSelected )
        // console.log(mediaSelected)
        

        const photographerModel = mediaFactory(medias[mediaSelected]);
        // console.log(photographerModel)
        const userCardLightbox = photographerModel.getUserCardLightbox();
        // console.log(userCardLightbox)
        lightboxContainer.insertAdjacentHTML('afterbegin', userCardLightbox);
        
        
        
        navModal(medias, mediaSelected)
    }; 

    if (component) {
        component.addEventListener('click', displayLightBox);
    }
}
   
lightboxClose.addEventListener('click', closeModal);




/**
 * Close modale form with Escape
 */
 window.addEventListener('keyup', (e) => {
    closeModalKey(e);
});
  
function closeModalKey(e) {
    if ((lightbox.style.display = 'block' && e.key === 'Escape')) {
        closeModal();
    }
}


