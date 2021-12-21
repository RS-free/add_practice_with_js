//1. Создать маркированный список.
//Создать кнопки "Add" "Remove", которые будут менять состав списка
//Создать input с которого будем получать значение, которое будет в li
//* Четным li указать красный фон, нечетным -- синим
//Для выполнения задания используйте createElement

// const ulEl = document.createElement('ol');
// const inputEl = document.createElement('input');
// const buttonAdd = document.createElement('button');
// const buttonRemove = document.createElement('button');

// refs.container.append(inputEl, buttonAdd, buttonRemove, ulEl);

// buttonAdd.textContent = 'Add';
// buttonAdd.classList.add('btn-add')

// buttonRemove.textContent = 'Remove'
// buttonRemove.classList.add('btn-remove')

// const onAddButton = (e) => {
//     const liEl = document.createElement('li');
//     liEl.textContent = inputEl.value ? inputEl.value : 'nothing';
//     ulEl.append(liEl);

//     const ulChildrenLength = ulEl.children.length;
//     const isItemElEven = ulChildrenLength % 2 === 0;

//     liEl.classList.add(isItemElEven ? 'even' : 'odd');
//     inputEl.value = '';
// };

// const onButtonRemove = () => {
//     if (!ulEl.hasChildNodes()) return
//     ulEl.removeChild(ulEl.lastElementChild);

// }

// buttonAdd.addEventListener('click', onAddButton);
// buttonRemove.addEventListener('click', onButtonRemove);

//Создать небольшую игру:)
// - Изначально на экране пользователя будет отображаться
//какая - то форма (круг, квадрат, прямоулольник)
// - При нажатии на нее в рандомном порядке форма должна
//меняться на другую
// - Форма каждый раз должна появляться в разных местах на странице
// - Цвет формы в рандомном порядке меняется,

// const refs = {
//   container: document.querySelector(".container"),
// };

// const forms = [
//   "width: 100px; height: 100px; border-width: 1px; border-color: #000000",
//   "width: 100px; height: 100px; border-radius: 50%; border-width: 1px; border-color: #000000",
//   "width: 150px; height: 100px; border-width: 1px; border-color: #000000",
//   "width: 200px; height: 100px; border-radius: 100px / 50px;",
//   "width: 150px; height: 100px; transform: skew(20deg);",
// ];

// const formRef = document.createElement("div");
// refs.container.appendChild(formRef);
// formRef.addEventListener("click", generateForm);

// function generateForm() {
//   formRef.style.cssText = forms[randomither(forms.length - 1)];
//   formRef.style.backgroundColor = getRandomHexColor();
//   formRef.style.position = "absolute";
//   let height =
//     100 - (formRef.clientHeight * 100) / document.documentElement.clientHeight;
//   let width =
//     100 - (formRef.clientWidth * 100) / document.documentElement.clientWidth;
//   formRef.style.top = `${randomither(height)}%`;
//   formRef.style.left = `${randomither(width)}%`;
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const randomither = (max) => {
//   return Math.floor(Math.random() * max);
// };

// generateForm();

const refs = {
  ship: document.querySelector('#ship'),
  sea: document.querySelector('#sea'),

}

refs.sea.addEventListener('click', onSeaClick);

function onSeaClick(e) {
 
  const seaCords = this.getBoundingClientRect()
  console.log(e.clientY);
  console.log(seaCords.top);
  console.log(refs.sea.clientTop);
  // refs.ship.style

  const shipCoords = {
    top: e.clientY - seaCords.top - refs.sea.clientTop - refs.ship.clientHeight / 2,
    left: e.clientX - seaCords.left - refs.sea.clientLeft - refs.ship.clientLeft / 2,
  };

  console.log(shipCoords.top);
  console.log(shipCoords.left);

  if (shipCoords.top < 0) shipCoords.top = 0;
  if (shipCoords.left < 0) shipCoords.left = 0;

  if (shipCoords.left + refs.ship.clientWidth > refs.sea.clientWidth) {
    shipCoords.left = refs.sea.clientWidth - refs.ship.clientWidth
  }

  if (shipCoords.top + refs.ship.clientHeight > refs.sea.clientHeight) {
    shipCoords.top = refs.sea.clientHeight - refs.ship.clientHeight 
  }
  
  refs.ship.style.left = `${shipCoords.left}px`
  refs.ship.style.top = `${shipCoords.top}px`
}

