(() => {
    
    function Burger(selector) {
        const burger = document.querySelector(selector)

        burger.addEventListener('click', (e) => {
            const langBlock = document.querySelector('.header__right__menu');
            const navBlock = document.querySelector('.header__nav');

            langBlock.classList.toggle('activeMenu')
            setTimeout(() => {
                navBlock.classList.toggle('activeMenu')
            },100)
        })
    }

    Burger('.burger')

    function scroll(selector) {
        let el = document.querySelector(selector)
        el.addEventListener('click', function (e)  {
           let link = this.href.match(/#\w+/)[0];
           
           if (link === '#footer') {
               el.href = '#main'
               el.style = 'transform: rotate(180deg)';
           }else{
               el.href = '#footer'
               el.style = 'transform: rotate(0deg)';
           }
      
        })
   
    }

    scroll('.scroll')

})()