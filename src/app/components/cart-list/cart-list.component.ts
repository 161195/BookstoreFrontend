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
  quantity = 1;
  addressList:any;
  bookId: any;

  constructor(private bookService: BookServiceService ,private router: Router) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('token');
    this.bookId = localStorage.getItem("bookId")
    this.getCartlist()
    // this.placeOrder()
  }
  getCartlist(){
    this.bookService.getCartListItems(this.token).subscribe((response:any)=>{
      console.log(response)
      this.cartList = response.cart
      this.cartList.reverse()
      this.cartCount = response.cart.length
    })
  }

  decrement(book:any){
    if(this.quantity != 1){
      this.quantity = this.quantity - 1;
      }
     this.cartQuantityUpdate(book);
  }

  increment(book:any){
    this.quantity = this.quantity + 1;
     this.cartQuantityUpdate(book);
  }

  getAddress(){
    this.bookService.getAddressOfUser(this.token).subscribe((response:any)=>{
      console.log(response)
      this.addressList = response.address
      // this.addressList.reverse()
    })
  }

  cartQuantityUpdate(book:any)
  {
    let data = {
      CartId: book.cartId,
      quantity :this.quantity,
    }
    this.bookService.cartQuantityUpdating(data,this.token).subscribe((response:any) =>{
      console.log(response)
    })
  }
  
  placeOrder(book:any)
  {
    let data = {
      BookId: this.bookId,
      addressId : book.addressId,
      quantity : this.quantity,
    }
    this.bookService.placeOrderOfBooks(data,this.token).subscribe((response:any) =>{
      console.log(response)
    })
    this.router.navigateByUrl('/Dashboards/OrderList')
  }

}
