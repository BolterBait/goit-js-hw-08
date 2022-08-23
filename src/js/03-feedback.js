import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('[type="email"]');
const message = document.querySelector('[name="message"]');
const savedData = localStorage.getItem('STORAGE_KEY');
const parsedData = JSON.parse(savedData);
const STORAGE_KEY = 'feedback-form-state';
fillData();

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onSubmitClick);

function onFormInput(evt) {
  const { email, message } = evt.target.form.elements;

  const data = {
    email: email.value,
    message: message.value,
  };

  localStorage.setItem('STORAGE_KEY', JSON.stringify(data));
  console.log(message.value);
}

function fillData() {
  if (parsedData) {
    email.value = parsedData.email;
    message.value = parsedData.message;
  }
}

function onSubmitClick(evt) {
  evt.preventDefault();
  if (message.value !== '' && email.value !== '') {
    console.log({
      email: email.value,
      message: message.value,
    });
    localStorage.removeItem('STORAGE_KEY');
    evt.target.reset();
  }
}
