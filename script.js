let navBarContainer= document.querySelector('.navBarContainer')
document.querySelector('.hamI').addEventListener('click',()=>{
    navBarContainer.style.opacity="1"
    navBarContainer.classList.add('navBarContainerOpen')
})
document.querySelector('.closeBtn').addEventListener('click',()=>{
    navBarContainer.style.opacity="0"
    navBarContainer.classList.remove('navBarContainerOpen')
})