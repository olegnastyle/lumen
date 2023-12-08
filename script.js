function blockClick() {
    let item = document.querySelector('#item-action').style = function () {
        if (item.style === '') {
            return item.style = 'display:flex;'
            console.log(item)
        } else if (item.style === 'display:flex;') {
            return item.style = 'display:none;'
            console.log(item)
        } else {
            return item.style = ''
        }
        console.log(item)
    }
}

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true, // зациклить слайдер
    navigation: {
        nextEl: '.swiper-button-next', // кнопка назад
        prevEl: '.swiper-button-prev', // кнопка вперед
    },
    effect: 'coverflow',
    slidesPerView: 'auto',
    ceneteredSlides: true,
    coverflowEffect: {
        depth: 300,
        modifier: 1,
        rotate: 30,
        scale: 1,
        slideShadows: false, // тень на слайде
        stretch: 80, // растянуть простраство между слайдами px
    },
    keyboard: {
        enabled: true,
      },
      initialSlide: 1,
})

const rulesID = document.getElementById('rules').style.display

function rulesFlex(){
    document.getElementById("rules").style.display = 'flex';
}

function rulesClose(){
    document.getElementById("rules").style.display = 'none';
}