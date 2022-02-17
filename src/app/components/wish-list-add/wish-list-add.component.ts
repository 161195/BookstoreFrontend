import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookServiceService } from 'src/app/service/bookService/book-service.service';

@Component({
  selector: 'app-wish-list-add',
  templateUrl: './wish-list-add.component.html',
  styleUrls: ['./wish-list-add.component.scss']
})
export class WishListAddComponent implements OnInit {
  token:any;
  wishList1:any;
  wishlistCount: any;
  constructor(private bookService: BookServiceService ,private router: Router) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('token');
    this.getWishlist()
  }
  getWishlist(){
    this.bookService.getwishlistItems(this.token).subscribe((response:any)=>{
      console.log(response)
      this.wishList1 = response.wishlist
      this.wishList1.reverse()
      this.wishlistCount = response.wishlist.length
    })
  }
  deleteFromWishlist(){
    let data = {
      WishListId: this.wishList1.wishListId,
    }
    this.bookService.itemsDeleteFromWishlist(data,this.token).subscribe((response:any)=>{
      console.log(response)

    })
  }

}
