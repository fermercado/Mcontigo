const activeMenu = document.querySelector('.menu-hamburguer--button')
const menu = document.querySelector('.menu-options-card ')
const menuOptions = document.querySelectorAll('body a')
const section = document.querySelectorAll('section , main')


activeMenu.addEventListener('click', () => {
   
    menu.classList.toggle('activeMenu') 
    activeMenu.classList.toggle('activeMenu') 
    menu.classList.add('closeMenuSlide')
  
})

menuOptions.forEach((option)=> {
    option.addEventListener('click', (event)=> {
        event.preventDefault()
        closeMenu()

    })
})
section.forEach((section)=> {
    section.addEventListener('click', ()=> {
        closeMenu()

    })
})

function closeMenu () {
    menu.classList.remove('activeMenu')
    activeMenu.classList.remove('activeMenu')
    menu.classList.add('closeMenuSlide')
   
}





