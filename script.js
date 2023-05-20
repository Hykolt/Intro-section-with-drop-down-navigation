 //VARIABLES

 const closeIcon = document.getElementById('close-icon');
 const hamburgerMenu = document.querySelector('.hamburger-menu');
 const hamburger = document.getElementById('hamburger-icon');
 const normalPage = document.querySelector('.normal-page');
 const featureBtn = document.getElementById('feature-btn');
 const featuresContent = document.querySelector('.features-content');
 const compBtn = document.getElementById('company-btn');
 const compContent = document.querySelector('.company-content');
 const arrows = document.querySelectorAll('.arrows');

//FUNCTIONS

hamburger.addEventListener('click', event => {
    hamburgerMenu.classList.add('hidden');
    normalPage.style.visibility = 'visible';

})

closeIcon.addEventListener('click', event => {
    hamburgerMenu.classList.remove('hidden');
    normalPage.style.visibility = 'hidden';
 })

 featureBtn.addEventListener('click', event => {
    featuresContent.classList.toggle('fcca-hidden');
    if (featuresContent.classList.contains('fcca-hidden')){
        arrows[0].src = '/images/icon-arrow-down.svg'
    } else {
        arrows[0].src = '/images/icon-arrow-up.svg';
    }
 })

 compBtn.addEventListener('click', event => {
    compContent.classList.toggle('fcca-hidden');
    if (compContent.classList.contains('fcca-hidden')){
        arrows[1].src = '/images/icon-arrow-down.svg'
    } else {
        arrows[1].src = '/images/icon-arrow-up.svg';
    }
 })