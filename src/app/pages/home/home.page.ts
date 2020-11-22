import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from './../../services/product.service';
import { Product } from './../../interfaces/product';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  private products = new Array<Product>();
  private productsSubscription: Subscription;
  toastCtrl: any;
  loading: HTMLIonLoadingElement;


  constructor(
    private productsService: ProductService,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private loastCtrl: ToastController
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

  async deleteProduct(id: string){
    try{
      await this.productsService.deleteProduct(id);
    }catch(error){
      this.presentToast('Erro ao Salvar');
    }
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Aguarde...' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }
}
