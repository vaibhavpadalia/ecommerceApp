import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from '../authentication-service.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  productInfo: any = [];
  selectedItems: any = [];
  total = 0;
  constructor(private service: AuthenticationServiceService) {
    this.productInfo = [{
      p_img: 'http://images.samsung.com/is/image/samsung/p5/uk/smartphones/galaxy-s8/configurator/galaxys8plus_grey_all.png?$ORIGIN_PNG$',
      productId: 101.0,
      productName: 'Galaxy S8',
      price: 649,
      description: '64GB, 6GB Ram, 1080HD, 5.5 inches, Android'
    }
      ,
    {
      p_img: 'https://9to5mac.files.wordpress.com/2014/09/iphone6-select-2014.png?w=782',
      productId: 102.0,
      productName: 'iPhone 6',
      price: 749,
      description: '32GB, 64Bit, 1080HD, 4.7 inches, iOS 8'
    }
      ,
    {
      p_img: 'https://api.sonymobile.com/files/xperia-xa1-white-D1-hero-image-1dec9e60f5c6c575fb86bb34bd838ade.png',
      productId: 103.0,
      productName: 'Sony XA1',
      price: 420,
      description: '32GB, 4GB Ram, 1080HD, 6.0 inches, WP 8'
    },
    {
      p_img: 'http://images.samsung.com/is/image/samsung/p5/uk/smartphones/galaxy-s8/configurator/galaxys8plus_grey_all.png?$ORIGIN_PNG$',
      productId: 104.0,
      productName: 'Galaxy S8',
      price: 649,
      description: '64GB, 6GB Ram, 1080HD, 5.5 inches, Android'
    }
    ];
   }

  ngOnInit() {
}
  addToCart(productId: number) {
    for (let i = 0; i < this.productInfo.length ; i++) {
      if (this.productInfo[i].productId === productId) {
        this.selectedItems.push(this.productInfo[i]);
        this.total += this.productInfo[i].price;
      }
    }
  }

  removeFromCart(pid: number) {
    for (let i = 0; i < this.selectedItems.length; i++) {
      if (pid === this.selectedItems[i].productId) {
        this.total = this.total - this.selectedItems[i].price;
        this.selectedItems.splice(i , 1);
        break;
      }
  }
}

addPrice() {
  return this.service.addPrice(this.total).subscribe(res => {
    console.log(res);
    alert('Checkout Successful');
  });
}

}
