import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { NavController } from '@ionic/angular';
import { MenuService } from './provider/menu.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navController: NavController,
    private authService: AuthService,
    public menuService: MenuService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  acaoMenu(menu){
    switch(menu){
      case "catalogo":
        this.catalogo();
      break;

      case "details":
        this.details();
      break;

      case "contato":
        this.contato();
      break;

      case "sobre":
        this.sobre();
      break;


      default:
      break;
    }
  }

  catalogo(){
    this.navController.navigateForward('home');
  }

  details(){
    this.navController.navigateForward('details');
  }

  sobre(){
    this.navController.navigateForward('sobre');
  }

  contato(){
    this.navController.navigateForward('contato');
  }

  async logout(){
    try {
      await this.authService.logout();
    }catch (error){
      console.error(error);
    }
  }
}
