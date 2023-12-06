function blockClick() {
    let item = document.querySelector('#item-action').style = function (){
        if (item.style === ''){
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
