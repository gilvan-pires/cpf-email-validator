import './style.css';

import validator from 'validator';

const inputedText = document.querySelector('#infoToBeEvaluated');
const selectedEmailOrCpf = document.querySelector('#infoTypeOptions');
const displayMsg = document.querySelector('h3');
const validarBtn = document.querySelector('button');

validarBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const optionsInSelect = {
    CPF: validator.isTaxID(inputedText.value, 'pt-BR'),
    email: validator.isEmail(inputedText.value),
  };
  if (optionsInSelect[selectedEmailOrCpf.value]) {
    displayMsg.innerHTML = `O ${selectedEmailOrCpf.value} é válido.`;
  }
  if (!optionsInSelect[selectedEmailOrCpf.value]) {
    displayMsg.innerHTML = `O ${selectedEmailOrCpf.value} é inválido.`;
  }
});
