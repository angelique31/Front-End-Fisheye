export const lightboxCard = (media) => {
    const { video, image, title, id, photographerId } = media;
    const picture = `/src/assets/medias/${photographerId}/${image} `; 
    const videos = `/src/assets/medias/${photographerId}/${video} `; 

    return `
        ${video? `<video controls="controls" id=${id}><source src="${videos}" type="video/mp4" title="video de ${title}"></video>` 
        :
        `<img src="${picture}" alt="Photo de ${title}" title="picture de ${title}" id=${id}>` }
        <h3>${title}</h3>`
};