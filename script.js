// меню

function blockClick() {
    let item = document.querySelector('#item-action').style = function () {
        if (item.style === '') {
            return item.style = 'display:flex;'
        } else if (item.style === 'display:flex;') {
            return item.style = 'display:none;'
        } else {
            return item.style = ''
        }
    }
}

console.log(document.querySelector('#auth'))
// swiper

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

// меню

function rulesFlex(){
    document.getElementById("rules").style.display = 'flex';
}

function rulesClose(){
    document.getElementById("rules").style.display = 'none';
}

function navMobileFlex(){
    document.getElementById("navigate").style.display = 'flex';
}

function navMobileClose(){
    document.getElementById("navigate").style.display = 'none';
}

function authActive(){
    document.getElementById("auth").style.transform = 'scale(1)';
}

function authClose(){
    document.getElementById("auth").style.transform = 'scale(0)';
}