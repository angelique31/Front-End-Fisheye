const contactBtn = document.querySelector('.contact_button');
const closeBtn = document.querySelector('.close');
const modalbg = document.querySelector('#contact_modal');
const main = document.querySelector('main');
const firstName = document.querySelector('#first');

// 
/**
 * open modale
 */
function launchModal() {
    main.setAttribute('aria-hidden', false);
    modalbg.setAttribute('aria-hidden', true);
    modalbg.style.display = 'block';
    firstName.focus();
}
// modalbg.focus()  

contactBtn.addEventListener('click', launchModal);

  
/**
   * close modale
   */
function closeModal() {
    modalbg.style.display = 'none';
}
  
closeBtn.addEventListener('click', closeModal);
  

/*********************************************** ***/

const form = document.querySelector('form');
const submitInput = form[form.length - 1];
const inputs = document.querySelectorAll(
    '#first, #last, #email, #message'
);


/**
 * 
 * @param {*} e - object event
 * @param {*} e.target.value - value input
 */
inputs.forEach((input) => {
    input.addEventListener('input', (e) => {
        // console.log(e.target.value);
        switch (e.target.id) {
        case 'first':
            firstChecker(e.target.value);
            break;
        case 'last':
            lastChecker(e.target.value);
            break;
        case 'email':
            emailChecker(e.target.value);
            break;
        case 'message':
            messageChecker(e.target.value);
            break;
        default:
            null;
        }
    });
});


/**
 * function firstname (first)
 * @param {*} value
 * @returns - true for the submit form
 */
const firstChecker = (value) => {
    const firstContainer = document.querySelector('.first-container');
    const errorDisplay = document.querySelector('.first-container > span');
    let isValid = false;
  
    if (value.length < 2) {
        firstContainer.classList.add('error');
        errorDisplay.textContent =
        'Veuillez entrer 2 caractères ou plus pour le champ du prénom.';
    } else {
        errorDisplay.textContent = '';
        isValid = true;
    }
    return isValid;
};

/**
 * function name (last)
 * @param {*} value
 * @returns - true for the submit form
 */
const lastChecker = (value) => {
    const lastContainer = document.querySelector('.last-container');
    const errorDisplay = document.querySelector('.last-container > span');
    let isValid = false;
  
    if (value.length < 2) {
        lastContainer.classList.add('error');
        errorDisplay.textContent =
        'Veuillez entrer 2 caractères ou plus pour le champ du nom.';
    } else {
        lastContainer.classList.remove('error');
        errorDisplay.textContent = '';
        isValid = true;
    }
    return isValid;
};
  
/**
   * function email
   * @param {*} value
   * @returns - true for the submit form
   */
const emailChecker = (value) => {
    const emailContainer = document.querySelector('.email-container');
    const errorDisplay = document.querySelector('.email-container > span');
    let isValid = false;
  
    if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
        emailContainer.classList.add('error');
        errorDisplay.textContent = 'Veuillez entrer une adresse mail valide.';
    } else {
        errorDisplay.textContent = '';
        isValid = true;
    }
    return isValid;
};

/**
 * function firstname (first)
 * @param {*} value
 * @returns - true for the submit form
 */
const messageChecker = (value) => {
    const firstContainer = document.querySelector('.message-container');
    const errorDisplay = document.querySelector('.message-container > span');
    let isValid = false;
  
    if (value.length < 10) {
        firstContainer.classList.add('error');
        errorDisplay.textContent =
        'Veuillez entrer un message avec un minimum de 10 caractères.';
    } else {
        errorDisplay.textContent = '';
        isValid = true;
    }
    return isValid;
};

/**
 * Verify form inputs before submission
 * @param {*} e - object event
 */
const onSubmit = (e) => {
    e.preventDefault();
  
    /**
     * Retrieve form input values
     * @param {*} inputs - array: tags from query selector
     * @returns - array: les data from query selector
     */
    const formValues = (inputs) => {
        let data = [];
    
        for (let i = 0; i < inputs.length; i++) {
            if (
                inputs[i].type === 'text' ||
                inputs[i].type === 'email' ||
                inputs[i].type === 'textarea'
            ) {
                data.push(inputs[i].value);
                
            }
        }
        return data;
    };
  
    /**
     * Retrieve form input values
     * @param {*} values - array: data from query selector
     * @returns - boolean: true if valid
     */
    const formIsValid = (values) => {
        /**
       * Tests the validity of each input
       * @type boolean
       */
        let validInputs = [];
       
        validInputs.push(firstChecker(values[0]));
        validInputs.push(lastChecker(values[1]));
        validInputs.push(emailChecker(values[2]));
        validInputs.push(messageChecker(values[3]));
        
        let isValid = true;
  
        for (let i = 0; i < validInputs.length; i++) {
            if (validInputs[i] === false) {
                isValid = false;
                break;
            }
        }
        return isValid;
    };
    
    /**
    * If valid
    */
    if (formIsValid(formValues(inputs))) {
        closeModal();
        console.table (formValues(inputs));
        form.querySelectorAll('.text-control').forEach(input => input.value = '');
        
    } else {
        launchModal();
    }
};

submitInput.addEventListener('click', (e) => onSubmit(e));
  

/**
 * Close modale form with Escape
 */
window.addEventListener('keyup', (e) => {
    closeModalKey(e);
});
  
function closeModalKey(e) {
    if ((modalbg.style.display = 'block' && e.key === 'Escape')) {
        closeModal();
    }
}

  