const app = Vue.createApp({
    data(){ // <- this is a functionin the es6 syntax | origanal is data: function (){}
        return {
            product: 'Socks - changed'
        }
    }
})