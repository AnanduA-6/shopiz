let navBarContainer= document.querySelector('.navBarContainer')
document.querySelector('.hamI').addEventListener('click',()=>{
    navBarContainer.style.opacity="1"
    navBarContainer.classList.add('navBarContainerOpen')
})
document.querySelector('.closeBtn').addEventListener('click',()=>{
    navBarContainer.style.opacity="0"
    navBarContainer.classList.remove('navBarContainerOpen')
})

let itemCount=document.querySelector('.itemCount')

document.querySelector('.increment').addEventListener('click',()=>{
    changeCount('i')
})
document.querySelector('.decrement').addEventListener('click',()=>{
    changeCount('d')
})

function changeCount(val){
    let num=Number(itemCount.textContent)
    if(val==='i'){
        itemCount.textContent=num+1;
    } 
    if(val==="d"){
        if(num!=0){
            itemCount.textContent=num-1; 
        }
    }
    
}
