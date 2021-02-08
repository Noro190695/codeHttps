(() => {
    const activeLang = document.querySelector('.active__lang');
    const hiddenLang = document.querySelector('.hidden__lang');
        let langItems = hiddenLang.querySelectorAll('li');
        langItems.forEach(item => {
            item.addEventListener('click', change)
        })
       
        function change (e) {
            const val = activeLang.textContent;
            activeLang.textContent = this.textContent;
            this.textContent = val;
            console.log(hiddenLang);
            hiddenLang.classList.remove('activeLang');
        }
    }
)()