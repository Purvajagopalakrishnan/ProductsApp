import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IProduct, IResultArray, IResultString } from 'src/app/Models/product';
import { ProductDetailsService } from '../productdetails.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-product',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})

export class ProductDashboardComponent implements OnInit {
  productDetail = new MatTableDataSource<IProduct>();
  product: IResultArray;
  productDeleteData: IResultString;
  noResult: boolean;
  displayedColumns: string[] = ['Id', 'Name', 'Price', 'Description', 'Quantity', 'action'];

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor( private router: Router,
               private snackBar: MatSnackBar,
               private route: ActivatedRoute,
               private productDetailsService: ProductDetailsService) { }

  ngOnInit() {
    this.productDetail.sort = this.sort;
    this.getProductDetails();
  } // OnInit

  getProductDetails() {
    this.productDetailsService.getProductDetails$().subscribe(data => {
      this.product = data;
      if (this.product.message === 'Success') {
        this.productDetail.data =  this.product.result;
      }
    }, error => {
      console.log(Error);
    });
  } // Fn

  addProduct() {
   this.router.navigate(['add-product'], { relativeTo: this.route });
  } // Fn

  onEdit(productID: number) {
    this.router.navigate([`edit-product/${productID}`], { relativeTo: this.route });
  } // Fn

  onDelete(productID: number) {
    this.productDetailsService.deleteProductDetail$(productID).subscribe(data => {
      this.productDeleteData = data;
      if (this.productDeleteData.message === 'Success') {
        this.snackBar.open('Product Deleted Succesfully', 'Dismiss');
        this.getProductDetails();
      }
    }, error => {
      console.log(Error);
    });
  } // Fn
} // Export
