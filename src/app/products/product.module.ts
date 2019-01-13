import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ConvertToSpacePipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail/product-detail.guard';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacePipe
  ],
  imports: [
    RouterModule.forChild([
        {path:'products',component:ProductListComponent},
        {path:'products/:id',component:ProductDetailComponent,
      canActivate:[ProductDetailGuard]}
    ]),
    SharedModule
  ]
})
export class ProductModule { }
