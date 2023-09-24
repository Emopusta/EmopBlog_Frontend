import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlogCardModel } from '../models/blog-card-model';
import { ListResponseModel } from '../models/list-response-model';

@Injectable({
  providedIn: 'root'
})
export class BlogService { 

  apiUrl = "http://localhost:60805/api/Blogs/"
  constructor(private httpClient:HttpClient) { }
    
  PostData(blogCardModel:BlogCardModel){

    return this.httpClient.post<BlogCardModel>(this.apiUrl, blogCardModel);

  }

  GetDataForHomeCards(){
    return this.httpClient.get<ListResponseModel>(this.apiUrl+ "?PageIndex=0&PageSize=10");
  }

}
