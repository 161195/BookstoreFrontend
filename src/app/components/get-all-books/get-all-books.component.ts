import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookServiceService } from 'src/app/service/bookService/book-service.service';
import { UserServiceService } from 'src/app/service/userService/user-service.service';

@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrls: ['./get-all-books.component.scss']
})
export class GetAllBooksComponent implements OnInit {
token:any;
Booklist:any;
countBooks: any;
totalLength: any;
page: number = 1;

  constructor( private router: Router, private bookService: BookServiceService) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('token');
    this.getAllBooks()
  }
  getAllBooks() { 
    this.bookService.bookGetAllBooks(this.token).subscribe((response:any)=>{
      this.Booklist= response.book
      console.log(this.Booklist);
        this.totalLength = response.book.length
        this.countBooks = response.book.length
        console.log(this.countBooks) 
    })
    } 
    
    lowTohigh(){
      this.Booklist = this.Booklist.sort((low: any, high: any) => low.discountPrice - high.discountPrice);
    }
  
    highTolow(){
      this.Booklist = this.Booklist.sort((low: any, high: any) => high.discountPrice - low.discountPrice);
    }
  
    newArrivals(){
      this.Booklist.reverse();
    }

    quickview(book:any){
      localStorage.setItem('bookId', book.bookId);
      console.log("bookId", book.bookId);
      this.router.navigateByUrl('/Dashboards/quickview/'+ book.bookId)
    }
}
