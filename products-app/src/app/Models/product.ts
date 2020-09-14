import { DecimalPipe } from '@angular/common';

export interface IProduct {
    Id: number;
    Name: string;
    Price: number;
    Description: string;
    Quantity: number;
}

export interface IResultArray {
    message: string;
    result: [];
}

export interface IResultString {
    message: string;
    result: string;
}
