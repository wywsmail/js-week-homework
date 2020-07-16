var app = new Vue({
  el: "#app",
  data: {
    product: {},
    productArray: [
      {
        id: 123,
        unit: '台',
        category: '掌上主機',
        title: 'Switch',
        origin_price: 20000,
        price: 9980,
        description: '想玩就玩',
        content: '動森太好玩惹',
        enabled: 1,
        imageUrl: 'https://images.unsplash.com/photo-1592107761705-30a1bbc641e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
      },
      {
        id: 321,
        unit: '台',
        category: '主機',
        title: 'PS5 Wifi',
        origin_price: 29999,
        description: '次世代超強規格',
        content: '我也想要換一台 PS5 Wifi',
        price: 9487,
        enabled: 0,
        imageUrl: 'https://images.unsplash.com/photo-1592107761705-30a1bbc641e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
      }
    ],
  },
  methods: {
    addProduct() {
      var vm = this;
      if (vm.product.id) {
        const id = vm.product.id;
        vm.productArray.forEach(function (item, i) {
          if (item.id === id) {
            vm.productArray[i] = vm.product;
          }
        });
      } else {
        const id = new Date().getTime();
        vm.product.id = id;
        vm.productArray.push(vm.product);
      }
      vm.product = {};
      $('#productModal').modal('hide');
    },
    // addProduct() {
    //   if (this.product.id) {
    //     const id = this.product.id;
    //     this.productArray.forEach((item, i) => {
    //       if (item.id === id) {
    //         this.productArray[i] = this.product;
    //       }
    //     });
    //   } else {
    //     // Unix Timestamp
    //     const id = new Date().getTime();
    //     this.product.id = id;
    //     this.productArray.push(this.product);
    //   }
    //   this.product = {};
    //   $('#productModal').modal('hide');
    // },
    openModal(isNew, item) {
      switch (isNew) {
        case 'new':
          this.product = {};
          $('#productModal').modal('show');
          break;
        case 'edit':
          this.product = Object.assign({}, item);
          $('#productModal').modal('show');
          break;
        case 'delete':
          $('#delProductModal').modal('show');
          this.product = Object.assign({}, item);
          break;
        default:
          break;
      }
    },
    delProduct() {
      var vm = this;
      if (vm.product.id) {
        const id = vm.product.id;
        vm.productArray.forEach(function (item, i) {
          if (item.id === id) {
            vm.productArray.splice(i, 1);
            vm.product = {};
          }
        });
      }
      $('#delProductModal').modal('hide');
    },
    // delProduct() {
    //   if (this.product.id) {
    //     const id = this.product.id;
    //     this.productArray.forEach((item, i) => {
    //       if (item.id === id) {
    //         this.productArray.splice(i, 1);
    //         this.product = {};
    //       }
    //     });
    //   }
    //   $('#delProductModal').modal('hide');
    // },
  },
});