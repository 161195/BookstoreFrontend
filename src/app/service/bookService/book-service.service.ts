import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpService/http-service.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  token:any;
  constructor(private httpService:HttpServiceService) { }

  bookGetAllBooks(token:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type': ' application/json',
        Authorization:'Bearer '+ token
      })
    }
    return this.httpService.getService('/Books',true,header);

  }
  AddingToWishList(data:any,token:any)
  {
    let header={
      headers:new HttpHeaders({
        'Content-Type': ' application/json',
        Authorization:'Bearer '+ token
      })
    }
    return this.httpService.postService('/Wishlist/'+data.BookId,data,true,header);
  }
  getwishlistItems(token:any)
  {
    let header={
      headers:new HttpHeaders({
        'Content-Type': ' application/json',
        Authorization:'Bearer '+ token
      })
    }
    return this.httpService.getService('/Wishlist',true,header);
    
  }
  itemsDeleteFromWishlist(data:any,token:any)
  {
    let header={
      headers:new HttpHeaders({
        'Content-Type': ' application/json',
        Authorization:'Bearer '+ token
      })
    }
    return this.httpService.deleteService('/Wishlist/'+data.WishListId,true,header);
  }
  AddingToCartList(data:any,token:any)
  {
    let header={
      headers:new HttpHeaders({
        'Content-Type': ' application/json',
        Authorization:'Bearer '+ token
      })
    }
    return this.httpService.postService('/Cart/'+data.BookId+'/Cart',data,true,header);
    
  }
}
