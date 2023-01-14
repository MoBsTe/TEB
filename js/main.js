
const addDiv = function () {                                            // создание фунцкии добавления DIV 
    const divElement = document.createElement('div');                  // добавление div
    divElement.textContent = ++divCounter;                            // добавление цифр в div +1 
    divElement.classList.add(divCounter % 5 == 0 ? 'div2' : 'div3')  // добавление класса каждому 5 div
    document.body.appendChild(divElement);                          // добавление элемента в body (дочерний элимент в конец body)
}

const button = document.querySelector('button');                 // нахождение button на странице 
button.addEventListener('click', addDiv);                       // добавление собятия на кнопку 

let divCounter = 0;



// const showScroll = function () {
//     document.classList.add;
// }

// window.addEventListener("scroll", showScroll)