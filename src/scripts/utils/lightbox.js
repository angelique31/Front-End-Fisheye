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
    
    const displayLightBox = () => {
        
        openModal();
        const idRequest = window.location.href.split('?')[1];
        const mediaArray = component.id.split('-');
        const id = mediaArray[1];
        // console.log(id, idRequest, medias);
        
        const test = medias.filter(media => `${media.photographerId}` === idRequest);
        // console.log(test,'resultat test');
        // console.log('type de test',typeof medias[0].photographerId)
        // console.log('type2 de test',typeof id)
        let mediaSelected = 0;
        for (let i = 0; i < test.length; i++) {
            if (id === `${test[i].id}`) {
                mediaSelected = i
                // console.log('find');
                break;
                
            };
            // console.log(id, test[i], mediaSelected);
            
        }
        console.log("le media selectionné par le user est à la position", mediaSelected,test )

    };

    if (component) {
        component.addEventListener('click', displayLightBox);
    }
    
     
    


   
}


 lightboxClose.addEventListener('click', closeModal);
 
