import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor( private router: Router, private userService: UserServiceService) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('token');
    this.getAllNotes()
  }
  getAllNotes() { 
    this.userService.userGetAllBooks(this.token).subscribe((response:any)=>{
      this.Booklist= response.book
      console.log(this.Booklist);
        // return this.Booklist 
        this.totalLength = response.book.length
        this.countBooks = response.book.length
        console.log(this.countBooks) 
      // this.notelist.reverse()
    })
    } 
    
    lowTohigh(){
      this.Booklist = this.Booklist.sort((low: any, high: any) => low.price - high.price);
    }
  
    highTolow(){
      this.Booklist = this.Booklist.sort((low: any, high: any) => high.price - low.price);
    }
  
    newArrivals(){
      this.Booklist.reverse();
    }

    quickview(){
      this.router.navigateByUrl('/Dashboards/quickview')
    }
}
