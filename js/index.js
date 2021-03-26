// Hamburger Menu
const element = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

element.addEventListener('click', () => {
    element.classList.toggle('active');
    navList.classList.toggle('active');
})

// Search Bar Animation
const searchBtn = document.querySelector('.search-btn');
const cencelBtn = document.querySelector('.cencel-btn');
const searchBox = document.querySelector('.search-box input');
const boxBtn = document.querySelector('.search-box .search-btn');
const boxCencel = document.querySelector('.search-box .cencel-btn');
const searchInput = document.querySelector('input');

searchBtn.addEventListener('click', () => {
    searchBox.classList.add('active');
    boxBtn.classList.add('active');
    boxCencel.classList.add('active');
    cencelBtn.classList.add('active');
    
    let value = searchInput.value;
    if(value){
        console.log(value);
    }
})

cencelBtn.addEventListener('click', () => {
    searchBox.classList.remove('active');
    boxBtn.classList.remove('active');
    boxCencel.classList.remove('active');
    cencelBtn.classList.remove('active');
    searchInput.value = "";
})
