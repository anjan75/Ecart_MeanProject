import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmincommonComponent } from './components/admincommon/admincommon.component';
import { CategoryComponent } from './components/category/category.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SubcategoryComponent } from './components/subcategory/subcategory.component';
import { SubsubcategoryComponent } from './components/subsubcategory/subsubcategory.component';
import { AdminGuardService } from './core/services/admin-guard.service';
import { ProductComponent } from './product/product.component';
import {BrandComponent} from './components/brand/brand.component';

const routes: Routes = [
    {path:"",component:AdmincommonComponent,children:[
      {path:"",component:LoginComponent},
      {path:"log",component:LoginComponent},
      {path:"reg",component:RegistrationComponent},
      {path:"cat",component:CategoryComponent,canActivate:[AdminGuardService]},
      {path:"subcat",component:SubcategoryComponent,canActivate:[AdminGuardService]},
      {path:"subsubcat",component:SubsubcategoryComponent,canActivate:[AdminGuardService]},
      {path:"product",component:ProductComponent,canActivate:[AdminGuardService]},
      {path:"brand",component:BrandComponent,canActivate:[AdminGuardService]},
    ]},
 
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
