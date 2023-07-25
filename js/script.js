    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');

    };
    let sections = document.querySelectorAll('section');
    let navlinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navlinks.forEach(links => {
                    links.classList.remove('active')
                    document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');

                });
             };
        });

        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);


        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');



    };


    ScrollReveal({ 
        reset: true,
        distance: '80px',
        duration: 2000,
        delay:200
    });

    
    ScrollReveal().reveal('.anasayfa-icerigi');

    ScrollReveal().reveal('.anasayfa-resmi', { origin: 'top', distance: '100px', duration: 2000, delay: 20, reset: true });
    ScrollReveal().reveal('.hakkinda-resmi', { origin: 'left', distance: '100px', duration: 2000, delay: 20, reset: true });
    ScrollReveal().reveal('.hakkinda-basligi', {
        origin: 'top'
      });
    ScrollReveal().reveal('.portfolyo-basligi', {
        origin: 'top'
      });
    ScrollReveal().reveal('.servis-basligi', {
        origin: 'top'
      });
      ScrollReveal().reveal('.iletisim-basligi', {
        origin: 'top'
      });
    ScrollReveal().reveal('.servis-kutucuklari', {
        distance: '0',
        duration: 2000,
        delay: 100,
        opacity: 0,
        reset: true,
        useDelay: 'once'
      });

      ScrollReveal().reveal('.iletisim form', {
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        delay: 1200,
        opacity: 0,
        reset: true,
        useDelay: 'once'
      });


      const typed = new Typed('.multiple-text', {
        strings: ['Software Developer', 'Web Developer', 'JavaScript Lover','AI Software Engineer'],
        typeSpeed:100,
        backSpeed:100,
        backDelay:1000,
        loop:true



      });