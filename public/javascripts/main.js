const navbar = document.querySelector('.container-nav')
console.log(navbar);

window.addEventListener('scroll',(e)=>{
  
    if (window.scrollY>46) {
        navbar.classList.add("nav-couleur")
        navbar.classList.remove("nav-transparent")
    }else{
        navbar.classList.add("nav-transparent")
        navbar.classList.remove("nav-couleur")
    }
})

console.log('coucou',window.scrollY);