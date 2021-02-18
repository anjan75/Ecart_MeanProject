import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from "@angular/material/input"
import {MatButtonModule} from "@angular/material/button"
import {MatSelectModule} from "@angular/material/select"
import {MatMenuModule} from "@angular/material/menu"
import {MatToolbarModule} from "@angular/material/toolbar"
import {MatIconModule} from "@angular/material/icon"
import {MatSidenavModule} from "@angular/material/sidenav"


@NgModule({
  declarations: [],
  imports: [MatToolbarModule,MatIconModule,MatSidenavModule,
    CommonModule,MatInputModule,MatButtonModule,MatSelectModule,MatMenuModule
  ],
  exports:[MatToolbarModule,MatIconModule,MatSidenavModule,
    MatInputModule,MatButtonModule,MatSelectModule,MatMenuModule
  ]
})
export class MaterialModule { }