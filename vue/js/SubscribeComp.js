Vue.component('subscribe', {
    template: `<div class="subscribe">
    <div class="container">
        <div class="subscribeLeft">
            <img src="images/subscribe-user.png" alt="user" class="subscribe__img">
            <div class="subscribe__review">
                &#8220;Vestibulum quis porttitor dui! Quisque viverra nunc mi, <span>a pulvinar purus condimentum</span>&#8221;
            </div>
        </div>
        <div class="subscribeRight">
            <div class="subscribe__text">
                <span>SUBSCRIBE</span><br>FOR OUR NEWLETTER AND PROMOTION
            </div>
            <form action="#" class="subscribe__form">
                <input class="subscribe__input" type="email" placeholder="Enter Your Email">
                <button class="subscribe__btn">
                    Subscribe
                </button>
            </form>
        </div>
    </div>
</div>`
})