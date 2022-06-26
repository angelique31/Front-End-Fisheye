import { displayMedia, initMedias } from "../pages/photographer";
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
 export function openModalById(id) {
    const media = document.getElementById(id);
    
    if (media) {
        media.addEventListener('click', openModal);
    }
     // affichage du contenu de la lightbox
//     function displayLightBox() {
//     // const initMedia = initMedias(media);
//     // console.log(initMedia);
//     // je récupere l'image qui à été cliquée en retriant "media" par l'id de l'image
//     let displayimg = media.find(media => media.id === id);
    
//    }
//     displayLightBox()
}


 lightboxClose.addEventListener('click', closeModal);
 
