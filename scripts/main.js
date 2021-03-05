/*const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let myvariable = 'chocolate';
if (myvariable === 'chocolate') {
    alert('YES! I love chocolate!');
    
} else {
    alert('oh man...I really wanted chocolate ice cream');
    
}

function suma(n1,n2) {
    let total=n1+n2;
    return total;
}

document.querySelector('h1').onclick = function() {
    alert('Ouch! Stop poking me!');
}
*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/real_madrid_logo.png') {
      myImage.setAttribute('src','images/cristiano_ronaldo.png');
    } else {
      myImage.setAttribute('src','images/real_madrid_logo.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }

// if(!localStorage.getItem('name')) { //Comprueba si "name" no existe (con la negación!), y pasa a crearlo en la funcion
//     setUserName();
// } else {
//     let storedName = localStorage.getItem('name'); //Solo se usa para usuarios locales, no tiene base de datos
//     myHeading.textContent = 'Mozilla is cool, ' + storedName;
// }

myButton.onclick = function() {
setUserName();
}