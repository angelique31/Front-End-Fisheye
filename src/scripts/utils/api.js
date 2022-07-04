/**
 * Fonction pour récupérer les données des photographes
 * @returns 
 */
 export async function getPhotographers() {
    return fetch ('../../data/photographers.json')
        .then((res) => {
            return res.json();
        })
        .then((datas) => {
            // console.log(datas);
            return datas;
        }); 

}

/**
 * Fonction pour récupérer les données des medias
 * @returns media
 */
 export async function getMedias() {
    return fetch ('../../data/photographers.json')
        .then((res) => {
            return res.json();
        })
        .then((datas) => {
            //  console.log(datas.media);
            return datas.media;
        }); 
}

