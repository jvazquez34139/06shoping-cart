const $modal = $('#viewing-modal');
const $modalContent = $('#modal-content');
const $modalClose = $('#viewing-modal-close');
const $modalTitle = $('#modal-title');
const $products = $('.products-container');


const displayModal = (title, content) => {
  $modalTitle.text(title);
  $modal.show();
}

const close = () => {
  $modal.hide();
}

const activate = () => {
  $products.on('click', e => {
    const $target = $(e.target);
    const $product = $target.closest('.product');
    const title = $product.data('title');
    const content = $product.data('content');
    displayModal(title, content);
  })
  $modalClose.on('click', close);
}


export default class Purchase{
  constructor(){
      $modal.hide();
  }

  activate(){
    activate();
  }
  showModal(title, content){
    displayModal(title, content);
  }
  hideModal(){

  }
}