export default class item{
    constructor(price, quantity, product){
        this.price = price;
        this.quantity = quantity;
        this.product = product;
    }
    price(){
        return this.price;
    }
    quantity(){
        return this.quantity;
    }
    product(){
        return this.product;
    }
    total(){
        return this.price * this.quantity;
    }
}