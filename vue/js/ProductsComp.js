Vue.component('products', {
    props: ['products'],
    template: `<div class="products">
                <div class="container">
                    <h1 class="products__header">Featured Items</h1>
                    <p class="products__text">Shop for items based on what we featured in this week</p>
                    <div class="product__grid">
                        <product v-for="item of products" 
                            :key="item.id_product" 
                            :product="item">
                        </product>
                    </div>
                    <button class="products__btn">Browse All Product</button>
                </div>
            </div>`
 });

 Vue.component('product', {
     props: ['product'],
     template: `
             <div class="product">
                    <div class="product__imgWrap">
                        <img class="product__img" :src="product.imgProduct" alt="Some img">
                        <div class="product-dark">
                            <button class="product__btn" @click="$parent.$emit('add-product', product)">
                                <i class="product__cartIcon fa-solid fa-cart-shopping"></i>
                                <span class="product__btnText">Add to cart</span>
                            </button>
                        </div>
                    </div>
                    <div class="product__info">
                        <h3 class="product__name">{{product.product_name}}</h3>
                        <p class="product__text">{{product.description}}</p>
                        <p class="product__price">{{product.price}} &#36;</p>
                    </div>
             </div>`
 });