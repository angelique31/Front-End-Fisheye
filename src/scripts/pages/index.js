import {getPhotographers} from '../utils/api';
import getCard from '../factories/photographersPageDom';
import '../../../styles/style.css';


/**
 * Fonction pour afficher les données
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

