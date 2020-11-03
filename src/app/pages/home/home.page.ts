import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from './../../services/product.service';
import { Product } from './../../interfaces/product';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  private products = new Array<Product>();
  private productsSubscription: Subscription;


  constructor(
    private productsService: ProductService,
    private authService: AuthService
    )  {
    this.productsSubscription = this.productsService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  ngOnInit() {
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(){
    this.productsSubscription.unsubscribe();
  }

  async logout(){
    try {
      await this.authService.logout();
    }catch (error){
      console.error(error);
    }
  }
}
