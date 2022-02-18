import { Component, OnInit ,Input } from '@angular/core';
import { BookServiceService } from 'src/app/service/bookService/book-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss']
})
export class QuickViewComponent implements OnInit {
token:any;
bookId: any;
bookData: any;
feedBack:any;
ratings:any;
  constructor( private bookService: BookServiceService ,private router: Router) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('token');
    this.bookId = localStorage.getItem("bookId")
    this.getBookWithId()
    this.addFeedback()
  }

  getBookWithId() { 
    this.bookService.bookGetAllBooks(this.token).subscribe((response: any) => {
      response.book.forEach((element: any) => {
        console.log(element)
        if (element.bookId == this.bookId) {
          this.bookData = element;
      }
    });
  })
  }

  addToWishList(){
    let data = {
      BookId: this.bookId
    }
    console.log("added to wishlist")
    this.bookService.AddingToWishList(data,this.token).subscribe((response:any) =>{
      console.log(response)
    })
    this.router.navigateByUrl('/Dashboards/WishList')
  }

  addToCartList(){
    let data = {
      BookId: this.bookId
    }
    console.log("added to cartlist")
    this.bookService.AddingToCartList(data,this.token).subscribe((response:any) =>{
      console.log(response)
    })
    this.router.navigateByUrl('/Dashboards/CartList')
  }

  addFeedback(){
    let data = {
      BookId: this.bookId,
      feedBack : this.feedBack,
      ratings : this.ratings,
    }
    this.bookService.addfeedbackToBook(data,this.token).subscribe((response:any) =>{
      console.log(response)
    })
  } 
  
}
