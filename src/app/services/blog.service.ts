import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlogCardModel } from '../models/blog-card-model';
import { ListResponseModel } from '../models/list-response-model';
import { BlogPostModel } from '../models/blog-post-model';

@Injectable({
  providedIn: 'root'
})
export class BlogService { 

  apiUrl = "http://localhost:60805/api/Blogs/"
  constructor(private httpClient:HttpClient) { }
    
  PostData(formData:FormData){
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.httpClient.post<BlogPostModel>(this.apiUrl, formData, { headers });
  }

  GetDataForHomeCards(){
    return this.httpClient.get<ListResponseModel>(this.apiUrl+ "?PageIndex=0&PageSize=10");
  }

}
