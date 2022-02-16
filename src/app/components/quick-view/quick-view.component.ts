import { Component, OnInit ,Input } from '@angular/core';
import { BookServiceService } from 'src/app/service/bookService/book-service.service';


@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss']
})
export class QuickViewComponent implements OnInit {
token:any;
bookId: any;
bookData: any;
  constructor( private bookService: BookServiceService) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('token');
    this.bookId = localStorage.getItem("bookId")
    this.getBookWithId()
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
}
