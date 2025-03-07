import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterLink, RouterOutlet } from "@angular/router";
import { CurrencyPipe } from "../pipes/CurrencyPipe.pipe";
import { UpperCasePipe } from "../pipes/UpperCasePipe.pipe";
import { NgFor, NgIf } from "@angular/common";
import { ProductItems } from "../types/productItem";

@Component({
    selector: 'app-product-item',
    standalone: true,
    imports: [ RouterOutlet,FormsModule, CurrencyPipe, UpperCasePipe, NgFor, NgIf,RouterLink,],
    templateUrl: './productItem.component.html',
    styleUrl: './productItem.component.css'
  })
  export class ProductItemComponent {
    @Input() products: ProductItems[] = [];

    @Output() dataEvent = new EventEmitter<number>();

    handleDelete =  (id: number) =>{
      
      this.dataEvent.emit(id);
    }
  }