let items = document.querySelectorAll('.allowActive');
let slider = document.querySelector('.slider');
let banner2 = document.querySelector('.banner2');
let containerFuild = document.querySelector('.container-fuild');

containerFuild.addEventListener('scroll', ()=>{
    items.forEach(item => {
        if(item.offsetTop - containerFuild.scrollTop < window.innerHeight*(3/4)){
            item.classList.add('active');
        }else{
            item.classList.remove('active');
        }
    })
})
