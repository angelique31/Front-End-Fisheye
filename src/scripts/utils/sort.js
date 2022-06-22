import { displayMedia } from '../pages/photographer';
export const menuSelect = document.querySelector(".menuSelect");
    
export function displayDataMedia(medias){
    // console.log(menuDeroulant.value);
    let newArrMedia;
    switch (menuSelect.value) {
        case "pop":
          newArrMedia = medias.sort( (a, b) => {
            return b.likes - a.likes;
          });
          displayMedia(newArrMedia);
          break;
          
        case "date":
          newArrMedia = medias.sort( (a, b) =>{
            return new Date(b.date) - new Date(a.date);
          });
          displayMedia(newArrMedia);
          break;
    
        case "titre":
          newArrMedia = medias.sort((a, b) => {
            return a.title.localeCompare(b.title);
          });
          displayMedia(newArrMedia);
          break;
      }
}