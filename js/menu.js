let boton = document.querySelector('.boton-menu');
let cerrar = document.querySelector('.close');
let menu = document.querySelector('.menu');
let home = document.querySelector('.home');
let servis = document.querySelector('.servis');
let about = document.querySelector('.about');
let contact = document.querySelector('.contact');




boton.addEventListener('click', function(){
  'use strict';
  menu.classList.toggle('mostrar');
});

cerrar.addEventListener('click', function(){
  'use strict';
  menu.classList.toggle('mostrar');
});

home.addEventListener('click', function(){
  'use strict';
  menu.classList.toggle('mostrar');
});


servis.addEventListener('click', function(){
  'use strict';
  menu.classList.toggle('mostrar');
});

about.addEventListener('click', function(){
  'use strict';
  menu.classList.toggle('mostrar');
});

contact.addEventListener('click', function(){
  'use strict';
  menu.classList.toggle('mostrar');
});
