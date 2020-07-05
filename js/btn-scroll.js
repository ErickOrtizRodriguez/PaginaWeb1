let scroll = document.querySelector('.btn-scroll');

window.addEventListener('scroll',()=>{
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    scroll.style.display = 'block' ;
  }
  else
   scroll.style.display = 'none' ;
})

scroll.addEventListener('click',() =>{
  window.scroll({
    top:0 ,
    behavior: "smooth"
  })
})
