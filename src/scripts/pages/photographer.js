import { getPhotographers, getMedias } from '../utils/api';
import { mediaFactory } from '../factories/pagePhotographer/mediaFactoryCard';
import { photographerFactory } from '../factories/pagePhotographer/photographerFactory';
import   getCardHeader  from '../factories/pagePhotographer/photographerHeader';
import {  } from '../form';
import { openLightbox } from '../utils/lightbox';
import { numberLikes } from '../utils/likes';
import { menuSelect, selectMedia } from '../utils/sort';

/**
 * Fonction pour afficher les données des photographes
 * @param {*} photographers 
 */
async function displayData(photographers) {
    const photographersSection = document.querySelector('.photograph-header');

    photographers.forEach((photographer) => {
        photographerFactory(photographer);
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
 * function to display medias data
 * @param {*} medias 
 */
export async function displayMedia(medias) {
   
    const photographersSection = document.querySelector('.galleryPhotos');
    photographersSection.innerHTML='';
    
    let totalLikes = 0;
    
    medias.forEach((media) => {
        const photographerModel = mediaFactory(media);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.insertAdjacentHTML('beforeEnd', userCardDOM);

        totalLikes += media.likes;
        const  total_likes = document.querySelector('#total_likes');
        total_likes.innerHTML = totalLikes;
        
        const { id } = media;
        openLightbox(`media-${id}`, medias);
        
    });
    numberLikes();
}

/**
 * Datas medias
*/
export async function initMedias() {
    const  medias  = await getMedias();
   
    const idRequest = window.location.href.split('?')[1];
    const media =  await medias.filter(media => media.photographerId == idRequest);
   

    displayMedia(media);

    menuSelect.onchange = function () {
        selectMedia(media);
    };
}
initMedias();
