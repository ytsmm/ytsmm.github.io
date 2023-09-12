Vue.component('cart', {
    props: ['cartItems', 'visibility'],
    template: `
        <div class="cart-block" v-show="visibility">
            <p v-if="!cartItems.length">Cart is empty</p>
            <cart-item v-for="item of cartItems" :key="item.id_product" :cart-item="item">
            </cart-item>
        </div>
    `
});

Vue.component('cart-item', {
    props: ['cartItem'],
    template: `
    <div class="cart-item">
                    <div class="product-bio">
                        <img width=100 :src="cartItem.imgProduct" alt="Some img">
                    </div>
                    <div class="right-block">
                        <div class="product-title">{{ cartItem.product_name }}</div>
                        <div class="product-quantity">Quantity: {{ cartItem.quantity }}</div>
                        <div class="product-single-price">$ {{ cartItem.price }} each</div>
                        <div class="product-price">{{cartItem.quantity*cartItem.price}}</div>
                        <button class="buy-btn" @click="$parent.$emit('add-product', cartItem)">+</button>
                        <button class="del-btn" @click="$parent.$emit('remove-product', cartItem)">-</button>
                    </div>
                </div>
    `
})