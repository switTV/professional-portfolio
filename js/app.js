window.addEventListener('load', function(){
    new Glider(document.querySelector(".gliderList"), {
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      dots: ".gliderIndicators",
      arrows: {
        prev: ".gliderAnterior",
        next: ".gliderSiguiente"
      },
      responsive: [
        {
          // screens greater than >= 775px
          breakpoint: 560,
          settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '2',
            slidesToScroll: '2',
          }
        },{
          // screens greater than >= 1024px
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        }
      ]
    })
})