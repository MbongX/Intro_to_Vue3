const app = Vue.createApp({
    data(){ // <- this is a functionin the es6 syntax | origanal is data: function (){}
        return {
            product: 'Socks',
            //to target on of those images we should add a new data property iour view app
            image: './assets/images/socks_green.jpg',
            inStock: false, //this will be replaced with inventory of int type
            inventory: 100
        }
    }
})