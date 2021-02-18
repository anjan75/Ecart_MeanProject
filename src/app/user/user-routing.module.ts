import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsercommonComponent } from './components/usercommon/usercommon.component';
import { SubcategoryproductsComponent } from './components/subcategoryproducts/subcategoryproducts.component';
import { MoreComponent } from './components/more/more.component';
import {LoginComponent} from './components/login/login.component';
import { ActivateComponent } from './components/activate/activate.component';
import { CartComponent } from './components/cart/cart.component';
import { LogoutComponent } from './components/logout/logout.component';
import { BannerComponent } from './components/banner/banner.component';

const routes: Routes = [
  {path:"",component:UsercommonComponent,children:[
   {path:"",component:BannerComponent},
    {path:"subcat_products/:subsubcatid",component:SubcategoryproductsComponent},
    {path:"more/:prodid",component:MoreComponent},
    {path:"login",component:LoginComponent},
    {path:"reg",component:LoginComponent},
    {path:"activate",component:ActivateComponent},
    {path:"cart",component:CartComponent},
    {path:"logout",component:LogoutComponent}
  ]},
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
