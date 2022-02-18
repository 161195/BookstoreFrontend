import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookServiceService } from 'src/app/service/bookService/book-service.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  token:any;
  orderList1:any;
  orderlistCount: any;
  constructor(private bookService: BookServiceService ,private router: Router) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('token');
    this.getOrderList()
  }
  getOrderList(){
    this.bookService.getOrderListItems(this.token).subscribe((response:any)=>{
      console.log(response)
      this.orderList1 = response.order
      this.orderList1.reverse()
      this.orderlistCount = response.order.length
    })
  }

}
