export const lightboxCard = (media) => {
    const { video, image, title, id, photographerId } = media;
    const picture = `assets/medias/${photographerId}/${image} `; 
    const videos = `assets/medias/${photographerId}/${video} `; 

    return `
        ${video? `<video controls="controls" id=${id}><source src="${videos}" type="video/mp4" title="video de ${title}"></video>` 
        :
        `<img src="${picture}" tabindex="0" alt="Photo de ${title}" title="picture de ${title}" id=${id}>` }
        <h3 tabindex="0">${title}</h3>`;
};