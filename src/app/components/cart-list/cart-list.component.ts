import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookServiceService } from 'src/app/service/bookService/book-service.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  token:any;
  cartList:any;
  cartCount:any;
  constructor(private bookService: BookServiceService ,private router: Router) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('token');
    this.getCartlist()
  }
  getCartlist(){
    this.bookService.getCartListItems(this.token).subscribe((response:any)=>{
      console.log(response)
      this.cartList = response.cart
      this.cartList.reverse()
      this.cartCount = response.cart.length
    })
  }

}
