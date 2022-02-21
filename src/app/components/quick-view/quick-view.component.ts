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
feedbackData:any;
  constructor( private bookService: BookServiceService ,private router: Router) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('token');
    this.bookId = localStorage.getItem("bookId")
    this.getBookWithId()
    this.addFeedback()
    this.getfeedbackWithBookId() 

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
      ratings:localStorage.getItem('currentBookRating')
      // ratings : this.ratings,
    }
    this.bookService.addfeedbackToBook(data,this.token).subscribe((response:any) =>{
      console.log(response)
    })
  } 

  starRating(data:any)
  {
    console.log(data.target.value)
    localStorage.setItem('currentBookRating',data.target.value)
  }

  getfeedbackWithBookId() { 
    let data = {
      BookId: this.bookId,
      ratings:localStorage.getItem('currentBookRating')
    }
    this.bookService.GetAllFeedbacks(data,this.token).subscribe((response: any) => {
      // response.book.forEach((element: any) => {
      //   console.log(element)
      //   if (element.bookId == this.bookId) {
      //     this.feedbackData = element;
      console.log(response)
      this.feedbackData = response.feedback;
      
      // }
    // });
  })
  }




}
