$(document).ready(() => { 

  const onScrollNav = () => { 

    const nav = $('.nav') 

    let prevScroll = $(window).scrollTop() 
    let currentScroll 

    $(window).scroll(() => { 

      currentScroll = $(window).scrollTop() 

      const navHidden = () => nav.hasClass('nav_hidden') 

      if (currentScroll > prevScroll && !navHidden()) { 
        nav.addClass('nav_hidden') 
      }
      if (currentScroll < prevScroll && navHidden()) { 
        nav.removeClass('nav_hidden') 
      }

      prevScroll = currentScroll 

    })

  }

  onScrollNav() // вызываем основную функцию onScrollHeader

})

function preventDefault(e){
    e.preventDefault();
}

function disableScroll(){
    document.body.addEventListener('touchmove', preventDefault, { passive: false });
}
function enableScroll(){
    document.body.removeEventListener('touchmove', preventDefault, { passive: false });
}

$(document).bind(
      'touchmove',
          function(e) {
            e.preventDefault();
          }
);
