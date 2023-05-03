//Inserta las imagenes
for (let i = 0; i < 50; i++) {
    var x = Math.floor(Math.random()*(700-200+1)+100);
    
    var html = '<img class="grid-item" src="https://picsum.photos/336/'+x+'.jpg" width="236" height="'+x+'"/>';
  
    document.getElementById('contenedorimg').insertAdjacentHTML('afterend', html);
  
  }
  
  var elem = document.querySelector(".grid-container");
  var msnry = new Masonry(elem, {
    // options
    itemSelector: ".grid-item",
    columnWidth: 236,
    gutter: 20,
    isFitWidth: true
  });
  
  // Verifica si se alcanzó el fondo de la página y agrega más imagenes
  window.addEventListener('scroll', function() {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
      for (let i = 0; i < 50; i++) {
        var x = Math.floor(Math.random()*(700-200+1)+100);
        
        var html = '<img class="grid-item" src="https://picsum.photos/336/'+x+'.jpg" width="236" height="'+x+'"/>';
      
  
        contenedorimg.insertAdjacentHTML('beforeend', html);
        var elem = document.querySelector(".grid-container");
  var msnry = new Masonry(elem, {
    itemSelector: ".grid-item",
    columnWidth: 236,
    gutter: 20,
    isFitWidth: true
  });
      }
    }
  });
  
  
  
  
  