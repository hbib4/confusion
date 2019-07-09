import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule } from '@angular/material/toolbar';
import {MatListModule } from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule} from '@angular/material/card';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms'

import {AppRoutingModule} from '../app/app-routing/app-routing.module';


import {DishService} from '../app/services/dish.service';
import {PromotionService} from './services/promotion.service'
import 'hammerjs';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MatDialog, MatDialogModule } from '../../node_modules/@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    AppRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
  
  ],
  providers: [DishService,PromotionService ],
  entryComponents: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
