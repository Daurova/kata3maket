

let buttonShow = document.querySelector('.button-show-hide');
let brands = document.querySelector('.brands')
let brandNames = document.querySelector('.brand-names')
let arrow = document.querySelector('.show-hide-arrow')


let showAll = function(){
brands.classList.toggle('full');
brandNames.classList.toggle('full');
buttonShow.classList.toggle('show-hide')  
buttonShow.classList.toggle('button-show-hide')
arrow.classList.toggle('show-arrow')
arrow.classList.toggle('hide-arrow')
}
buttonShow.addEventListener('click', showAll);