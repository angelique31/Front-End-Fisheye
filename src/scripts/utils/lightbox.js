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
    
//     // je récupere l'image qui à été cliquée en retriant "mediasOfPhotographer" par l'id de l'image
//     let displayimg = media.find(media => media.id === id)
    
   
//     // id de l'image
//     let imgId = displayimg.id
//     console.log(imgId)

//     // titre du media
//     let title = displayimg.title
//     console.log(title)

//     // titre de l'image
//     let image = displayimg.image
//     console.log(image)

//     // titre de la video
//     let video = displayimg.video
//     console.log(video)

//     // nom du photographe
//     let name = onePhotographer.name
//     console.log(name)


//     // Je récupere le nom du photographe et le nom de l'image pour créer le chemin
//     const img = `assets/photographers/${name}/${image}`;
//     const vid = `assets/photographers/${name}/${video}`;

//     // Fonction de la création des cartes des photographes
//     const getLightBox = () => {
//         if(video !== undefined)
//         {
//             return `<video class="w-100" src="${vid}" type="video/mp4" controls data-id="${imgId}"></video>`
//         }
//         else
//         {
//             return `<img class=""src="${img}" alt="Photo de ${name}" data-id="${imgId}">`
//         }
//     }
//     return getLightBox;

//     // const lighboxDOM = getLightBox()

//     // // j'insere le bloc html image ou vidéo dans la div d ela lightbox
//     // lightboxContainer.insertAdjacentHTML('beforeEnd', lighboxDOM);
// }
// displayLightBox()


    
 }


 lightboxClose.addEventListener('click', closeModal);
 
