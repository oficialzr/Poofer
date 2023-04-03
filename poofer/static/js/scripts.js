
window.addEventListener('scroll', function() {
    body = document.getElementsByTagName('body')[0]
    navbar = document.getElementById('navbar')
})



function scroller() {
    products = ['rx200.jpg', 'wrp200.jpg', 'stick-vs.jpg', 'amaze.jpg']
    cards = document.getElementsByClassName('models-img')
    for (let card in cards) {
        cards[card].style.backgroundImage = `url('../images/main/${products[card]}')`
    }
}

scroller()