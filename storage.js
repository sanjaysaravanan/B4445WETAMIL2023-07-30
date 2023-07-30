const ulElement = document.querySelector('ul');

const addToStorage = () => {

  const inpElement = document.querySelector('input');

  const value = inpElement.value;

  const existingVals = localStorage.getItem('val') ? JSON.parse(localStorage.getItem('val')) : [];
  const newArr = [...existingVals, value];
  // localStorage
  // adding to storage
  localStorage.setItem('val', JSON.stringify(newArr));

  inpElement.value = '';

  ulElement.innerHTML = '';

  newArr.forEach(function (val) {
    const liElement = document.createElement('li');
    liElement.innerText = val;
    ulElement.appendChild(liElement)
  });

}

// localStorage.removeItem();


window.addEventListener('DOMContentLoaded', () => {
  const existingVals = localStorage.getItem('val') ? JSON.parse(localStorage.getItem('val')) : [];
  ulElement.innerHTML = '';
  existingVals.forEach(function (val) {
    const liElement = document.createElement('li');
    liElement.innerText = val;
    ulElement.appendChild(liElement)
  });
});