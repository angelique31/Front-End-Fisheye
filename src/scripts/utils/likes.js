export function numberLikes() {
    const likes = document.querySelectorAll('.like'); 
    
    likes.forEach((e) => {
        e.addEventListener('click', function () {
            const numberLike = e.parentElement.children[1];
            numberLike.textContent++;
            total_likes.textContent++; // j'ajoute 1 au total des totalLikes du footer
           
        });
    });

    likes.forEach((e) => {
        e.addEventListener('keypress', function () {
            const numberLike = e.parentElement.children[1];
            numberLike.textContent++;
            total_likes.textContent++; 
           
        });
    });
}


   
