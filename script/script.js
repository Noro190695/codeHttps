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

})()