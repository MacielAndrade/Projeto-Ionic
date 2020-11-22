import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-introducao',
  templateUrl: './introducao.page.html',
  styleUrls: ['./introducao.page.scss'],
})
export class IntroducaoPage implements OnInit {
  flag = false;

  constructor(public navController: NavController) {
    if (this.flag!=true){
      if (localStorage.getItem('intro') === 'sim'){
      this.navController.navigateForward('login');
    }
   }
  }
  ngOnInit() {
  }
  irLogin(){
    localStorage.setItem('intro', 'sim');
    this.navController.navigateForward('login');
  }

}
