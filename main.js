const aboutSectionPointer = document.querySelector('.about-section');
const musicSectionPointer = document.querySelector('.music-section');
const artSectionPointer = document.querySelector('.art-section');
const body = document.querySelector('body');



const aboutBtn = document.querySelector('#about-btn');
const musicBtn = document.querySelector('#music-btn');
const graphicBtn = document.querySelector('#graphic-btn');


musicBtn.addEventListener('click', openMusic);
graphicBtn.addEventListener('click', openArt);
aboutBtn.addEventListener('click', openAbout);



function openMusic() {
    body.style.overflowY = "scroll";    
    aboutSectionPointer.classList.add('hidden');
    artSectionPointer.classList.add('hidden');
    musicSectionPointer.classList.remove('hidden');   
    musicSectionPointer.style.zIndex="2";

    aboutBtn.classList.remove('active');
    graphicBtn.classList.remove('active');
    musicBtn.classList.add('active');
    
    
}

function openAbout() {
    body.style.overflowY = "scroll";
    artSectionPointer.classList.add('hidden');
    musicSectionPointer.classList.add('hidden');
    aboutSectionPointer.classList.remove('hidden');

    aboutBtn.classList.add('active');    
    graphicBtn.classList.remove('active');
    musicBtn.classList.remove('active');
    
    aboutSectionPointer.style.zIndex="1";
    musicSectionPointer.style.zIndex="0";
    artSectionPointer.style.zIndex="0";    
    
}

function openArt() {
    body.style.overflowY = "scroll";
    aboutSectionPointer.classList.add('hidden');
    musicSectionPointer.classList.add('hidden');
    artSectionPointer.classList.remove('hidden');  
    musicSectionPointer.style.zIndex="0";

    aboutBtn.classList.remove('active');
    graphicBtn.classList.add('active');
    musicBtn.classList.remove('active');
    
    aboutSectionPointer.style.zIndex="0";
    musicSectionPointer.style.zIndex="0";
    artSectionPointer.style.zIndex="1";  
}