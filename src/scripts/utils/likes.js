export function numberLikes() {
    const likes = document.querySelectorAll('.like'); 
    
    likes.forEach((e) => {
        e.addEventListener('click', function () {
            const numberLike = e.parentElement.children[1];
            numberLike.textContent++;
            
            total_likes.textContent++;
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


   
