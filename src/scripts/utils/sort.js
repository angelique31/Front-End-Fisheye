import { displayMedia } from '../pages/photographer';
export const menuSelect = document.querySelector(".menuSelect");

const sorted = document.querySelector("#sorted");
sorted.addEventListener('click',(e) => {
  sorted.classList.toggle("actived")
})

export function displayDataMedia(media){
    let newArrMedia;
    switch (menuSelect.value) {
        case "pop":
          newArrMedia = media.sort((a, b) => {
            return b.likes - a.likes;
          });
          displayMedia(newArrMedia);
          break;
         
        case "date":
          newArrMedia = media.sort((a, b) =>{
            return new Date(b.date) - new Date(a.date);
          });
          displayMedia(newArrMedia);
          break;
    
        case "titre":
          newArrMedia = media.sort((a, b) => {
            return a.title.localeCompare(b.title);
          });
          displayMedia(newArrMedia);
          break;
      }
  console.log(newArrMedia)    
}

