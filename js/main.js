window.addEventListener('scroll', () =>{
    document.querySelector('.nav').classList.toggle('window-scroll', window.scrollY > 200)
})
document.querySelector('.nav-toggle').addEventListener('click',()=>{
    document.querySelector('.menu').classList.toggle('appear')
    document.querySelector('.flex').classList.toggle('nav-toggle')
    document.querySelector('.x').classList.toggle('nav-toggle')
    document.querySelector('.ham').classList.toggle('none')
    document.querySelector('.x').classList.toggle('none')
    document.querySelector('body').classList.toggle('toggle-hidden')
})
