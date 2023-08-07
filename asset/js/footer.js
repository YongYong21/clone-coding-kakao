const serviceContainer = document.querySelector('.service-container')
const serviceItem = document.querySelectorAll('.service-item')
console.log(window.innerWidth)
    if(window.innerWidth <= 1024){
        serviceContainer.addEventListener('click', e=>{
            e.target.querySelectorAll('.service-item').forEach(item => {
                console.log(item)
                item.classList.toggle('show')
            })
        })    
    }
