import {Component} from '@angular/core';
import {App} from 'ionic-angular';

import {RestaurantService} from '../../services/restaurant-service';
import {RestaurantPage} from "../restaurant/restaurant";

import {ItemService} from '../../services/item-service';
import {ItemPage} from "../item/item";
import {CartPage} from "../cart/cart";
/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  banner = 'assets/img/banner.png';
  // banner = 'assets/img/wel.jpg';
  restaurants: any;
  items: any;

  constructor(public app: App, public restaurantService: RestaurantService, public itemService: ItemService) {
    this.restaurants = restaurantService.getAll();
    this.items = itemService.getAll();
    // this.items = itemService.getNewItem();
  }

  // view restaurant detail
  viewRestaurant(id) {
    this.app.getRootNav().push(RestaurantPage, {id: id})
  }

  // view restaurant detail
  viewItem(id) {
    this.app.getRootNav().push(ItemPage, {id: id})
  }

  // go to cart page
  goToCart() {
    // this.nav.push(CartPage);
    this.app.getRootNav().push(CartPage);
  }
}
