export default class Shoppingcart{
     constructor(){
          this.cart = {};
          this.total = 0;
          this.count = 0;
          this.products = [];
      }
  
      addItem(item){
          let id = item.product;
          if(this.cart[id] === undefined){
              this.cart[id] = item;
              this.products.push(item);
          }else{
              this.cart[item.product].quantity += item.quantity;
          }
      }
  
      removeItem(item){
          let id = item.product;
          this.cart[id].quantity -= item.quantity;
          if(this.cart[id].quantity <= 0){
            this.cart[id].quantity = 0;
          }
      }
  
      getItems(){
          return this.cart;
      }
  
      getTotal(){
          return this.total;
      }
  
      getCount(){
          return this.count;
      }    
}