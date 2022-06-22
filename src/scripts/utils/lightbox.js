
const lightboxClose = document.querySelector('.lightbox_close');
const lightboxAppear = document.querySelector('.lightbox');
  
/**
   * close modale
   */
export function closeModal() {
    lightboxAppear.style.display = 'none'; 
}
  
lightboxClose.addEventListener('click', closeModal);


export function openModal() {
    lightboxAppear.style.display = 'block'; 
}


/****************images lightbox**************/


window.onload = () => {
    const lightbox = document.querySelector(".lightbox");
    const images = document.querySelectorAll(".lightbox img")
    console.log(images)
}
