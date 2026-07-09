/*TO CREATE AN ANIMATION LIKE EFFECT ON THE TOGGLE BAR
WHEN YOU CLICK IT*/
console.log('JS file is loading!');
const menu = document.querySelector('#mobile-menu');
const menulinks = document.querySelector('.menubar');


console.log(menu);
console.log(menulinks);


menu.addEventListener('click', function(){
     console.log('toggle clicked!');
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');
    console.log(menulinks.className);
});