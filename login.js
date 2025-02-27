const input = document.querySelector('.login_input');
const button = document.querySelector('.bt_login');
const form = document.querySelector('.login_form');

const validateInput = ({target}) =>{
    if (target.value.length > 1){
        button.removeAttribute('disabled');
        return;
    }
    button.setAttribute('disabled','');
}

const handleSubmit = (event) =>{
    event.preventDefault();

    localStorage.setItem('player',input.value);
    window.location = 'jogo.html';
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);
