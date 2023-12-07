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
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
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
        stretch: 450
    },
    keyboard: {
        enabled: true,
      },
      initialSlide: 1,
})

