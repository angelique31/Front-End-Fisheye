import {getPhotographers} from '../utils/api';
import getCard from '../factories/homePhotographer';
import '../../../styles/style.css';


/**
 * Function display data photographers
 * @param {*} photographers 
 */
async function displayData(photographers) {
    const photographersSection = document.querySelector('.photographer_section');

    photographers.forEach((photographer) => {
        const userCardDOM = getCard (photographer);
        photographersSection.insertAdjacentHTML('beforeEnd', userCardDOM);
    });
}

/**
 * Data photographers
 */
async function init() {
    const { photographers } = await getPhotographers();
   
    displayData(photographers);
}
init();

