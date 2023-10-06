import { Component } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})

export class MenuPage  {
  username: any;
  usernames: any = [];
  constructor(private navParams: NavParams) {
    // Recibe los datos de la página anterior
    this.username = this.navParams.get('username');
    console.log(this.username);
    
  }
}
