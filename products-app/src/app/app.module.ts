import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// COMPONENTS
import { AppComponent } from './app.component';

import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from '@angular/material/snack-bar';
import { MaterialModule } from './Material/material.module';
import { MatTableModule } from '@angular/material/table';
import { ProductDashboardComponent } from './Products/product-dashboard/product-dashboard.component';
import { AddProductComponent } from './Products/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDashboardComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatTableModule,
  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 5000, horizontalPosition: 'center',
                  verticalPosition : 'top' }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
