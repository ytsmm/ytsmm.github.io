const app = new Vue({
    el: '#app',
    data: {
        userSearch: '',
        showCart: false,
        cartItems: [],
        filtered: [],
        products: [],
        error: false,
        itemsQuantity: 0
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error)
                    this.error = true;
                });
        },
        addProduct(item){
            this.getJson(`cart.json`)
                .then(data => {
                    if(data.result === 1){
                        let find = this.cartItems.find(product => item.id_product == product.id_product);
                       if (find) {
                            find.quantity++;
                            this.itemsQuantity++;
                        } else {
                            this.$set(item, 'quantity', 1); // реактивная конструкция
                            this.cartItems.push(item);
                            this.itemsQuantity++;
                        }
                    }
                })
        },
        removeProduct(item){
            this.getJson(`cart.json`)
                .then(data => {
                    if (data.result === 1) {
                        if (item.quantity > 1){
                            item.quantity--;
                            this.itemsQuantity--;
                        } else {
                            this.cartItems.splice(this.cartItems.indexOf(item), 1);
                            this.itemsQuantity--;
                        }
                    }
                })
        },
        filter(userSearch){
            let regexp = new RegExp(userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    mounted(){
        this.getJson('products.json')
            .then(data => {
                for(let item of data){
                    this.$data.products.push(item);
                    this.$data.filtered.push(item);
                }
            })
    }

});