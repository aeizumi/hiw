import {Component} from '@angular/core';
import {NavController, ToastController, NavParams} from 'ionic-angular';
import {Storage} from '@ionic/storage';

import {ItemService} from '../../services/item-service';
import {CartPage} from "../cart/cart";

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-item',
  templateUrl: 'item.html',
})
export class ItemPage {
  item: any;
  quantity = 1;
  opt_required;
  opt_optional;
  // private storage: Storage
  constructor(public nav: NavController, public itemService: ItemService, public toastCtrl: ToastController, public navParams: NavParams, public storage: Storage) {
    // set data for item
    this.item = itemService.getItem(navParams.get('id'));
  }

  // plus quantity
  plusQty() {
    this.quantity++;
  }

  // minus quantity
  minusQty() {
    if (this.quantity > 1)
      this.quantity--;
  }

  // add item to cart
  addCart() {

    let toast = this.toastCtrl.create({
      message: 'Item added to cart',
      duration: 3000,
      position: 'middle'
    });

    toast.present();

    //------------------See variables
    console.log("q:"+this.quantity+"\n"
    +"dish_id:"+this.item.id+"\n"
    +"opt_required:"+this.opt_required+"\n"
    // +"opt_required:"+json_encode(this.opt_optional)."\n"
    );
      //-----------------Save Order
      // set a key/value
    // storage.set('quantity', this.quantity);
    //
    // // Or to get a key/value pair
    // storage.get('age').then((val) => {
    //   console.log('Your age is', val);
    // });
  }

  // go to cart page
  goToCart() {
    this.nav.push(CartPage);
  }


}
