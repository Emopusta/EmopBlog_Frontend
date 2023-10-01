import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlogCardModel } from '../models/blog-card-model';
import { ListResponseModel } from '../models/list-response-model';
import { BlogPostModel } from '../models/blog-post-model';
import { BlogDetailModel } from '../models/blog-detail-model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService { 
  public isCompleted: boolean = true;
  foo: [object, boolean] | null = null;
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

  getDataById(id:string){
    
    return this.httpClient.get<BlogDetailModel>(this.apiUrl+ id);
  }

}
