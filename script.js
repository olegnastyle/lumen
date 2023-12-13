// меню

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
    }
}

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

// const rulesID = document.getElementById('rules').style.display

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

// checked
const navChecked = `border-left: solid 2px #adedf9;
                    border-bottom: solid 2px #adedf9;
                    background-color: #304170;
                    color: #ebcf9b;
                    transition: all .1s linear;`
const shopChecked = 'color: #ebcf9b;font-weight: bold;'
// nav
const info = document.querySelector('.checked-info')
const voting = document.querySelector('.checked-voting')
const shop = document.querySelector('.checked-shop')
const rewards = document.querySelector('.checked-rewards')
const stash = document.querySelector('.checked-stash')
const pvp = document.querySelector('.checked-pvp')
const donation = document.querySelector('.checked-donation')
const journal = document.querySelector('.checked-journal')
// shop
const remedy = document.querySelector('.checked-remedy')
const aid = document.querySelector('.checked-aid')
const material = document.querySelector('.checked-material')
const functional = document.querySelector('.checked-functional')
// remedy
const remedyHealth = document.querySelector('.remedy-health')
const remedyEnergy = document.querySelector('.remedy-energy')
const remedySpirit = document.querySelector('.remedy-spirit')
// aid
const aidDtorage = document.querySelector('.aid-storage')
const aidFunction = document.querySelector('.aid-function')
const aidPet = document.querySelector('.aid-pet')
const aidTeleport = document.querySelector('.aid-teleport')
const aidRefinery = document.querySelector('.aid-refinery')
// material
const materialEsper = document.querySelector('.material-esper')
const materialSkill = document.querySelector('.material-skill')
const materialGem = document.querySelector('.material-gem')
const materialFashion = document.querySelector('.material-fashion')
// functional
const functionalFunction = document.querySelector('.functional-function')


window.addEventListener('change', function validate(){
    // nav
    document.getElementById('info').checked ? info.style = navChecked : info.style = ''
    document.getElementById('voting').checked ? voting.style = navChecked : voting.style = ''
    document.getElementById('shop').checked ? shop.style = navChecked : shop.style = ''
    document.getElementById('rewards').checked ? rewards.style = navChecked : rewards.style = ''
    document.getElementById('stash').checked ? stash.style = navChecked : stash.style = ''
    document.getElementById('pvp').checked ? pvp.style = navChecked : pvp.style = ''
    document.getElementById('donation').checked ? donation.style = navChecked : donation.style = ''
    document.getElementById('journal').checked ? journal.style = navChecked : journal.style = ''
    // shop
    document.getElementById('shop-remedy').checked ? remedy.style = shopChecked : remedy.style = ''
    document.getElementById('shop-aid').checked ? aid.style = shopChecked : aid.style = ''
    document.getElementById('shop-material').checked ? material.style = shopChecked : material.style = ''
    document.getElementById('shop-functional').checked ? functional.style = shopChecked : functional.style = ''
    // remedy
    document.getElementById('remedy-health').checked ? remedyHealth.style = shopChecked : remedyHealth.style = ''
    document.getElementById('remedy-energy').checked ? remedyEnergy.style = shopChecked : remedyEnergy.style = ''
    document.getElementById('remedy-spirit').checked ? remedySpirit.style = shopChecked : remedySpirit.style = ''
    // aid
    document.getElementById('aid-storage').checked ? aidDtorage.style = shopChecked : aidDtorage.style = ''
    document.getElementById('aid-function').checked ? aidFunction.style = shopChecked : aidFunction.style = ''
    document.getElementById('aid-pet').checked ? aidPet.style = shopChecked : aidPet.style = ''
    document.getElementById('aid-teleport').checked ? aidTeleport.style = shopChecked : aidTeleport.style = ''
    document.getElementById('aid-refinery').checked ? aidRefinery.style = shopChecked : aidRefinery.style = ''
    // material
    document.getElementById('material-esper').checked ? materialEsper.style = shopChecked : materialEsper.style = ''
    document.getElementById('material-skill').checked ? materialSkill.style = shopChecked : materialSkill.style = ''
    document.getElementById('material-gem').checked ? materialGem.style = shopChecked : materialGem.style = ''
    document.getElementById('material-fashion').checked ? materialFashion.style = shopChecked : materialFashion.style = ''
    // function
    document.getElementById('functional-function').checked ? functionalFunction.style = shopChecked : functionalFunction.style = ''
})















 // if (document.getElementById('shop-aid').checked) {
    //     aid.style = 'color: #ebcf9b;font-weight:bold;'
    // } else if (document.getElementById('shop-material').checked) {
    //     material.style = 'color: #ebcf9b;font-weight:bold;'
    // } else if (document.getElementById('shop-functional').checked) {
    //     functional.style = 'color: #ebcf9b;font-weight:bold;'
    // }