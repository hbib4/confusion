import { Component, OnInit } from '@angular/core';
import {PromotionService } from '../services/promotion.service';
import {DishService} from '../services/dish.service';
import { Dish } from '../shared/dish';
import { Promotion} from '../shared/promotion';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
dish : Dish ;
promotion : Promotion ;
  constructor( private promotionService: PromotionService,
  private dishService: DishService) { }

  ngOnInit() {
    this.dish= this.dishService.getFeaturedDish();
    this.promotion= this.promotionService.getFeaturedPromotion();
  }

}