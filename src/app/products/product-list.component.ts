import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product : IProduct)=>
      {
        return product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1;
      });
  }
  pageTitle: string = 'Product List';
  imageWidth:number=50;
  imagemargin:number=2;
  showImage:boolean=false;

  private _listFilter: string ;
  public get listFilter(): string {
    return this._listFilter;
  }
  public set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts=this.listFilter?this.performFilter(this.listFilter):this.products;
  }
  filteredProducts:IProduct[];

  products: IProduct[] ;
  toggleImage():void{
    this.showImage=!this.showImage;
  }
  constructor(private productService:ProductService) {
   }
   onRatingClicked(message:string):void{
    this.pageTitle='product list '+ message;
   }
  ngOnInit() {
    this.products=this.productService.getProducts();
    this.filteredProducts=this.products;
  }

}
