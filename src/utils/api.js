// const url = 'https://github.com/OpenClassrooms-Student-Center/Front-End-Fisheye/blob/main/data/photographers.json';

/**
 * Function to retrieve data from photographers
 * @returns data photographers
 */
export async function getPhotographers() {
    return fetch('data/photographers.json' , {mode: 'cors'})
        .then((res) => {
            return res.json();
        })
        .then((datas) => {
            return datas;
        }); 

}

/**
 * Function to retrieve data from medias
 * @returns data media
 */
export async function getMedias() {
    return fetch ('data/photographers.json' , {mode: 'cors'})
        .then((res) => {
            return res.json();
        })
        .then((datas) => {
            return datas.media;
        }); 
}
