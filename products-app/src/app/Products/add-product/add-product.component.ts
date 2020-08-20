import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { IProduct, IResultString, IResultArray } from 'src/app/Models/product';
import { ProductDetailsService } from '../productdetails.service';

type FormModel<T> = { [P in keyof T]: any };

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  productResult: Observable<IResultString>;
  productForm: FormGroup;
  content: string;
  title: string;
  mode: string;
  productData: IProduct;
  productAddUpdateData: IResultString;
  productEditData: IResultArray;
  snackBarString: string;

  constructor(private productService: ProductDetailsService,
              private router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private snackBar: MatSnackBar) {
    this.productForm = this.initForm();
  } // Constructor

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.title = data.title;
      this.mode = data.mode;
    });
    if (this.mode === 'edit') {
      this.route.params.subscribe(params => {
        this.productService.getProductDetailsByID$(params.id).subscribe(data => {
          this.productEditData = data;
          if (this.productEditData.message === 'Success') {
            this.productForm.patchValue(this.productEditData.result);
          } // If
        });
    });
   } // If
  } // OnInit

  private initForm() {
    const form: FormModel<IProduct> = {
      Id: [0],
      Name: ['', Validators.required],
      Price: ['', Validators.required],
      Quantity: [''],
      Description: ['']
    };
    return this.fb.group(form);
  } // Fn

  onSave() {
    if (this.mode === 'add') {
      this.snackBarString = 'Product added successfully';
      this.productResult = this.productService.addNewProductDetail$(this.productForm.value);
    } else {
      this.snackBarString = 'Product updated successfully';
      this.productResult = this.productService.updateProductDetail$(this.productForm.value);
    }
    this.productResult.subscribe(data => {
      this.productAddUpdateData = data;
      if (this.productAddUpdateData.message === 'Success') {
        this.snackBar.open(this.snackBarString, 'DISMISS');
        this.router.navigate(['/client']);
      }
    }, error => {
      this.snackBar.open('Please try again', 'DISMISS');
    });
  } // Fn
} // Export
