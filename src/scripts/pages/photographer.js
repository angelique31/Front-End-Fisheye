import { getPhotographers, getMedias } from '../utils/api';
import { mediaFactory } from '../factories/mediaFactoryCard';
import { photographerFactory } from '../factories/photographerFactory';
import   getCardHeader  from '../factories/photographerHeader';
import {  } from "../form";
import {closeModal, openModal } from "../utils/lightbox";
import { numberLikes } from '../utils/likes';
import { menuSelect, displayDataMedia } from '../utils/sort';

/**
 * Fonction pour afficher les données des photographes
 * @param {*} photographers 
 */
async function displayData(photographers) {
    const photographersSection = document.querySelector('.photograph-header');

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDomHeader = getCardHeader (photographer);
        
        photographersSection.insertAdjacentHTML('beforeEnd', userCardDomHeader);

    });
}

/**
 * Data photographers
 */
async function init() {
    const { photographers } = await getPhotographers();
   
    const idRequest = window.location.href.split('?')[1];
    const photographer = await photographers.filter(photographer => photographer.id == idRequest);

    displayData(photographer);
}
init();



/*********************************************************/ 

/**
 * Fonction pour afficher les données des medias
 * @param {*} medias 
 */
export async function displayMedia(medias) {
    const photographersSection = document.querySelector('.galleryPhotos');
    photographersSection.innerHTML="";
    const lightbox = document.querySelector('.lightbox_container')
    let totalLikes = 0;
    
    medias.forEach((media) => {
        const photographerModel = mediaFactory(media);
        const userCardDOM = photographerModel.getUserCardDOM();
        const userCardLightbox = photographerModel.getUserCardLightbox();

        photographersSection.insertAdjacentHTML('beforeEnd', userCardDOM);

        lightbox.insertAdjacentHTML('beforeEnd', userCardLightbox);

        totalLikes += media.likes;

        const  total_likes = document.querySelector('#total_likes')
        total_likes.innerHTML = totalLikes;

    });
    numberLikes();
}



export async function initMedias() {
    const  medias  = await getMedias();
   
    const idRequest = window.location.href.split('?')[1];
    const media =  await medias.filter(media => media.photographerId == idRequest);
    // const media =  await medias.filter(
    //     (media) => media.photographerId == idRequest,);

    displayMedia(media);

    menuSelect.onchange = function () {
        displayDataMedia(media);
      };
}
initMedias();

