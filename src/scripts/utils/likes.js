export function numberLikes() {
    const likes = document.querySelectorAll('.like'); 
    
    likes.forEach((e) => {
        e.addEventListener('click', function () {
            const numberLike = e.parentElement.children[1];
            
            if (numberLike.classList.contains("liked")) { 
                numberLike.textContent--;
                numberLike.classList.remove("liked");
                total_likes.textContent--;
              } else {
                numberLike.textContent++; 
                numberLike.classList.add("liked");
                total_likes.textContent++;
              }
        });
    });

    likes.forEach((e) => {
        e.addEventListener('keypress', function () {
            const numberLike = e.parentElement.children[1];
            if (numberLike.classList.contains("liked")) { 
                numberLike.textContent--;
                numberLike.classList.remove("liked");
                total_likes.textContent--;
              } else {
                numberLike.textContent++; 
                numberLike.classList.add("liked");
                total_likes.textContent++;
              } 
           
        });
    });
}


   
