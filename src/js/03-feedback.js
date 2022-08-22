const form = document.querySelector('.feedback-form');
const email = document.querySelector('[type="email"]');
const message = document.querySelector('[name="message"]');

fillData();

form.addEventListener('input', onFormInput);

function onFormInput(evt) {
  evt.preventDefault();

  const { email, message } = evt.target.form.elements;

  const data = {
    email: email.value,
    message: message.value,
  };

  console.log(JSON.stringify(data));
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

function fillData() {
  const savedData = localStorage.getItem('feedback-form-state');
  const parsedData = JSON.parse(savedData);
  console.dir(parsedData);
  console.log(savedData);
  if (parsedData) {
    email.value = parsedData.email;
    message.value = parsedData.message;
  }
}
