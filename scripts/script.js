$(document).ready(() => { 

  const onScrollNav = () => { 

    const nav = $('.nav') 

    let prevScroll = $(window).scrollTop() 
    let currentScroll 

    $(window).scroll(() => { 

      currentScroll = $(window).scrollTop() 

      const navHidden = () => nav.hasClass('nav_hidden') 

      if (currentScroll > 94 && !navHidden()) { 
        nav.addClass('nav_hidden') 
      }
      if (currentScroll < prevScroll && navHidden()) { 
        nav.removeClass('nav_hidden') 
      }

      prevScroll = currentScroll 

    })

  }

  onScrollNav()

})


