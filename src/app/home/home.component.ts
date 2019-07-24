import { Component, OnInit, Inject } from '@angular/core';
import {PromotionService } from '../services/promotion.service';
import {DishService} from '../services/dish.service';
import { Dish } from '../shared/dish';
import { Promotion} from '../shared/promotion';
import { Leader} from '../shared/leader'
import { LeaderService } from '../services/leader.service';
import { baseURL } from '../shared/baseURL';
import { ProcessHTTPMsgService } from '../services/process-httpmsg.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
dishErrMess: string ;
dish : Dish ;
promotion : Promotion ;
leader : Leader;
  constructor( private promotionService: PromotionService,
  private dishService: DishService,
  private leaderService: LeaderService,
  private processHTTPMsgService: ProcessHTTPMsgService,
@Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.dishService.getFeaturedDish().subscribe(dish => this.dish = dish, dishErrMess => this.dishErrMess= <any>dishErrMess) ;
    this.promotionService.getFeaturedPromotion().subscribe(promotion => this.promotion= promotion);
    this.leaderService.getFeaturedLeader().subscribe(leader => this.leader= leader) ;
  }

}
