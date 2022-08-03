import { mediaFactory } from '../factories/pagePhotographer/mediaFactoryCard';
import { lightboxCard } from '../factories/pagePhotographer/lightboxCard';
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

function navModal(medias) {
    const next = document.getElementsByClassName('lightbox_next')[0];
    const prev = document.getElementsByClassName('lightbox_prev')[0];
    const numberSlide = medias.length;
    let count = 0;

    const showCard = (card) => {
      const lightbox = document.getElementsByClassName("slide_hide")[0];
      lightbox.innerHTML = card;
    }

    const getPosition = (medias) => {
        const lightbox = document.getElementsByClassName("slide_hide")[0];
        const currentId = lightbox.children[0].id;
        console.log(currentId)
        let mediaSelected = 0;
        for (let i = 0; i < medias.length; i++) {
            if (`${currentId}` === `${medias[i].id}`) {
                mediaSelected = i
                break;
            };
            // console.log(medias[i].id)
            
        }
        return mediaSelected;
        
    };

   
    const navNext = () => {
    
        count = getPosition(medias)   
        if (count < numberSlide -1) {
            count ++;
            
        } else {
            count = 0;
        }

        
        console.log('debug', medias, count, medias[count])
        showCard(lightboxCard(medias[count]));
    }
    
    const navPrev = () => {
        count = getPosition(medias)    
        if (count > 0) {
            count --;
        } else {
            count= medias.length -1;
        }
        console.log('debug', medias, count, medias[count])
        showCard(lightboxCard(medias[count]));
    }
    
    if (next && prev){
    next.addEventListener('click', navNext);
    prev.addEventListener('click', navPrev);
    }

    document.addEventListener('keyup', (e) =>{
        switch(e.key)
        {
            case "ArrowLeft" :
                navPrev(); 
                break; 
            case "ArrowRight": 
                navNext();
                break; 
            case "Escape" : 
                closeModal(); 
                break; 
            // case "Enter" :
            //     console.log("Enter")
            //     openModal();
            //     break;
        }
        console.log(e.key)
    })
    
}

/**
 *Generates an event depending on the media
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
        const filterMedia = medias.filter(media => `${media.photographerId}` === idRequest);
    
        let mediaSelected = 0;
        for (let i = 0; i < filterMedia.length; i++) {
            if (id === `${filterMedia[i].id}`) {
                mediaSelected = i
                break;
            };
            // console.log(filterMedia[i].id)
        }
        console.log("le media selectionné par le user est à la position", mediaSelected )
        
        

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
    if ((lightbox.style.display = 'none' && e.key === 'Escape')) {
        closeModal();
    }
}

// window.addEventListener('keyup', (e) => {
//     openModalKey(e);
// });
  
// function openModalKey(e) {
//     if ((lightbox.style.display = 'block' && e.key === 'Enter')) {
//         openModal();
//     }
// }


