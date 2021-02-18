import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "../material/material.module";
import { UserRoutingModule } from './user-routing.module';
import { UsercommonComponent } from './components/usercommon/usercommon.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { LeftComponent } from './components/left/left.component';
import { FooterComponent } from './components/footer/footer.component';
import { SubcategoryproductsComponent } from './components/subcategoryproducts/subcategoryproducts.component';
import { MoreComponent } from './components/more/more.component';
import { LoginComponent } from './components/login/login.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { ActivateComponent } from './components/activate/activate.component';
import { CartComponent } from './components/cart/cart.component';
import { LogoutComponent } from './components/logout/logout.component';
import { BannerComponent } from './components/banner/banner.component';


@NgModule({
  declarations: [UsercommonComponent, HeaderComponent, MenuComponent, LeftComponent, FooterComponent, SubcategoryproductsComponent, MoreComponent, LoginComponent, ActivateComponent, CartComponent, LogoutComponent, BannerComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,MaterialModule
  ]
})
export class UserModule { }
