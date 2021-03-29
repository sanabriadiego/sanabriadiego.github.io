let myImage = document.getElementById('liga');
let myHeading = document.getElementById('liga-head');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/la-liga-400.jpg') {
      myImage.setAttribute('src','images/la-liga2-400.png');
      myHeading.textContent = 'LaLiga: 34 Trophies';
    } else {
      myImage.setAttribute('src','images/la-liga-400.jpg');
      myHeading.textContent = 'LaLiga';
    }
}

let myImage2 = document.getElementById('rey');
let myHeading2 = document.getElementById('rey-head');

myImage2.onclick = function() {
    let mySrc2 = myImage2.getAttribute('src');
    if(mySrc2 === 'images/copa-rey-400.jpg') {
      myImage2.setAttribute('src','images/copa-rey2-400.jpg');
      myHeading2.textContent = 'Copa del Rey: 19 Trophies';
    } else {
      myImage2.setAttribute('src','images/copa-rey-400.jpg');
      myHeading2.textContent = 'Copa del Rey';
    }
}

let myImage3 = document.getElementById('champ');
let myHeading3 = document.getElementById('champ-head');

myImage3.onclick = function() {
    let mySrc3 = myImage3.getAttribute('src');
    if(mySrc3 === 'images/champions-400.jpg') {
      myImage3.setAttribute('src','images/champions2-400.jpg');
      myHeading3.textContent = 'Champions League: 13 Trophies';
    } else {
      myImage3.setAttribute('src','images/champions-400.jpg');
      myHeading3.textContent = 'Champions League';
    }
}

let myImage4 = document.getElementById('goal');
let myHeading4 = document.getElementById('goal-head');

myImage4.onclick = function() {
    let mySrc4 = myImage4.getAttribute('src');
    if(mySrc4 === 'images/goal-400.png') {
      myImage4.setAttribute('src','images/goal2-400.jpg');
      myHeading4.textContent = 'Top Scorer: Cristiano Ronaldo 450 goals!';
    } else {
      myImage4.setAttribute('src','images/goal-400.png');
      myHeading4.textContent = 'Top Scorer';
    }
}