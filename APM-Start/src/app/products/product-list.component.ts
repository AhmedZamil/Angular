import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';



@Component({
    selector:'pm-products',
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css']
    // styles:['thread{color:#337AB7;}']
})
export class ProductListComponent implements OnInit {

    ngOnInit(): void {
        this.productService.getProducts().subscribe({
            next: products => {
                this.products = products
                this.filteredProducts = this.products;
            },
            error:err=> this.errorMessage = err

        });
 
        // this.listFilter = 'cart';
    }
    errorMessage:string ;
    pageTitle : string = "Product List";
    imageWidth:number = 50;
    imageMargin:number = 2;
    showImage:boolean=false;
    _listFilter : string;

    get listFilter():string {
        return this._listFilter;
    }
    set listFilter(value:string){
        this._listFilter = value;
        this.filteredProducts = this.listFilter? this.performFilterOnProducts(this.listFilter) : this.products;
    }
    message:string ;
    // filteredProducts : IProduct[] ;
     filteredProducts : IProduct[];
    products : IProduct[];

      constructor(private productService : ProductService) {

      }
      performFilterOnProducts(filterBy : string):IProduct[]{

        return this.products.filter((prod , IProduct)=> prod.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
      }

      toggleImage():void {

        this.showImage = !this.showImage;
      }
      onRatingClicked(message:string):void {
        this.pageTitle = 'product List ' + message;
      }
}