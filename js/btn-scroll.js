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

const sr = ScrollReveal({
  origin:'top',
  distance:'80px',
  duration:2000,
  reset:true
})
//baner-1 Scroll//
sr.reveal('.bener-1_title', {});
sr.reveal('.baner-1_txt', {origin: 'left',delay: 300});
sr.reveal('.baner-1_btn', {origin: 'left',delay:500});


//contenido Scroll//
sr.reveal('.titulo', {});
sr.reveal('.icon-servicios', {origin: 'left',delay: 300});
sr.reveal('.servicios-icon-text', {origin: 'left',delay:600});

//equipo Scroll//
sr.reveal('.titulo', {});
sr.reveal('.team-img', {origin: 'left',delay:100});
sr.reveal('.nombre', {origin: 'left',delay:400});
sr.reveal('.team-text', {origin: 'left',delay:600});
sr.reveal('.team-link', {origin: 'left',delay:800});

//clientes Scroll//
sr.reveal('.clientes-titulo', {});
sr.reveal('.clientes-info', {origin: 'left',delay:200});
//sr.reveal('.nombre', {origin: 'left',delay:400});
//sr.reveal('.team-text', {origin: 'left',delay:600});
//sr.reveal('.team-link', {origin: 'left',delay:800});
